<a name="readme-top"></a>

# Ryde - A Full Stack Uber clone using React Native and Expo

![Ryde - A Full Stack Uber clone using React Native and Expo](/.github/images/img_main.png "Ryde - A Full Stack Uber clone using React Native and Expo")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/uber-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/uber-clone/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/uber-clone/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/uber-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/uber-clone/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/uber-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/uber-clone/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/uber-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/uber-clone/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/uber-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/uber-clone/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of Ryde.

```bash
uber-clone/
  |- app/
    |-- (api)/
    |-- (auth)/
    |-- (root)/
    |-- _layout.tsx
    |-- +html.tsx
    |-- index.tsx
  |- assets/
    |-- fonts/
    |-- icons/
    |-- images/
  |- components/
    |-- custom-button.tsx
    |-- driver-card.tsx
    |-- google-text-input.tsx
    |-- input-field.tsx
    |-- map.tsx
    |-- oauth.tsx
    |-- payment.tsx
    |-- ride-card.tsx
    |-- ride-layout.tsx
  |- config/
    |-- index.ts
  |- constants/
    |-- index.ts
  |- lib/
    |-- auth.ts
    |-- fetch.ts
    |-- map.ts
    |-- utils.ts
  |- scripts/
    |-- reset-project.js
  |- store/
    |-- index.ts
  |- types/
    |-- image.d.ts
    |-- type.d.ts
  |- .env
  |- .env.example
  |- .eslintrc.js
  |- .gitignore
  |- app.json
  |- babel.config.js
  |- bun.lockb
  |- eas.json
  |- environment.d.ts
  |- nativewind-env.d.ts
  |- package.json
  |- tailwind.config.js
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root folder.
4. Contents of `.env`:

```env
# .env

# clerk publishable key
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# postgres db url (neon db)
DATABASE_URL="postgresql://username:password@hostname:port/uber-clone?sslmode=require"

# expo api server url (you can set it to any random url for development)
EXPO_PUBLIC_SERVER_URL="https://example.com/"

# geoapify api key
EXPO_PUBLIC_GEOAPIFY_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# google api key
EXPO_PUBLIC_GOOGLE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# stripe api key
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

5. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

6. Install Expo Cli using `npm i -g expo-cli` or `yarn global add expo-cli` to run your Expo app.

### **7. Clerk Publishable Key**

