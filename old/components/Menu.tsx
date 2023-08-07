import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
const Menu = () => {
    const { navigate }: any = useNavigation();
    return (
        <View style={{ zIndex: 200 }}>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>

            <TouchableOpacity onPress={() => { navigate("ucinky") }}>
                <Image style={styles.menuItem} source={require("../assets/ucinky.png")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigate("pacient") }}>
                <Image style={styles.menuItem} source={require("../assets/pacient.png")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigate("symptomy") }}>
                <Image style={styles.menuItem} source={require("../assets/symptomy.png")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigate("baleni") }}>
                <Image style={styles.menuItem} source={require("../assets/baleni.png")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigate("spc")
            }}>
                <Image style={styles.menuItem} source={require("../assets/spc.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate("letak")
            }}>
                <Image style={styles.menuItem} source={require("../assets/letak.png")} />
            </TouchableOpacity>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <TouchableOpacity onPress={() => { navigate("kviz") }}>
                <Image style={styles.menuItem} source={require("../assets/kviz.png")} />
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => { navigate("info") }}>
            <AntDesign name="infocirlceo" size={34} color="grey" style={{textAlign:"center"}}/>
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuItem: {
        width: "80%",
        height: 45,
        alignSelf: "center",
        marginBottom: 10
    }
})