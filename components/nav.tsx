import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import ListScreen from "../screens/list";
import ListCategoryScreen from "../screens/listCategory";
import ModalScreen from "../screens/modal";

export type NavProps = {
  Home: undefined;
  List: { id: number; name: string };
  Category: { listId: number; listName: string; id: number; name: string };
  Login: undefined;
  Modal: undefined;
};

const Stack = createNativeStackNavigator<NavProps>();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Category" component={ListCategoryScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
