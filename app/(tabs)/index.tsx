import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">
        Open up App folder to start working on your app!
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
