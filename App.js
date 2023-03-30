import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import InputSide from "./src/components/InputSide";
import Cards from "./src/components/Cards";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <InputSide copyData={copyData} setCopyData={setCopyData} data={data} />
      <Cards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
