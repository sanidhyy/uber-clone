import type {
  StartOAuthFlowParams,
  StartOAuthFlowReturnType,
} from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";

import { fetchAPI } from "./fetch";

export interface TokenCache {
  getToken: (key: string) => Promise<string | undefined | null>;
  saveToken: (key: string, token: string) => Promise<void>;
  clearToken?: (key: string) => void;
}

export const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("GET_TOKEN_CACHE: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("SAVE_TOKEN_CACHE: ", err);

      return;
    }
  },
};

type StartOAuthFlowType = (
  startOAuthFlowParams?: StartOAuthFlowParams,
) => Promise<StartOAuthFlowReturnType>;

export const googleOAuth = async (startOAuthFlow: StartOAuthFlowType) => {
  try {
    const { createdSessionId, signUp, setActive } = await startOAuthFlow({
      redirectUrl: Linking.createURL("/(root)/(tabs)/home", {
        scheme: "ryde", // match with scheme in app.json
      }),
    });

    if (createdSessionId) {
      if (setActive) {
        await setActive!({ session: createdSessionId });

        if (signUp && signUp.createdUserId) {
          await fetchAPI("/(api)/user", {
            method: "POST",
            body: JSON.stringify({
              name: `${signUp.firstName} ${signUp.lastName}`,
              email: signUp.emailAddress,
              clerkId: signUp.createdUserId,
            }),
          });
        }

        return {
          success: true,
          code: "success",
          message: "You are logged in.",
        };
      }

      return {
        success: false,
        code: "failed",
        message: "An error occured.",
      };
    } else {
      // Use signIn or signUp for next steps such as MFA
    }
  } catch (err) {
    console.log("[OAUTH]: ", err);

    return {
      success: false,
      code: (
        err as {
          code?: string;
        }
      )?.code,
      message: "Internal Server Error.",
    };
  }
};
