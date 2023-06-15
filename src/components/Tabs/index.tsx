import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome";

import Home from "../../screens/home/home";
import Settings from "../../screens/home/settings";
import Meeting from "../../screens/home/meeting";

export const TabNavigate = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ size, color }) => (
            <Icon name="gear" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
