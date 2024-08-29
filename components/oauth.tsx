import { Image, Text, View } from "react-native";

import { icons } from "@/constants";

import { CustomButton } from "./custom-button";

type OAuthProps = {
  title: string;
};

export const OAuth = ({ title }: OAuthProps) => {
  const handleGoogleSignIn = () => {};

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
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};
