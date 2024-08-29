import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import ReactNativeModal from "react-native-modal";

import { CustomButton } from "@/components/custom-button";
import { InputField } from "@/components/input-field";
import { OAuth } from "@/components/oauth";
import { icons, images } from "@/constants";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification((prevVerification) => ({
        ...prevVerification,
        state: "pending",
      }));

      setForm((prevForm) => ({
        ...prevForm,
        password: "",
      }));
    } catch (err: any) {
      Alert.alert("Error", err?.errors[0]?.longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        // TODO: Create a database user

        await setActive({ session: completeSignUp.createdSessionId });
        setVerification((prevVerification) => ({
          ...prevVerification,
          state: "success",
        }));
      } else {
        setVerification((prevVerification) => ({
          ...prevVerification,
          error: "Verification failed.",
          state: "failed",
        }));
      }
    } catch (err: any) {
      setVerification((prevVerification) => ({
        ...prevVerification,
        error: err?.errors[0]?.longMessage,
        state: "failed",
      }));
    }
  };

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
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm((prevForm) => ({
                ...prevForm,
                name: value,
              }))
            }
          />

          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm((prevForm) => ({
                ...prevForm,
                email: value,
              }))
            }
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
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
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <OAuth title="Sign up with Google" />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Sign in</Text>
          </Link>
        </View>

        <ReactNativeModal
          onModalHide={() =>
            setVerification((prevVerification) => ({
              ...prevVerification,
              state: "success",
            }))
          }
          isVisible={verification.state === "pending"}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="text-2xl font-JakartaExtraBold mb-2">
              Verification
            </Text>

            <Text className="font-Jakarta mb-5">
              We&apos;ve sent a verification code to {form.email}
            </Text>

            <InputField
              label="Code"
              icon={icons.lock}
              placeholder="12345"
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification((prevVerification) => ({
                  ...prevVerification,
                  code,
                }))
              }
            />

            {verification.error && (
              <Text className="text-rose-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}

            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className="mt-5 bg-emerald-500"
            />
          </View>
        </ReactNativeModal>
        <ReactNativeModal isVisible={verification.state === "success"}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />

            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>

            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You&apos;ve succesfully verified your accound.
            </Text>

            <CustomButton
              title="Browse Home"
              onPress={() => router.replace("/(root)/(tabs)/home")}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignUp;
