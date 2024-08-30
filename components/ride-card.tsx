import { Image, Text, View } from "react-native";

import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import type { Ride } from "@/types/type";

export const RideCard = ({ ride }: { ride: Ride }) => {
  const {
    destination_latitude,
    destination_longitude,
    origin_address,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  } = ride;

  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-col items-center justify-center p-3">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />

          <View className="flex flex-col mx-5 gap-y-5 flex-1">
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.to} alt="Origin" className="w-5 h-5" />

              <Text className="font-JakartaMedium" numberOfLines={1}>
                {origin_address}
              </Text>
            </View>

            <View className="flex flex-row items-center gap-x-2">
              <Image
                source={icons.point}
                alt="Destination"
                className="w-5 h-5"
              />

              <Text className="font-JakartaMedium" numberOfLines={1}>
                {destination_address}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="font-JakartaMedium text-gray-500 text-xs">
              Date &amp; Time
            </Text>

            <Text className="font-JakartaMedium text-gray-500 text-xs">
              {formatDate(created_at)}, {formatTime(ride_time)}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="font-JakartaMedium text-gray-500 text-xs">
              Driver
            </Text>

            <Text className="font-JakartaMedium text-gray-500 text-xs">
              {driver.first_name} {driver.last_name}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="font-JakartaMedium text-gray-500 text-xs">
              Car Seats
            </Text>

            <Text className="font-JakartaMedium text-gray-500 text-xs">
              {driver.car_seats}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="font-JakartaMedium text-gray-500 text-xs">
              Payment Status
            </Text>

            <Text
              className={`font-JakartaMedium capitalize text-gray-500 text-xs ${payment_status === "paid" ? "text-emerald-500" : "text-rose-500"}`}
            >
              {payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
