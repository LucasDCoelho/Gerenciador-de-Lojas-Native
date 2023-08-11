import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/Ionicons";

// layout
import { CustomDrawer, DrawerOptions } from "../components/Drawer/customDrawer";

// screens
import Checklist from "../screens/checklist";
import AgendaScreen from "../screens/agenda";

export const DrawerNavigate = () => {
  const { Group, Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      initialRouteName="Agenda"
      screenOptions={DrawerOptions}
      drawerContent={(props) => <CustomDrawer {...props} />}>

      <Group
        screenOptions={{
          drawerLabelStyle: { marginLeft: -20 },
          drawerActiveBackgroundColor: "#881337",
          drawerActiveTintColor: "#ffffff",
        }}>

        <Screen
          name="Agenda"
          component={AgendaScreen}
          options={{
            drawerLabel: "Pagina Inicial",
            drawerIcon: ({ size, color }) => (
              <Icon name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Checklist"
          component={Checklist}
          options={{
            drawerLabel: "checklist",
            drawerIcon: ({ size, color }) => (
              <Icon name="clipboard-sharp" size={size} color={color} />
            ),
          }}
        />
      </Group>

    </Navigator>
  );
};
