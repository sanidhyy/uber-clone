import { useAuth, useUser } from "@clerk/clerk-expo";
import * as Location from "expo-location";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GoogleTextInput } from "@/components/google-text-input";
import { Map } from "@/components/map";
import { RideCard } from "@/components/ride-card";
import { LINKS } from "@/config";
import { icons, images } from "@/constants";
import { useLocationStore } from "@/store";
import { useFetch } from "@/lib/fetch";
import type { Ride } from "@/types/type";

const Home = () => {
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const { signOut } = useAuth();
  const { user } = useUser();
  const { data: recentRides, loading } = useFetch<Ride[]>(
    `/(api)/ride/${user?.id}`,
  );

  const [hasPermissions, setHasPermissions] = useState(false);

  const handleSignOut = () => {
    signOut();

    router.replace("/(auth)/sign-in");
  };
  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setDestinationLocation(location);

    router.push("/(root)/find-ride");
  };

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") return setHasPermissions(false);

      setHasPermissions(true);

      let location = await Location.getCurrentPositionAsync();

      const address = await Location.reverseGeocodeAsync({
        longitude: location.coords?.longitude,
        latitude: location.coords?.latitude,
      });

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        address: `${address[0].name}, ${address[0].region}`,
      });
    };

    requestLocation();
  }, [setUserLocation]);

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  alt="No recent rides found"
                  className="w-40 h-40"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found.</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text
                className="text-base font-JakartaExtraBold"
                numberOfLines={1}
              >
                Welcome{" "}
                {user?.firstName || user?.emailAddresses[0].emailAddress} 👋
              </Text>

              <View className="flex flex-row items-center gap-x-1">
                <Link
                  href={LINKS.sourceCode}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="justify-center items-center w-10 h-10"
                >
                  <Image
                    source={icons.github}
                    className="w-6 h-6"
                    alt="GitHub"
                  />
                </Link>

                <TouchableOpacity
                  onPress={handleSignOut}
                  className="justify-center items-center w-10 h-10 rounded-full bg-white"
                >
                  <Image source={icons.out} className="w-4 h-4" alt="Logout" />
                </TouchableOpacity>
              </View>
            </View>

            <GoogleTextInput
              icon={icons.search}
              containerStyles="bg-white shadow-md shadow-neutral-300"
              handlePress={handleDestinationPress}
            />

            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Your Current Location
            </Text>

            <View className="flex flex-row items-center bg-transparent h-[300px]">
              {hasPermissions && <Map />}
            </View>

            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
