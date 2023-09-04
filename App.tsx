import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/app.routes";
import { TaskProvider } from "./src/contexts/taskContext";


export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer >
        <Routes />
      </NavigationContainer>
    </TaskProvider>
  );
}
