import { CustomButton } from "@/components/custom-button";
import { GoogleTextInput } from "@/components/google-text-input";
import { RideLayout } from "@/components/ride-layout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";
import { router } from "expo-router";
import { Text, View } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout title="Ride" snapPoints={["85%"]}>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>

        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress ?? ""}
          containerStyles="bg-neutral-100"
          textInputBackgroundColor="#F5F5F5"
          handlePress={setUserLocation}
        />
      </View>

      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>

        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress ?? ""}
          containerStyles="bg-neutral-100"
          textInputBackgroundColor="transparent"
          handlePress={setDestinationLocation}
        />
      </View>

      <CustomButton
        title="Find now"
        onPress={() => router.replace("/(root)/confirm-ride")}
        className="mt-5"
      />
    </RideLayout>
  );
};

export default FindRide;
