import React, { Component } from 'react';
import{ Text, View } from 'react-native';

import PostCard from "../screens/PostCard";

export default class Feed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        light_theme: true
    };
    }
}

fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", snapshot => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
  };

<View style={StyleSheet.container}>
    <SafeAreaView style={StyleSheet.droidSafeArea} />
    <View style={StyleSheet.appTitle}>
        <View style={styles.appIcon}>
            <Image
                source={require("..assets/logo.png")}
                style={styles.iconImage}
            ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Espectagrama</Text>
        </View>
    </View>
    <View style={styles.cardContainer}>
        <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
        />
    </View>
</View>

renderItem = ({item: post}) => {
    return <PostCard post={post} navigation={this.props.navigation}/>;
};


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: CSSVariableReferenceValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.02,
        justifyContent: "center",
        alignItens: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        justifyContent: "center"
    },
    cardContainer: {
        flex: 0.85
    }
})