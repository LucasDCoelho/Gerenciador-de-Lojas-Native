import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome";

import Settings from "../../screens/settings";
import Home from "../../screens/home";

export const TabNavigate = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="user" size={23} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <Icon name="gear" size={23} />,
        }}
      />
    </Tab.Navigator>
  );
};
