import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Afected from "./exams/Afected";
import Age from "./exams/Age";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Age} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
