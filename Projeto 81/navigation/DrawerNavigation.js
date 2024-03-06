import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { FlatList } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

<View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
    <View style={styles.appTitle}>
        <View style={styles.appIcon}>
            <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
            ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Espectagrama</Text>
        </View>
    </View>
    <View style={styles.cardContainer}>
        <FlatList
            keyExtractor={this.keyextractor}
            data={posts}
            renderItem={this.renderItem}
        />
    </View>
</View>