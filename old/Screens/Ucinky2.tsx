import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
const { width, height } = Dimensions.get("screen");
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Ucinky2 = () => {
    const { navigate } = useNavigation();
    return (
        <Layout>
            <View style={styles.row}>
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                    <Text style={styles.nadpis}>Signifikantně zlepšuje
                        {"\n"}cerebrální perfuzi
                        {"\n"}a metabolismus glukózy</Text><Text style={{ fontSize: 12, marginBottom: 30 }}>1</Text></View>
                <View style={{ width: 200, height: 100 }}>
                    <TouchableOpacity onPress={() => {
                        //@ts-ignore
                        navigate("Main")
                    }}>
                        <Image style={styles.image2} source={require("../assets/logo_cavinton_small.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>

            <View style={{ width: "70%", height: height - 390, alignSelf: "center", zIndex: -2, position: "relative", marginLeft: 50 }}>
                <ImageBackground style={[styles.image, { zIndex: -200 }]} source={require("../assets/ucinky_2.png")}>
                    <TouchableOpacity style={styles.reoPosition} onPress={() => {

                    }}>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>

            <Text style={{ position: "absolute", bottom: 0, left: 0, padding: 10, fontFamily: "AkrobatRegular" }}>1. Szakáll, Sz. et al. J. Neuroimaging, 8: 197-204, 1998.</Text>
            <View style={{ alignItems: "flex-end", marginTop: 20 }}>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => {
                    //@ts-ignore
                    navigate("ucinky");
                }}>
                    <AntDesign name="caretleft" size={44} color="#8bb243" />
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

export default Ucinky2

const styles = StyleSheet.create({
    bubble: {
        position: "absolute", padding: 30, zIndex: 200000, top: 0, left: "45%",
        backgroundColor: "white",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },

    reoPosition: {
        position: "relative",
        marginLeft: 300,
        marginTop: -20,
        marginBottom: 20,
        padding: 20,
    },
    protiPosition: {
        position: "relative",
        textAlign: "center",
        marginLeft: 400,

        marginBottom: 20
    },
    protiEfekt: {
        position: "relative",
        textAlign: "center",
        marginLeft: 350,
        width: 400,

        marginBottom: 20
    },
    neuroProtekt: {
        position: "relative",
        textAlign: "center",
        marginLeft: 300
    },
    greenSquare: {
        backgroundColor: "#2e2873",
        width: 20,
        height: 20
    },
    blueSquare: {
        backgroundColor: "#8bb243",
        width: 20,
        height: 20
    },
    reologicky: {
        color: "#2e2873",
        fontWeight: "bold",
        margin: 5,
        fontSize: 20,
        fontFamily: 'Kohinoor Bangla',
        zIndex: 200
    },
    nadpis: {
        color: "#2e2873",
        fontWeight: "bold",
        margin: 5,
        fontSize: 40,
        fontFamily: 'AkrobatBold'
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        zIndex: -1
    },
    image2: {
        resizeMode: "cover",
        width: "100%",
        height: "100%"
    },
    image: {
        resizeMode: "cover",
        width: "100%",
        height: "100%"
    }
})