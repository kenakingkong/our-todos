import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import Card from "../ui/card";

export type ListCardProps = {
  id: number;
  name: string;
  onPress: (event: GestureResponderEvent) => void;
};

const ListCard = ({ id, name, onPress }: ListCardProps) => {
  return (
    <Card onPress={onPress}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.participants}>subtitle goes here</Text>
      </View>
      <Text style={styles.count}>0/10</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  participants: {},
  count: {},
});

export default ListCard;