- Go to the [Clerk Dashboard](https://dashboard.clerk.dev/).
- Sign in or sign up if you don’t have an account.
- Create a new application (or select your existing project).
- Navigate to the "API Keys" section.
- Copy the **Publishable Key** that starts with `pk_test_`.
- Add it to your `.env` file:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

### **8. PostgreSQL Database URL (Neon Database)**

- Go to the [Neon Dashboard](https://neon.tech/).
- Sign in or create an account.
- Create a new project.
- Once the project is created, go to the "Connection Details" section.
- Copy the **connection string** and replace the placeholder values with your actual database credentials.
- The URL will look something like this:

```env
DATABASE_URL="postgresql://username:password@hostname:port/uber-clone?sslmode=require"
```

Replace `username`, `password`, `hostname`, and `port` accordingly.

---

### **9. Expo API Server URL**

- This can be any URL during development.
- Set it to a random URL for local testing:

```env
EXPO_PUBLIC_SERVER_URL="https://example.com/"
```

---

### **10. Geoapify API Key**

- Go to the [Geoapify Dashboard](https://www.geoapify.com/).
- Sign up or log in to your account.
- Navigate to the "API Keys" section under your profile.
- Generate a new API key.
- Copy the key and add it to your `.env` file:

```env
EXPO_PUBLIC_GEOAPIFY_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

### **11. Google API Key**

- Go to the [Google Cloud Console](https://console.cloud.google.com/).
- Create a new project (or use an existing one).
- Navigate to the "APIs & Services" section and enable the required APIs (Places API, Directions API).
- Go to the "Credentials" tab and click on "Create Credentials."
- Select "API Key."
- Copy the generated **API Key** and add it to your `.env` file:

```env
EXPO_PUBLIC_GOOGLE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

### **12. Stripe API Keys**

- Go to the [Stripe Dashboard](https://dashboard.stripe.com/).
- Log in or sign up for an account.
- Navigate to the "Developers" section, then "API Keys."
- Copy the **Publishable Key** (starts with `pk_test_`) and **Secret Key** (starts with `sk_test_`).
- Add them to your `.env` file:

```env
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

13. Now app is fully configured :+1: and you can start using this app using `expo start`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

<p align="center">
<img src="/.github/images/img1.png" alt="Functional Login component" height="700" title="Functional Login component" />
<img src="/.github/images/img2.png" alt="Functional Register component" height="700" title="Functional Register component" />
</p>

<p align="center">
<img src="/.github/images/img3.png" alt="Modern UI/UX" height="700" title="Modern UI/UX" />
<img src="/.github/images/img4.png" alt="Choose a driver" height="700" title="Choose a driver" />
</p>

<p align="center">
<img src="/.github/images/img5.png" alt="Payment Integration with Stripe" height="700" title="Payment Integration with Stripe" />
<img src="/.github/images/img6.png" alt="Easily Book your ride" height="700" title="Easily Book your ride" />
</p>

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![CSS](https://skillicons.dev/icons?i=css "CSS")](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Babel](https://skillicons.dev/icons?i=babel "Babel")](https://babeljs.io/ "Babel")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in Ryde:

- [@clerk/clerk-expo](https://www.npmjs.com/package/@clerk/clerk-expo "~2.2.5")
- [@expo/metro-runtime](https://www.npmjs.com/package/@expo/metro-runtime "~3.2.3")
- [@expo/vector-icons](https://www.npmjs.com/package/@expo/vector-icons "~14.0.2")
- [@gorhom/bottom-sheet](https://www.npmjs.com/package/@gorhom/bottom-sheet "~4.6.4")
- [@neondatabase/serverless](https://www.npmjs.com/package/@neondatabase/serverless "~0.9.4")
- [@react-navigation/native](https://reactnavigation.org/ "~6.0.2")
- [@stripe/stripe-react-native](https://www.npmjs.com/package/@stripe/stripe-react-native "~0.38.4")
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier "~9.1.0")
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier "~5.2.1")
- [Expo](https://docs.expo.dev/versions/latest/ "~51.0.28")
- [Expo Constants](https://docs.expo.dev/versions/latest/sdk/constants "~16.0.2")
- [Expo Font](https://docs.expo.dev/versions/latest/sdk/font "~12.0.9")
- [Expo Linking](https://docs.expo.dev/versions/latest/sdk/linking "~6.3.1")
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location "~17.0.1")
- [Expo Router](https://docs.expo.dev/versions/latest/sdk/router "~3.5.23")
- [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore "~13.0.2")
- [Expo Splash Screen](https://docs.expo.dev/versions/latest/sdk/splash-screen "~0.27.5")
- [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar "~1.12.1")
- [Expo System UI](https://docs.expo.dev/versions/latest/sdk/system-ui "~3.0.7")
- [Expo Web Browser](https://docs.expo.dev/versions/latest/sdk/webbrowser "~13.0.3")
- [Nativewind](https://www.npmjs.com/package/nativewind "~2.0.11")
- [Prettier](https://prettier.io/ "~3.3.3")
- [React](https://react.dev/ "~18.2.0")
- [React DOM](https://react.dev/ "~18.2.0")
- [React Native](https://reactnative.dev/ "~0.74.5")
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/ "~2.19.0")
- [React Native Google Places Autocomplete](https://www.npmjs.com/package/react-native-google-places-autocomplete "~2.5.6")
- [React Native Maps](https://www.npmjs.com/package/react-native-maps "~1.18.0")
- [React Native Maps Directions](https://www.npmjs.com/package/react-native-maps-directions "~1.9.0")
- [React Native Modal](https://www.npmjs.com/package/react-native-modal "~13.0.1")
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/ "~3.10.1")
- [React Native Safe Area Context](https://www.npmjs.com/package/react-native-safe-area-context "~4.10.5")
- [React Native Screens](https://reactnavigation.org/docs/react-native-screens "~3.31.1")
- [React Native Swiper](https://www.npmjs.com/package/react-native-swiper "~1.6.0")
- [React Native Web](https://necolas.github.io/react-native-web/docs/ "~0.19.10")
- [Stripe](https://www.npmjs.com/package/stripe "~16.9.0")
- [Zustand](https://www.npmjs.com/package/zustand "~4.5.5")
- [@babel/core](https://babel.dev/ "~7.20.0")
- [@types/jest](https://www.npmjs.com/package/@types/jest "~29.5.12")
- [@types/react](https://www.npmjs.com/package/@types/react "~18.2.45")
- [@types/react-test-renderer](https://www.npmjs.com/package/@types/react-test-renderer "~18.0.7")
- [ESLint](https://eslint.org/ "~8.57.0")
- [eslint-config-expo](https://www.npmjs.com/package/eslint-config-expo "~7.1.2")
- [Jest](https://jestjs.io/ "~29.2.1")
- [Jest Expo](https://www.npmjs.com/package/jest-expo "~51.0.3")
- [React Test Renderer](https://react.dev/ "~18.2.0")
- [Tailwind CSS](https://tailwindcss.com/ "~3.3.2")
- [TypeScript](https://www.typescriptlang.org/ "~5.3.3")

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fzoom-clone "Tweet about this project")
[![Subscribe to my YouTube Channel](https://img.shields.io/youtube/channel/subscribers/UCNAz_hUVBG2ZUN8TVm0bmYw)](https://www.youtube.com/@OPGAMER./?sub_confirmation=1 "Subscribe to my YouTube Channel")

## :books: Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/uber-clone&Timeline" title="Github Star History">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/uber-clone&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/uber-clone&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/uber-clone&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top" title="Back to top">back to top</a>)</p>
