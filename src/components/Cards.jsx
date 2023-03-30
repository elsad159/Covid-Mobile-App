import * as React from "react";
import { Card } from "@rneui/base";
import { View } from "react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { Image } from "react-native";

export default Cards = () => {
  const [countries, setCountries] = useState([]);
  const [copyCountries, setCopyCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://corona.lmao.ninja/v2/countries");
      const data = await response.json();
      setCountries(data);
      setCopyCountries(data);
    };
    fetchData();
  }, []);

  return (
    <ScrollView
      copyCountries={copyCountries}
      setCopyCountries={setCopyCountries}
    >
      {copyCountries.map((country) => (
        <Card key={country.country}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 25,
              alignItems: "center",
            }}
          >
            <Text>{country.country}</Text>
            <Image
              source={{ uri: country.countryInfo.flag }}
              style={{ width: 80, height: 50 }}
            />
          </View>
          <Card.Divider />
          <Text>1. Population: {country.population}</Text>
          <Text>2. Cases: {country.cases}</Text>
          <Text>3. Deaths: {country.deaths}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};
