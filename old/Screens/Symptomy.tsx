import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get("screen");

import { Video } from 'expo-av'
const Symptomy = () => {
    const { navigate } = useNavigation()
    const [makeOverlay, setMakeOverlay] = useState<boolean>(false)
    const [openVideo, setOpenVideo] = useState(false);
    const video = React.useRef(null);
    return (
        <>
            {makeOverlay && <View style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#ffffffe3" }}>
                <TouchableOpacity onPress={() => { setMakeOverlay(false) }}>
                    <Image style={{
                        resizeMode: "contain",
                        width: width,
                        height: height
                    }} source={require("../assets/graf.png")} />
                </TouchableOpacity>
            </View>}
            {openVideo && <View style={{ position: "absolute", top: 0, left: 0, backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => { setOpenVideo(false) }}>
                    <Text></Text>
                    <Text style={{ padding: 10, fontWeight: "bold" }}>Vypnout video</Text>
                    <Text></Text>
                </TouchableOpacity>
                <Video
                    ref={video}
                    style={styles.video}
                    source={require("../assets/dep.mp4")}
                    useNativeControls
                    resizeMode="contain"
                />

            </View>}


            <Layout>
                <View style={styles.row}>
                    <Text style={styles.nadpis}>Nejčastější symptomy PCS{"\n"}</Text>
                    <View style={{ width: 200, height: 100 }}>
                        <TouchableOpacity onPress={() => {
                            //@ts-ignore
                            navigate("Main")
                        }}>
                            <Image style={styles.image2} source={require("../assets/logo_cavinton_small.png")} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: "center" }} onPress={() => { setMakeOverlay(true) }}>
                    <ImageBackground style={{ width: "95%", height: "84%" }} source={require("../assets/graf.png")}>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={{ position: "absolute", bottom: 0, left: 0, padding: 10, }}>
                    <TouchableOpacity onPress={() => { setOpenVideo(!openVideo) }}>
                        <AntDesign name="videocamera" size={50} color="#2a2475" />
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", bottom: 0, right: 0 }}>
                    <Text style={{ padding: 10 }}>
                        PCS = post-covidový syndrom{"\n"}
                        Zdroj: IQVIA, 2021
                    </Text>
                </View>
            </Layout>
        </>
    )
}

export default Symptomy

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
        fontSize: 50,
        fontFamily: 'AkrobatBold'
    },
    nadpis2: {
        color: "#8bb243",
        fontWeight: "bold",
        margin: 5,
        fontSize: 18,
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
    },
    video: {
        width,
        height: height - 60,
        zIndex: 1
    },
})