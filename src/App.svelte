<script lang="ts">
import currencyEmojiFlags, { type CurrencyCode } from './currency-emoji-flags';
import './app.css';

type ExchangeRates = Record<Lowercase<CurrencyCode>, number>;
type Flow = 'row' | 'column';
type Variant = 'from' | 'to' | 'both';

let rates = $state<ExchangeRates | null>(null);
let loading = $state(true);
let error = $state<string | null>(null);

const params = new URLSearchParams(window.location.search);
const base = (params.get('base') || 'eur').trim().toUpperCase() as CurrencyCode;
const currencies = (params.get('currencies') || 'usd,gbp,chf,jpy,cny')
  .split(',')
  .map((c) => c.trim().toUpperCase()) as CurrencyCode[];
const variant = (params.get('variant') || 'both')
  .trim()
  .toLowerCase() as Variant;
const flow = (params.get('flow') || 'column').trim().toLowerCase() as Flow;

function lower<S extends string = string>(s: S) {
  return s.toLowerCase() as Lowercase<S>;
}

$effect(() => {
  rates = null;
  loading = true;
  error = null;

  fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lower(base)}.json`,
  )
    .then((response) => response.json())
    .then((data: Record<Lowercase<CurrencyCode>, ExchangeRates>) => {
      rates = data[lower(base)];
    })
    .catch((err) => {
      error =
        err instanceof Error ? err.message : 'Failed to fetch currency data';
    })
    .finally(() => {
      loading = false;
    });
});

function formatNumber(rate: number) {
  return rate.toLocaleString(window.navigator.language, {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });
}
</script>

<div class="min-h-screen p-4 text-base">
  <div class="max-w-full mx-auto">
    {#if loading}
      <div class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-6 w-6 border-2 border-notion-text-primary border-t-transparent"></div>
        <span class="ml-3 text-sm text-black">Loading exchange rates...</span>
      </div>
    {:else if error}
      <div class="py-8 text-center">
        <p class="text-red-500 text-sm">⚠️ {error}</p>
      </div>
    {:else if rates}
      <!-- Notion-style table container -->
      <div class={flow === 'column' ? "overflow-x-auto whitespace-nowrap" : "contents"}>
        <div
          class="notion-table"
          style={`grid-template-columns: repeat(${+(variant === 'both') + (flow === 'column' ? currencies.length : 2)}, minmax(0, 1fr));`}
        >
          <div class={flow === 'column' ? 'contents' : 'flex flex-col'}>
            {#if variant === 'both'}<div class="td" style="border: 0;">&nbsp;</div>{/if}
            {#each currencies as currency}
              <div class={flow === 'column' ? 'th text-center' : 'td'}>
                {currencyEmojiFlags[currency]} {currency}
              </div>
            {/each}
          </div>

          <!-- Row 1 -->
          {#if variant !== 'to'}
            <div class={flow === 'column' ? 'contents' : 'flex flex-col'}>
              {#if variant === 'both'}
                <div class={flow === 'column' ? 'td' : 'th text-right'}>From {currencyEmojiFlags[base]} {base}</div>
              {/if}
              {#each currencies as currency}
                {@const rate = rates[lower(currency)]}
                <div class={`td ${flow === 'column' ? 'text-center' : 'text-right'}`}>
                  {typeof rate === 'number' ? formatNumber(rate) : '—'}
                </div>
              {/each}
            </div>
          {/if}
          {#if variant !== 'from'}
            <div class={flow === 'column' ? 'contents' : 'flex flex-col'}>
              {#if variant === 'both'}
                <div class={flow === 'column' ? 'td' : 'th text-right'}>To {currencyEmojiFlags[base]} {base}</div>
              {/if}
              {#each currencies as currency}
                {@const rate = rates[lower(currency)]}
                <div class={`td ${flow === 'column' ? 'text-center' : 'text-right'}`}>
                  {typeof rate === 'number' ? formatNumber(1 / rate) : '—'}
                </div>
              {/each}
            </div>
          {/if}

        </div>
      </div>
    {/if}
  </div>
</div>
