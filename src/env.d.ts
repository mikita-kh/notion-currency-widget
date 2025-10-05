/// <reference types="@rsbuild/core/types" />
/// <reference types="svelte" />

// Ensure Svelte 5 runes are available globally
declare global {
  const $state: typeof import('svelte').$state;
  const $effect: typeof import('svelte').$effect;
  const $derived: typeof import('svelte').$derived;
  const $props: typeof import('svelte').$props;
  const $bindable: typeof import('svelte').$bindable;
  const $inspect: typeof import('svelte').$inspect;
}
