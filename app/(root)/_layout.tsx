import { useGlobalContext } from "@/lib/globalProvider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
    const { loading, isLoggedIn } = useGlobalContext();

    if (loading) {
        return (
            <SafeAreaView className="bg-white h-full flex justify-center items-center">
                <ActivityIndicator className="text-primary-300" size="large">

                </ActivityIndicator>
            </SafeAreaView>
        )
    }

    if (!isLoggedIn) {
        return <Redirect href="/SignIn"/>
    }

    return <Slot />
}