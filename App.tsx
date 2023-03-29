import { ConvexProvider, ConvexReactClient } from "convex/react";
import "react-native-get-random-values";
import { CONVEX_URL } from "@env";
import { StatusBar } from "expo-status-bar";
import Nav from "./components/nav";

const convex = new ConvexReactClient(CONVEX_URL, {
  unsavedChangesWarning: false,
});

const App = () => {
  return (
    <ConvexProvider client={convex}>
      <Nav />
      <StatusBar style="auto" />
    </ConvexProvider>
  );
};

export default App;
