render(){
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.cardContainer}>
                <View style={StyleSheet.authorContainer}>
                    <View style={StyleSheet.authorImageContainer}>
                        <Image
                            source={require("../assets/profile_img.png")}
                            style={StyleSheet.profileImage}
                        ></Image> 
                    </View>
                    <View style={StyleSheet.authorNameContainer}>
                        <Text style={StyleSheet.authorNameText}>{this.props.post.author}</Text>
                    </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style={StyleSheet.postImage} />
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButtom}>
                        <Ionicons name={"heart"} size={CSSVariableReferenceValue(38)} color={"white"} />
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}