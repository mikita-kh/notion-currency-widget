import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  future: {
    optimizeUniversalDefaults: true,
  }
} satisfies Config;
