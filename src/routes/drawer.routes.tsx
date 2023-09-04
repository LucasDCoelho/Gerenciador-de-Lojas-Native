import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/FontAwesome5";

// layout
import { CustomDrawer, DrawerOptions } from "../components/Drawer/customDrawer";

// screens
import AgendaScreen from "../screens/Agenda";
import ChecklistScreen from "../screens/Checklist";
import DashboardScreen from "../screens/Dashboard";

export const DrawerNavigate = () => {
  const { Group, Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      initialRouteName="checklist"
      screenOptions={DrawerOptions}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Group
        screenOptions={{
          drawerLabelStyle: { marginLeft: -20 },
          drawerActiveBackgroundColor: "#881337",
          drawerActiveTintColor: "#ffffff",
        }}>
        <Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            drawerLabel: "Página Inicial",
            drawerIcon: ({ size, color }) => (
              <Icon name="home" size={size} color={color} />
            ),
            
          }}
        />

        <Screen
          name="agenda"
          component={AgendaScreen}
          options={{
            drawerLabel: "Agenda",
            drawerIcon: ({ size, color }) => (
              <Icon name="calendar" size={size} color={color} />
            ),
            
          }}
        />
        <Screen
          name="checklist"
          component={ChecklistScreen}
          options={{
            drawerLabel: "Checklist",
            drawerIcon: ({ size, color }) => (
              <Icon name="clipboard-list" size={size} color={color} />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
};
