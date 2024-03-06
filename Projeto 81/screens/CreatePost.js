import {Component} from "react";
import{
Text,
Platform,
StatusBar,
Image,
ScrollView,
TextInput,
Dimensions
} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

export default class CreateStory extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        previewImage: "image_1",
        light_theme: true,
        dropdownHeight: 40
      };
    }

render() {
    return(
        <View
          style={
            this.state.light_theme ? styles.containerLight : styles.container
          }
        >
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image
                        source={require("..assets/logo.png")}
                        style={styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Novo Post</Text>  
                </View>
            </View>
            <View style={styles.fieldsContainer}>
                <ScrollView>
                    <Image
                        source={preview_images[this.state.previewImage]}
                        style={styles.previewImage}
                    ></Image>
                    <View style={{height:
                    RFValue(this.state.dropdownHeight)}}>
                        <DropDownPicker
                            items={[
                                {laber:"Image 1",value: "image_1"},
                                {laber:"Image 2",value: "image_2"},
                                {laber:"Image 3",value: "image_3"},
                                {laber:"Image 4",value: "image_4"},
                                {laber:"Image 5",value: "image_5"},
                                {laber:"Image 6",value: "image_6"},
                                {laber:"Image 7",value: "image_7"},
                            ]} 
                            defaultValue={this.state.previewImage}
                            containerStyle={{
                                height: 40,
                                borderRadius:20,
                                marginBottom:10
                            }}
                            onOpen={()=>{
                                this.setState({dropdownHeight:170});
                            }}
                            onClose={()=>{
                                this.setState({dropdownHeight:40});
                            }}
                            style={{backgroundColor:"transparent"}}
                            itemStyle={{
                                justifyContent:"flex-start"
                            }}
                            dropDownStyle={{backgroundColor:"#2a2a2a"}}
                            labelStyle={{
                                color:"white"
                            }}
                            arrowStyle={{
                                color: "white"
                            }}
                            onChangelItem={item =>
                                this.setState({
                                    previewImage: item.value
                                })
                            }
                        />
                    </View>

                    <TextInput
                        style={styles.inputFont}
                        onChangeText={caption=>this.setState({caption})}
                        placeholder={"Legenda"}
                        placeholderTextColor="white"
                    />
                </ScrollView>
            </View>
            <View style={{flex:0.08}}/>
        </View>
        </View>
    )
    if (!this.state.fontsLoaded){
        return <AppLoading />;
    } else {
        let preview_images = {
            "image_1": require("..assets/image_1.png"),
            "image_2": require("..assets/image_2.png"),
            "image_3": require("..assets/image_3.png"),
            "image_4": require("..assets/image_4.png"),
            "image_5": require("..assets/image_5.png"),
            "image_6": require("..assets/image_6.png"),
            "image_7": require("..assets/image_7.png"),
        }
    }
}

<ScrollView>
    <View>
        <TextInput
            style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
            onChangeText={(Description)=>this.setState({description})}
            placeholder={"Descrição"}
            multiline={true}
            numberOfLines={20}
            phaceholderTextColor="white"
        />
    </View>
</ScrollView>
