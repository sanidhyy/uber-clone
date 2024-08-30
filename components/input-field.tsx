import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import type { InputFieldProps } from "@/types/type";

export const InputField = ({
  label,
  labelStyles,
  icon,
  secureTextEntry = false,
  containerStyles,
  inputStyles,
  iconStyles,
  className,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="my-2 w-full">
        <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyles}`}>
          {label}
        </Text>

        <View
          className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyles}`}
        >
          {icon && (
            <Image
              source={icon}
              alt={`${label} icon`}
              className={`h-6 w-6 ml-4 mt-1 ${iconStyles}`}
            />
          )}

          <TextInput
            className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 text-left ${inputStyles}`}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoComplete="off"
            selectionColor="#0286ff"
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
