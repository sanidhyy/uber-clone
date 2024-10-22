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

      // google api key
      EXPO_PUBLIC_GOOGLE_API_KEY: string;

      // stripe api key
      EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      STRIPE_SECRET_KEY: string;
    }
  }
}
