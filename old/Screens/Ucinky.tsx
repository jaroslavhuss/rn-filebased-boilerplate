import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("screen");
import Slider from '@react-native-community/slider';
const Ucinky = () => {
    const [displayAnimation, setDisplayAnimation] = useState<boolean>(false)
    const [firstPipe, setFirstPipe] = useState<number>(1);
    const [secondPipe, setSecondPipe] = useState<number>(0);
    const { navigate } = useNavigation();
    const [switchObject, setSwitchObject] = useState({
        reologicky: false,
        protizanetlivy: false,
        stealefect: false,
        neuroprotektivni: false
    })
    const ucinkySwitcher = (value: string) => {
        switch (value) {
            case "reologicky":
                setSwitchObject({
                    reologicky: true,
                    protizanetlivy: false,
                    stealefect: false,
                    neuroprotektivni: false
                })
                break;
            case "protizanetlivy":
                setSwitchObject({
                    reologicky: false,
                    protizanetlivy: true,
                    stealefect: false,
                    neuroprotektivni: false
                })
                break;
            case "stealefect":
                setSwitchObject({
                    reologicky: false,
                    protizanetlivy: false,
                    stealefect: true,
                    neuroprotektivni: false
                })
                break;
            case "neuroprotektivni":
                setSwitchObject({
                    reologicky: false,
                    protizanetlivy: false,
                    stealefect: false,
                    neuroprotektivni: true
                })
                break;
            case "clear":
                setSwitchObject({
                    reologicky: false,
                    protizanetlivy: false,
                    stealefect: false,
                    neuroprotektivni: false
                })
                break;
            default:
                setSwitchObject({
                    reologicky: false,
                    protizanetlivy: false,
                    stealefect: false,
                    neuroprotektivni: false
                })
        }
    }

    return (
        <>
            {displayAnimation && <View style={{
                width,
                height,

                backgroundColor: "white",
                position: "absolute",
                top: 0,
                left: 0,
                borderWidth: 2,
                zIndex: 200000
            }}>
                <View style={{ position: "absolute", top: 0, right: 0, padding: 10, width: 100, height: 100 }}>
                    <TouchableOpacity onPress={() => { setDisplayAnimation(false) }}>
                        <AntDesign name="closecircle" size={54} color="red" />
                    </TouchableOpacity>
                </View>

                <Image style={{ position: "absolute", opacity: firstPipe }} source={require("../assets/pipe_1.png")} />
                <Image style={{ position: "absolute", opacity: secondPipe }} source={require("../assets/pipe_2.png")} />
                <Slider
                    style={{ width: height - 430, height: 40, marginLeft: 30, position: "absolute", bottom: 0, right: 0, marginBottom: 50, }}
                    minimumValue={0}
                    maximumValue={1}
                    thumbImage={require("../assets/thumb.png")}
                    trackImage={require("../assets/slide_area.png")}
                    onValueChange={(prevValue) => {
                        const PREV: number = parseFloat(prevValue.toFixed(2))
                        if (PREV === 1) {
                            setFirstPipe(0)
                        } else {
                            setFirstPipe(1)
                        }
                        setSecondPipe(PREV)
                    }}
                />
            </View>}

            {switchObject.reologicky &&
                <View style={[styles.bubble]}>
                    <TouchableOpacity onPress={() => {
                        ucinkySwitcher("clear")
                    }}>
                        <Text style={styles.nadpis3}>Reologický</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
                            <Image style={{ width: 10, height: 10 }} source={require("../assets/dot.png")} />
                            <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25 }}> inhibuje agregaci trombocytů</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 4 }}>
                            <Image style={{ width: 10, height: 10, marginTop: 5 }} source={require("../assets/dot.png")} />
                            <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25 }}> snižuje patologicky zvýšenou{"\n"} viskozitu krve</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
                            <Image style={{ width: 10, height: 10 }} source={require("../assets/dot.png")} />
                            <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25 }}> zlepšuje deformabilitu erytrocytů</Text>

                        </View>
                    </TouchableOpacity>
                </View>}
            {switchObject.protizanetlivy &&
                <View style={[styles.bubble]}>
                    <TouchableOpacity onPress={() => {
                        ucinkySwitcher("clear")
                    }}>
                        <Text style={styles.nadpis3}>Protizánětlivý</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25, lineHeight: 30 }}>Přímou inhibicí IKK je vinpocetin {"\n"}
                                schopen přerušit NF-κB, který za{"\n"}
                                normálních okolností produkuje prozánětlivé{"\n"}
                                molekuly způsobující zánět. A zastavením aktivity{"\n"}
                                NF-κB je nakonec zastaven i zánět.<Text style={{ fontSize: 14 }}>(1)</Text>
                            </Text>

                        </View>

                    </TouchableOpacity>
                </View>}
            {switchObject.stealefect &&
                <View style={[styles.bubble]}>
                    <TouchableOpacity onPress={() => {
                        ucinkySwitcher("clear")
                    }}>
                        <Text style={styles.nadpis3}>Nezpůsobuje steal efekt</Text>
                        <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25 }}>
                            Působí primárně proti vazokonstrikci (bez ovlivnění{"\n"}
                            systémové cirkulace) = nevyvolává steal efekt
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setDisplayAnimation(true);
                        ucinkySwitcher("clear");
                    }}>
                        <Text style={{ fontSize: 24, backgroundColor: "#8bb243", color: "white", padding: 10, margin: 10, textAlign: "center" }}><AntDesign name="rightcircle" size={24} color="white" /> Přehrát animaci</Text>
                    </TouchableOpacity>
                </View>}
            {switchObject.neuroprotektivni &&
                <View style={[styles.bubble]}>
                    <TouchableOpacity onPress={() => {
                        ucinkySwitcher("clear")
                    }}>
                        <Text style={styles.nadpis3}>Neuroprotektivní</Text>

                        <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 4 }}>
                            <Image style={{ width: 10, height: 10, marginTop: 10 }} source={require("../assets/dot.png")} />
                            <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25 }}> zvyšuje vstřebávání a využití {"\n"} glukózy a kyslíku mozkovou tkání
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
                            <Image style={{ width: 10, height: 10 }} source={require("../assets/dot.png")} />
                            <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25 }}> zvyšuje koncentraci ATP</Text>

                        </View>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 4 }}>
                            <Image style={{ width: 10, height: 10, marginTop: 10 }} source={require("../assets/dot.png")} />
                            <Text style={{ fontFamily: 'AkrobatRegular', fontSize: 25 }}> zpomaluje destrukci {"\n"} ischemického tkaniva
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>}

            <Layout>
                <TouchableOpacity onPress={() => { ucinkySwitcher("clear") }}>
                    <View style={styles.row}>
                        <Text style={styles.nadpis}>Účinky</Text>
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
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <View style={{ width: "100%", height: height - 300, alignSelf: "center", zIndex: -2, position: "relative", marginLeft: 50 }}>
                        <ImageBackground style={[styles.image, { zIndex: -200 }]} source={require("../assets/brain_image.png")}>
                            <TouchableOpacity style={styles.reoPosition} onPress={() => {
                                ucinkySwitcher("reologicky");
                            }}>
                                <Text style={styles.reologicky}><Text style={switchObject.reologicky ? styles.greenSquare : styles.blueSquare}>     </Text>   Reologický</Text>
                            </TouchableOpacity>
                            <Text>{"\n"}</Text>
                            <Text>{"\n"}</Text>

                            <TouchableOpacity style={styles.protiPosition} onPress={() => {
                                ucinkySwitcher("protizanetlivy");
                            }}>
                                <Text style={styles.reologicky}><Text style={switchObject.protizanetlivy ? styles.greenSquare : styles.blueSquare}>     </Text>   Protizánětlivý</Text>
                            </TouchableOpacity>

                            <Text>{"\n"}</Text>
                            <Text>{"\n"}</Text>
                            <TouchableOpacity style={styles.protiEfekt} onPress={() => {
                                ucinkySwitcher("stealefect");
                            }}>
                                <Text style={styles.reologicky}><Text style={switchObject.stealefect ? styles.greenSquare : styles.blueSquare}>     </Text>   Nezpůsobuje steal efekt</Text>
                            </TouchableOpacity>
                            <Text>{"\n"}</Text>
                            <Text>{"\n"}</Text>


                            <TouchableOpacity style={styles.neuroProtekt} onPress={() => {
                                ucinkySwitcher("neuroprotektivni");
                            }}>
                                <Text style={styles.reologicky}><Text style={switchObject.neuroprotektivni ? styles.greenSquare : styles.blueSquare}>     </Text>   Neuroprotektivní</Text>
                            </TouchableOpacity>
                        </ImageBackground>

                    </View>
                    {switchObject.protizanetlivy && <View style={{ position: "absolute", left: 0, bottom: 0 }}>
                        <Text style={{ maxWidth: "95%", fontSize: 12 }}>Reference: 1) Kye-Im Jeona,1, Xiangbin Xub,1, Toru Aizawac et al.  Vinpocetine inhibits NF-κB–dependent inflammation via an IKK-dependent but PDE-independent
                            mechanism PNAS 2010;107(21) : 9795–9800 HYPERLINK „http://www.pnas.org/cgi/doi/10.1073/pnas.0914414107“ www.pnas.org/cgi/doi/10.1073/pnas.0914414107</Text>
                    </View>}

                    <View style={{ alignItems: "flex-end" }}>
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => {
                            //@ts-ignore
                            navigate("ucinky2");
                        }}>
                            <AntDesign name="caretright" size={44} color="#8bb243" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Layout>
        </>
    )
}

export default Ucinky

const styles = StyleSheet.create({
    bubble: {
        position: "absolute", padding: 30, zIndex: 200000,
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
        bottom: 0,
        elevation: 10,
        marginLeft: 0,
        marginBottom: 80
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
        fontSize: 30,
        fontFamily: 'AkrobatBold',
        zIndex: 200
    },
    nadpis: {
        color: "#2e2873",
        fontWeight: "bold",
        margin: 5,
        fontSize: 60,
        fontFamily: 'AkrobatBold'
    },
    nadpis3: {
        color: "#2e2873",
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
        width: "80%",
        height: "80%"
    }
})