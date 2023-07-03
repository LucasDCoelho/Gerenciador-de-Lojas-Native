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
        tabBarStyle:{
          backgroundColor:'#881337'
        },
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" size={32} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Reuniões"
        component={Meeting}
        options={{
          tabBarLabel: "Reuniões",
          tabBarIcon: ({ size, color }) => (
            <Icon name="users" size={size} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ size, color }) => (
            <Icon name="plus-circle" size={42} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Settins"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ size, color }) => (
            <Icon name="calendar" size={32} color={'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Setings"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ size, color }) => (
            <Icon name="gear" size={32} color={'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
