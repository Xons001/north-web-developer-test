# Project Structure and Setup

This project is a Nuxt 3 application showcasing yachts for sale, with responsive design elements for desktop and mobile views. We implemented Tailwind CSS for styling and integrated a dynamic API to fetch yacht data. Below is a comprehensive breakdown of the project's structure, features, and setup instructions.

---

## Project Structure

* **assets/**
  * `tailwind.css`: Contains Tailwind base styles (`@tailwind base`, `@tailwind components`, `@tailwind utilities`) to configure the main styling for the project.

* **components/**
  * `Header.vue`: The main header displaying the logo and styled to remain fixed at the top of the page for better navigation.
  * `LoadMoreButton.vue`: A button component for loading additional yacht data upon clicking. It emits an event to fetch more data when clicked.
  * `ViewToggle.vue`: A component with toggle buttons to switch between grid views (2-column and 4-column layouts). It hides on mobile screens to enhance the mobile experience.
  * `YachtCard.vue`: Displays individual yacht details, including image, price, length, guests, and cabins, with a responsive layout and hover effects.
  * `YachtList.vue`: The main list of yachts, managing the layout according to the selected view (2-column or 4-column) and fetching more yachts through `LoadMoreButton.vue`.

* **composables/**
  * `useYachtsData.ts`: A custom composable for fetching yacht data from an external API. Manages data retrieval, pagination, and error handling. Includes a function to fetch more data when the "Load More" button is clicked.

* **pages/**
  * `index.vue`: The main page of the application, integrating `YachtList.vue` and setting up the layout.

* **public/**
  * `assets/ROY.png`: The logo used in the header.
  * `favicon.ico`: The favicon for the project.
  * `output.css`: Generated CSS output for Tailwind styles.

* **server/api/**
  * `fetchYachtsData.ts`: A server-side API route utilizing the `h3` module to fetch yacht data from an external API with pagination.

* **types/**
  * `YachtTypes.ts`: Defines the TypeScript types for yacht data, ensuring that properties like `id`, `name`, `buyPrice`, `length`, `cabins`, and `guests` are correctly structured.

* **root files**
  * `app.css`: Main CSS file for additional global styles.
  * `app.vue`: The root component that sets up the main layout, including the header and primary content area.
  * `nuxt.config.ts`: Nuxt configuration file, including modules and global settings.
  * `tailwind.config.js`: Tailwind CSS configuration file to extend default settings.
  * `tsconfig.json`: TypeScript configuration file to define paths, modules, and type-checking settings.

---

## API Integration

* **API Route**: `/api/fetchYachtsData`
  * Fetches yacht data from `https://royaloceanyachts.com/api/yachts?buy=true&page={page}`, where `{page}` is dynamically set for pagination. This allows the application to load data progressively as the user clicks "Load More."

---

## Important Notes

* **Responsive Design**: The application is designed to adapt between desktop and mobile screens, hiding certain components (e.g., `ViewToggle.vue`) on smaller screens and adjusting layout automatically.
* **Dynamic Data Loading**: The project uses Nuxt's `$fetch` function to retrieve paginated data from the API endpoint, enhancing performance by loading only the required data as the user interacts.
* **TypeScript Integration**: TypeScript is used throughout the project for type safety, particularly with the custom types defined in `types/YachtTypes.ts`.

---

## Dependencies

* **Nuxt**: 3.13.2
* **Vue.js**: 3.5.12
* **TypeScript**
* **h3**: Used for server-side API routes
* **Tailwind CSS**: For responsive and utility-based styling

---

## Setup

### Cloning and Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/Xons001/north-web-developer-test.git

# Navigate to the project directory
cd north-web-developer-test.git

# Install dependencies
pnpm install

# Run application
pnpm run dev
```
---

## Additional Notes
This application was built with responsiveness and ease of use in mind, leveraging Tailwind CSS for styling and Vue 3/Nuxt 3 for reactive data handling. All components and composables are modular and designed for scalability, making it easy to add more features in the future.

