import { View, Text } from "react-native";
import Routes from "../routes";

export default function Home({route }) {
  const {username}= route.params;
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>Bem vindo, {username}
      </Text>
    </View>
  );
}
