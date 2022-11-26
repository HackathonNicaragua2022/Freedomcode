import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Afected from "./exams/Afected";
import Age from "./exams/Age";
import Alchol from "./exams/Alchol";
import Antecedent from "./exams/Antecedent";
import Atrophy from "./exams/Atrophy";
import Claudication from "./exams/Claudication";
import Nail from "./exams/Nail";
import Pain from "./exams/Pain";
import Response from "./exams/Reponse";
import Scale from "./exams/Scale";
import Sexuality from "./exams/Sexuality";
import Shoes from "./exams/Shoes";
import Soplos from "./exams/Soplos";
import Temperature from "./exams/Temperature";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Temperature} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
