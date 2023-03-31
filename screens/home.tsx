import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Layout from "../components/layout";
import ListCard from "../components/listCard";
import { NavProps } from "../components/nav";
import List from "../ui/list";
import Title from "../ui/title";
import { Button } from "react-native";

type Props = NativeStackScreenProps<NavProps, "Home">;

const HomeScreen = ({ route, navigation }: Props) => {
  return (
    <Layout>
      <Title>Our Todos</Title>
      <List
        data={[
          { id: 1, name: "List 1" },
          { id: 2, name: "List 2" },
          { id: 3, name: "List 3" },
        ]}
        renderItem={({ item }) => (
          <ListCard
            {...item}
            onPress={() =>
              navigation.navigate("List", {
                id: item.id,
                name: item.name,
              })
            }
          />
        )}
      />
    </Layout>
  );
};

export default HomeScreen;
