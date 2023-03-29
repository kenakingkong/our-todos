import { GestureResponderEvent, StyleSheet, Text } from "react-native";
import Card from "../ui/card";

export type CategoryCardProps = {
  id: number;
  name: string;
  onPress: (event: GestureResponderEvent) => void;
};

const CategoryCard = ({ id, name, onPress }: CategoryCardProps) => {
  return (
    <Card onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.count}>0/10</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  count: {},
});

export default CategoryCard;
