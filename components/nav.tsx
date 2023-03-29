import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import ListScreen from "../screens/list";
import ListCategoryScreen from "../screens/listCategory";

export type NavProps = {
  Home: undefined;
  List: { id: number; name: string };
  Category: { listId: number; listName: string; id: number; name: string };
  Login: undefined;
};

const Stack = createNativeStackNavigator<NavProps>();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Category" component={ListCategoryScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
