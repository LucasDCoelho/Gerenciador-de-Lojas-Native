import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { DrawerItemCostumer } from "./drawerItem";
import React from "react";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 bg-red-500">
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
        <DrawerItemCostumer
          label="Agenda"
          onPress={() => navigate("notFound")}
          nameIcon={"calendar-alt"}
        />
        <DrawerItemCostumer
          label="Documentos"
          onPress={() => navigate("notFound")}
          nameIcon={"file-alt"}
        />
        <DrawerItemCostumer
          label="RH"
          onPress={() => navigate("notFound")}
          nameIcon={"users"}
        />
        <DrawerItemCostumer
          label="Planilhas"
          onPress={() => navigate("notFound")}
          nameIcon={"table"}
        />
        <DrawerItemCostumer
          label="Manutenção"
          onPress={() => navigate("notFound")}
          nameIcon={"wrench"}
        />
        <DrawerItemCostumer
          label="Checklist"
          onPress={() => navigate("notFound")}
          nameIcon={"clipboard-list"}
        />
        <DrawerItemCostumer
          label="Compras"
          onPress={() => navigate("notFound")}
          nameIcon={"dolly-flatbed"}
        />
        <DrawerItemCostumer
          label="Info Gerais"
          onPress={() => navigate("notFound")}
          nameIcon={"info-circle"}
        />
      </DrawerContentScrollView>
      <View className="w-full">
        <View className="h-1 mx-4 rounded-md bg-black" />
        <DrawerItemCostumer
          label="Logout"
          onPress={() => navigate('login')}
          nameIcon={"sign-out-alt"}
        />
      </View>
    </View>
  );
};
