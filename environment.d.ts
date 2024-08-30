// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // clerk publishable key
      EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: string;

      // postgres db url (neon db)
      DATABASE_URL: string;

      // geoapify api key
      EXPO_PUBLIC_GEOAPIFY_API_KEY: string;
    }
  }
}
