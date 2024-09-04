import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";
import { Image, Text, View } from "react-native";

import { icons } from "@/constants";

import { CustomButton } from "./custom-button";
import { googleOAuth } from "@/lib/auth";
import { router } from "expo-router";

type OAuthProps = {
  title: string;
};

export const OAuth = ({ title }: OAuthProps) => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleOAuth = useCallback(async () => {
    try {
      const result = await googleOAuth(startOAuthFlow);

      if (result?.code === "session_exists" || result?.code === "success") {
        router.replace("/(root)/(tabs)/home");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow]);

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-px bg-general-100" />

        <Text className="text-lg">Or</Text>

        <View className="flex-1 h-px bg-general-100" />
      </View>

      <CustomButton
        title={title}
        className="mt-5 w-full shadow-none"
        iconLeft={() => (
          <Image
            source={icons.google}
            alt="Google logo"
            resizeMode="contain"
            className="h-5 w-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleOAuth}
      />
    </View>
  );
};
