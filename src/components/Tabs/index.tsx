import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome";

import Home from "../../screens/home/home";
import Settings from "../../screens/home/settings";
import Meeting from "../../screens/home/meeting";
import { CustomTabs } from "./customTabs";

export const TabNavigate = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabs {...props} />}
      screenOptions={{

        tabBarStyle: {
          backgroundColor: '#881337'
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
    </Tab.Navigator>
  );
};
