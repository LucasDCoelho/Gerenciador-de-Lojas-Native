import React from "react";
import { Text, View, Pressable } from "react-native";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View className="flex-1 bg-slate-800">
      <View className="w-full justify-center items-start p-2 bg-rose-900">
        <View className="w-16 h-16 m-2 items-center justify-center rounded-full border-2 border-white">
          <Text className="text-white text-3xl">B</Text>
        </View>
        <Text className="text-white text-md font-bold">Bruno Gomes</Text>
        <Text className="text-white text-md font-semibold">
          Brunogomesdsilva8@gmail.com
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export const HeaderDrawer = () => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      className="p-4 mr-[38%] flex-row items-center"
      onPress={() => navigate("lojas")}>
      <Ionicons name="chevron-back" size={23} />
      <Text className="text-md font-extrabold">Loja Parangaba</Text>
    </Pressable>
  );
};

export const DrawerOptions: DrawerNavigationOptions = {
  title: "",
  drawerInactiveTintColor: "#fff",
  drawerStyle: {
    backgroundColor: "#1e293b",
  },
  headerStyle: {
    backgroundColor: "#881337",
  },
  headerRight: HeaderDrawer,
};
