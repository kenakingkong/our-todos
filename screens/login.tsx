import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { NavProps } from "../components/nav";
import Layout from "../ui/layout";

type Props = NativeStackScreenProps<NavProps, "Login">;

const LoginScreen = (props: Props) => {
  return (
    <Layout>
      <Text>Login Page</Text>
    </Layout>
  );
};

export default LoginScreen;
