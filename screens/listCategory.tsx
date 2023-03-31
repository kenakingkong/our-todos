import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Layout from "../components/layout";
import { NavProps } from "../components/nav";
import Title from "../ui/title";
import List from "../ui/list";
import BackButton from "../components/backButton";
import ListItem from "../components/listItem";

type Props = NativeStackScreenProps<NavProps, "Category">;

const ListCategoryScreen = ({ route, navigation }: Props) => {
  const { listId, listName, id, name } = route.params;

  React.useEffect(() => {
    navigation.setOptions({ title: listName });
  }, []);

  const onShowOptions = ({ name }: { name: string }) => {
    navigation.navigate("Modal");
  };

  return (
    <Layout>
      <BackButton onPress={() => navigation.pop()}>
        <Text>{listName}</Text>
      </BackButton>
      <Title>{name}</Title>
      <View>
        <List
          data={[
            { name: "todo item number one", isChecked: false },
            { name: "todo item 2", isChecked: false },
            { name: "todo item nubmer three", isChecked: true },
          ]}
          renderItem={({ item }) => (
            <ListItem
              {...item}
              onShowOptions={() => onShowOptions({ name: name })}
            />
          )}
        />
      </View>
    </Layout>
  );
};

export default ListCategoryScreen;
