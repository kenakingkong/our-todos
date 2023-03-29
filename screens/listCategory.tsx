import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Layout from "../ui/layout";
import { NavProps } from "../components/nav";
import Title from "../ui/title";
import CheckBox from "../components/checkBox";
import List from "../ui/list";

type Props = NativeStackScreenProps<NavProps, "Category">;

const ListCategoryScreen = ({ route, navigation }: Props) => {
  const { listId, listName, id, name } = route.params;

  React.useEffect(() => {
    navigation.setOptions({ title: listName });
  }, []);

  return (
    <Layout>
      <Title>{name}</Title>
      <View>
        <List
          data={[
            { name: "todo item number one", isChecked: false },
            { name: "todo item 2", isChecked: false },
            { name: "todo item nubmer three", isChecked: true },
          ]}
          renderItem={({ item }) => <CheckBox {...item} />}
        />
      </View>
    </Layout>
  );
};

export default ListCategoryScreen;
