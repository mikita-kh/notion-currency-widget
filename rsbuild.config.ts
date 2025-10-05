import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';

export default defineConfig({
  plugins: [pluginSvelte()],
  output: {
    inlineStyles: true,
    inlineScripts: true,
    dataUriLimit: Number.MAX_SAFE_INTEGER,
    cleanDistPath: true,
    filenameHash: false,
    sourceMap: {
      js: false,
      css: false,
    },
  },
  html: {
    title: 'Currency Widget',
    inject: 'body',
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
  tools: {
    rspack: {
      optimization: {
        minimize: true,
        usedExports: true,
        sideEffects: true,
        concatenateModules: true,
        providedExports: true,
        innerGraph: true,
      },
    },
    swc: {
      jsc: {
        minify: {
          compress: {
            // Удаляем всё ненужное
            unused: true,
            dead_code: true,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
            passes: 3,
            arrows: true,
            booleans: true,
            collapse_vars: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            hoist_funs: true,
            hoist_props: true,
            if_return: true,
            join_vars: true,
            loops: true,
            negate_iife: true,
            properties: true,
            reduce_vars: true,
            sequences: true,
            side_effects: true,
            switches: true,
            typeofs: true,
            inline: 3,
          },
          mangle: {
            toplevel: true,
            safari10: true,
          },
          format: {
            comments: false,
            asciiOnly: true,
          },
        },
        transform: {
          optimizer: {
            globals: {
              vars: {
                __DEBUG__: 'false',
              },
            },
          },
        },
      },
    },
  },
});
