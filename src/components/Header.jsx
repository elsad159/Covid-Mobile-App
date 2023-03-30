import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderDrawer = () => (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
        Drawer content
      </Text>
      <TouchableOpacity
        style={{
          margin: 20,
          padding: 10,
          backgroundColor: "#f2f2f2",
          borderRadius: 10,
        }}
        onPress={closeDrawer}
      >
        <Text style={{ fontSize: 16 }}>Close Drawer</Text>
      </TouchableOpacity>
    </View>
  );

  const openDrawer = () => {
    setDrawerOpen(true);
    this.drawer.openDrawer();
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    this.drawer.closeDrawer();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
      }}
    >
     
      <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 5 }}>
        Covid Info
      </Text>
      <DrawerLayout
        ref={(ref) => {
          this.drawer = ref;
        }}
        drawerPosition="left"
        drawerWidth={200}
        onDrawerClose={closeDrawer}
        onDrawerOpen={openDrawer}
        renderNavigationView={renderDrawer}
        drawerBackgroundColor="#fff"
      />
    </View>
  );
};

export default Header;
