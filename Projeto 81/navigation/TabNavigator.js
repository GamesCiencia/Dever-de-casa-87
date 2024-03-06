import React from "react";
import { Stylesheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
const Tab = createMaterialBottomTabNavigator;



const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name == 'Feed'){
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'createPost'){
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
                activeTintColor= {'#ee8249'}
                inactiveTintColor= {'gray'}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CriarPost" component={CreatePost} />
        </Tab.Navigator>     
    );
}