import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'
const Baleni = () => {
    const { navigate } = useNavigation()
    return (
        <Layout>
            <View style={styles.row}>

                <Text style={styles.nadpis}>Balení{"\n"}
                    <Text style={styles.nadpis2}>3 x 10 mg{"\n"}<Text style={{ fontSize: 25 }}>režim dávkování  1-1-1   2-1-0</Text></Text>
                </Text>

                <View style={{ width: 200, height: 100 }}>
                    <TouchableOpacity onPress={() => {
                        //@ts-ignore
                        navigate("Main")
                    }}>
                        <Image style={styles.image2} source={require("../assets/logo_cavinton_small.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                <ImageBackground style={{ width: "90%", height: "85%" }} source={require("../assets/baleni_obal.png")}>

                </ImageBackground>
            </View>
        </Layout>
    )
}

export default Baleni

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
        fontFamily: 'AkrobatRegular',
        zIndex: 200
    },
    nadpis: {
        color: "#2e2873",
        fontWeight: "bold",
        margin: 5,
        fontSize: 60,
        fontFamily: 'AkrobatBold'
    },
    nadpis2: {
        color: "#8bb243",
        fontWeight: "bold",
        margin: 5,
        fontSize: 35,
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