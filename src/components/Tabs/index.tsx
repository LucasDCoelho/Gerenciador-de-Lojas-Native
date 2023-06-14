import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome";

import Home from "../../screens/Home";
import Settings from "../../screens/Settings";
import Profile from "../../screens/Profile";

export const TabNavigate = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      safeAreaInsets={{ bottom: 10 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={32} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="user" size={32} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <Icon name="gear" size={32} />,
        }}
      />
    </Tab.Navigator>
  );
};
