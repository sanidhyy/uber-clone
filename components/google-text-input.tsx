import type { GoogleInputProps } from "@/types/type";
import { Text, View } from "react-native";

export const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyles,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center realtive z-50 rounded-xl mb-5 ${containerStyles}`}
  >
    <Text>Google Text Input</Text>
  </View>
);
