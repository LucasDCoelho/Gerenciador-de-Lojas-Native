import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome";

import Home from "../../screens/home/home";
import Settings from "../../screens/home/settings";
import Meeting from "../../screens/home/meeting";
import { View } from "react-native";

export const TabNavigate = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#881337",
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Reuniões"
        component={Meeting}
        options={{
          tabBarLabel: "Reuniões",
          tabBarIcon: ({ size, color }) => (
            <Icon name="users" size={size} color={color} />
            ),
          }}
          />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <View className="h-20 w-20 rounded-full justify-center items-center shadow-md shadow-black mb-10 bg-black">
                        <Icon name="home" size={36} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ size, color }) => (
            <Icon name="gear" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
