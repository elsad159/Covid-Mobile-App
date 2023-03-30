import * as React from "react";
import { Input } from "@rneui/base";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Button } from "react-native-elements";

export default InputSide = () => {
  const [input, setInput] = useState("");
  const handlePress = () => {
    setInput("");
  };

  return (
    <View style={{ paddingBottom: 20 }}>
      <Input
        value={input}
        onChangeText={setInput}
        containerStyle={{ paddingTop: 10 }}
        disabledInputStyle={{ background: "#ddd" }}
        leftIconContainerStyle={{}}
        rightIcon={<Icon name="close" size={20} onPress={handlePress} />}
        placeholder="Search country..."
      />
      <Button
        style={{
          width: 150,
          borderRadius: 100,
          marginLeft: 10,
          backgroundColor: "lightgreen",
        }}
        title="Search"
      ></Button>
    </View>
  );
};
