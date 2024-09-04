import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";

import { CustomButton } from "@/components/custom-button";
import { InputField } from "@/components/input-field";
import { OAuth } from "@/components/oauth";
import { icons, images } from "@/constants";

const SignIn = () => {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/");
      } else {
        Alert.alert("Error", "Invalid email or password.");
        setForm((prevForm) => ({
          ...prevForm,
          password: "",
        }));
      }
    } catch (err: any) {
      Alert.alert("Error", err?.errors[0]?.longMessage);
      setForm((prevForm) => ({
        ...prevForm,
        password: "",
      }));
    }
  }, [isLoaded, signIn, form.email, form.password, setActive, router]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image
            source={images.signUpCar}
            alt="Car"
            className="z-0 w-full h-[250px]"
            resizeMode="contain"
          />

          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="john.doe@email.com"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm((prevForm) => ({
                ...prevForm,
                email: value,
              }))
            }
            keyboardType="email-address"
          />

          <InputField
            label="Password"
            placeholder="••••••••"
            icon={icons.lock}
            secureTextEntry
            value={form.password}
            onChangeText={(value) =>
              setForm((prevForm) => ({
                ...prevForm,
                password: value,
              }))
            }
          />

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <OAuth title="Sign in with Google" />

          <Link
            href="/sign-up"
            className="text-base text-center text-general-200 mt-10"
          >
            <Text>Don&apos;t have an account? </Text>
            <Text className="text-primary-500">Sign up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
