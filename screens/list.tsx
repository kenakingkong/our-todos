import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryCard from "../components/categoryCard";
import { NavProps } from "../components/nav";
import Layout from "../ui/layout";
import List from "../ui/list";
import Title from "../ui/title";

type Props = NativeStackScreenProps<NavProps, "List">;

const ListScreen = ({ route, navigation }: Props) => {
  const { id, name } = route.params;

  React.useEffect(() => {
    navigation.setOptions({ title: "Our Todos" });
  }, []);

  return (
    <Layout>
      <Title>{name}</Title>
      <List
        data={[
          {
            id: 1,
            name: "Bars",
          },
          {
            id: 2,
            name: "Restaurants",
          },
          {
            id: 3,
            name: "Parks",
          },
        ]}
        renderItem={({ item }) => (
          <CategoryCard
            {...item}
            onPress={() =>
              navigation.navigate("Category", {
                listId: id,
                listName: name,
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

export default ListScreen;
