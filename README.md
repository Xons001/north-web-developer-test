# Project Structure
* **components/**
  * `YachtList.vue`: Displays the list of yachts. Each yacht shows its name and price in EUR. If any of these values are unavailable, a placeholder message is displayed.
* **composables/**
  * `useYachtsData.ts`: A custom composable for retrieving yacht data from an API. Manages data retrieval and error handling.
* **pages/**
  * `index.vue`: The main page that uses the `YachtList.vue` component to display yachts on the homepage.
* **server/api/**
  * `fetchYachtsData.ts`: Defines a backend API route using h3 to fetch yachts from an external API.
* **types/**
  * `YachtTypes.ts`: Defines the structure of the `Yacht` object, including attributes such as `id`, `name`, `buyPrice`, `length`, `cabins`, and `guests`.

# API
* **API Route**: ```/api/fetchYachtsData```
  * This route fetches yacht data from ```https://royaloceanyachts.com/api/yachts?buy=true&page=1```. The data is retrieved and returned in the response for the frontend to process.

# Important Notes
* The project uses Nuxt 3.13.2 and Vue 3.5.12.
* The ```useFetch``` function is used to retrieve data from the backend API.
* TypeScript is fully integrated with custom types defined in `types/YachtTypes.ts`.

# Dependencies
* Nuxt 3.13.2
* Vue.js 3.5.12
* TypeScript
* h3 (for API routes)

# Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
