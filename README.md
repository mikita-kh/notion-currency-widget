# Notion Currency Widget

A sleek currency exchange rates widget designed for embedding in Notion pages. Built with Svelte, Rsbuild, and Tailwind CSS with automatic light/dark theme support.

## Features

- 💱 **Real-time Exchange Rates** - Displays current exchange rates 
- 🌗 **Automatic Theme Detection** - Follows system preferences (light/dark mode)
- 🎨 **Notion-style Design** - Seamlessly integrates with Notion's visual language
- 🏳️ **Country Flags** - Visual currency identification with emoji flags
- 📱 **Responsive Layout** - Works perfectly on desktop and mobile devices
- ⚡ **Fast Loading** - Built with Rsbuild for optimal performance

## Supported Currencies

- 🇺🇸 USD (US Dollar)
- 🇪🇺 EUR (Euro)
- 🇬🇧 GBP (British Pound)
- 🇯🇵 JPY (Japanese Yen)
- 🇨🇦 CAD (Canadian Dollar)
- 🇦🇺 AUD (Australian Dollar)
- 🇨🇭 CHF (Swiss Franc)
- 🇨🇳 CNY (Chinese Yuan)

## Tech Stack

- **Framework**: Svelte 5 with runes
- **Build Tool**: Rsbuild (Rspack-based)
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **API**: Exchange rates from exchangerate-api.com

## Setup

Install the dependencies:

```bash
pnpm install
```

## Development

Start the dev server:

```bash
pnpm dev
```

The widget will be available at [http://localhost:3001](http://localhost:3001).

## Production

Build the widget for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

**Note**: Make sure you have push access to the repository for manual deployment.

## Embedding in Notion
TODO

## Theme Support

The widget automatically detects and adapts to:
- **System theme** preferences (light/dark)
- **Manual theme switching** via data attributes
- **Notion's theme changes** when embedded

## Project Structure

```
notion-currency-widget/
├── src/
│   ├── App.svelte          # Main widget component
│   ├── index.ts            # Application entry point
│   └── index.css           # Global styles & CSS variables
├── rsbuild.config.ts       # Rsbuild configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json
```

## Configuration
TODO

## Learn More

- [Rsbuild Documentation](https://rsbuild.rs) - Build tool features and APIs
- [Svelte 5 Documentation](https://svelte.dev) - Component framework with runes
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Flowbite Svelte](https://flowbite-svelte.com) - UI component library

## License

MIT License - feel free to use this widget in your Notion workspace!