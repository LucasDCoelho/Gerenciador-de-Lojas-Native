import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import { DrawerNavigate } from "../components/Drawer";
import Shops from "../screens/shops";
import NotFound from "../screens/notFound";

type AuthContextType = {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

export const Routes = () => {
  const Stack = createNativeStackNavigator();

  const [signedIn, setSignedIn] = React.useState(false);

  React.useEffect(() => {
    console.log(signedIn);
  }, [signedIn]);

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn }}>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        {signedIn ? (
          <>
            <Stack.Screen component={DrawerNavigate} name="home" />
            <Stack.Screen component={Shops} name="lojas" />
          </>
        ) : (
          <>
            <Stack.Screen component={Login} name="login" />
          </>
        )}
        <Stack.Screen component={NotFound} name="notFound" />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};
