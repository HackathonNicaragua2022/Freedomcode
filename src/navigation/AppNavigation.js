import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import HomeScreen from "../screens/HomeScreen";
import TypExam from "../../exams/typExam";
import Sexuality from "../../exams/sexuality";
import Obesity from "../../exams/obesity";
import Hypertension from "../../exams/hypertension";
import Alchol from "../../exams/alchol";
import Tobacco from "../../exams/tobacco";
import Antecedent from "../../exams/antecedent";
import Shoes from "../../exams/shoes";
import TypExamTwo from "../../exams/typExamtwo";
import Cruento from "../../exams/Cruentos";
import ResultExamSelect from "../../exams/ResultsExamSelect";
import Afected from "../../exams/afected";
import Claudication from "../../exams/claudication";
import Reponse from "../../exams/Reponse";
import Pallor from "../../exams/pallor";
import Soplos from "../../exams/soplos";
import Capillary from "../../exams/capillary";
import Venous from "../../exams/venous";
import Temperature from "../../exams/temperature";
import Nail from "../../exams/nail";
import Atrophy from "../../exams/atrophy";
import Pain from "../../exams/pain";
import Deformation from "../../exams/deformation";
import Scale from "../../exams/scale";
import ScaleResult from "../../exams/ScaleResults";
import Age from "../../exams/age";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="TypExam" component={TypExam} />
        <Stack.Screen name="Sexuality" component={Sexuality} />
        <Stack.Screen name="Obesity" component={Obesity} />
        <Stack.Screen name="Hypertension" component={Hypertension} />
        <Stack.Screen name="Alchol" component={Alchol} />
        <Stack.Screen name="Tobacco" component={Tobacco} />
        <Stack.Screen name="Antecedent" component={Antecedent} />
        <Stack.Screen name="Shoes" component={Shoes} />

        <Stack.Screen name="TypeExamTwo" component={TypExamTwo} />
        <Stack.Screen name="Cruentos" component={Cruento} />
        <Stack.Screen name="ResultExamSelect" component={ResultExamSelect} />
        <Stack.Screen name="Afected" component={Afected} />
        <Stack.Screen name="Claudication" component={Claudication} />
        <Stack.Screen name="Reponse" component={Reponse} />
        <Stack.Screen name="Pallor" component={Pallor} />
        <Stack.Screen name="Soplos" component={Soplos} />
        <Stack.Screen name="Capillary" component={Capillary} />
        <Stack.Screen name="Venous" component={Venous} />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Nail" component={Nail} />
        <Stack.Screen name="Atrophy" component={Atrophy} />
        <Stack.Screen name="Pain" component={Pain} />
        <Stack.Screen name="Deformation" component={Deformation} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Scale" component={Scale} />
        <Stack.Screen name="ScaleResult" component={ScaleResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
