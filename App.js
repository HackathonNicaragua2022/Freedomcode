import * as React from "react";


// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={WelcomeScreen} />
//         <Stack.Screen name="Login" component={Scale} />
//         <Stack.Screen name="Signup" component={Signup} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

import AppNavigation from "./src/navigation/AppNavigation";

function App() {
  return <AppNavigation />;
}

export default App;
