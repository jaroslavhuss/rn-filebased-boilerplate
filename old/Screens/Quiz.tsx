import { ImageBackground, StyleSheet, Text, View, TextInput, Dimensions, Touchable, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Certificate from '../components/Certificate';
const Quiz = () => {
    const [progress, setProgress] = useState<number>(0);
    const [mrep, setMrep] = useState<string>("")

    const [questions] = useState<string[]>([
        "",
        "Kolik pacientů, v průměru za 1 měsíc, vyhledá svého praktického lékaře se symptomy postcovidového syndromu (PCS)?",
        "Kolik pacientů si stěžuje na poruchy kognitivních funkcí ve spojitosti s PCS?",
        "Označte správná tvrzení: Cavinton Forte",
        "Cavinton Forte",
        "Cavinton Forte má příznivý účinek v léčbě:",
        "Optimální denní dávka Cavintonu Forte pro dosažení požadovaného terapeutického efektu je",
        "Kdy je doporučeno Cavinton Forte užívat?",
        "Zaslání certifikátu"
    ])
    //First answer
    const [firstAnswer, setFirstAnswer] = useState<number>(0);
    const [firstAnswerSwitcher, setFirstAnswerSwitcher] = useState(false)
    //Second answer
    const [secondAnswer, setSecondAnswer] = useState<string>("");
    const [secondAnswerSwitcher, setSecondAnswerSwitcher] = useState(false)
    //Third answer
    const [thirdA, setThirdA] = useState(false)
    const [thirdB, setThirdB] = useState(false)
    const [thirdC, setThirdC] = useState(false)
    const [thirdD, setThirdD] = useState(false)
    const [thirdFinal, setThirdFinal] = useState(false)
    // Fourth answer
    const [fourthAnswer, setFourthAnswer] = useState<string>("")
    const [fourthAnswerSwitcher, setFourthAnswerSwitcher] = useState<boolean>(false)

    //Fifth answer
    const [fifthA, setFifthA] = useState(false);
    const [fifthB, setFifthB] = useState(false);
    const [fifthC, setFifthC] = useState(false);
    const [fifthD, setFifthD] = useState(false);
    const [fifthE, setFifthE] = useState(false);
    const [fifthF, setFifthF] = useState(false);
    const [fifthFinal, setFifthFinal] = useState(false)
    //Sixth answer
    const [sixthAnswer, setSixthAnswer] = useState<string>("")
    const [sixthAnswerSwitcher, setSixthAnswerSwitcher] = useState<boolean>(false)
    //Seventh answer
    const [seventhAnswer, setSeventhAnswer] = useState<string>("")
    const [seventhAnswerSwitcher, setSeventhAnswerSwitcher] = useState<boolean>(false)

    const [isAuthNeeded, setIsAuthNeeded] = useState<boolean>(false);

    const [errorSnippet, setErrorSnippet] = useState<string>("")
    const changeProgress = (action: "back" | "forward" | "end"): void => {
        setFirstAnswer(0);
        setFirstAnswerSwitcher(false);

        setSecondAnswer("")
        setSecondAnswerSwitcher(false)

        setThirdA(false)
        setThirdB(false)
        setThirdC(false)
        setThirdD(false)
        setThirdFinal(false)

        setFourthAnswer("")
        setFourthAnswerSwitcher(false)

        setFifthA(false)
        setFifthB(false)
        setFifthC(false)
        setFifthD(false)
        setFifthE(false)
        setFifthF(false)
        setFifthFinal(false)

        setSixthAnswer("")
        setSixthAnswerSwitcher(false)

        setSeventhAnswer("")
        setSeventhAnswerSwitcher(false)

        if (action === "back") {
            if (progress > 1) {
                setProgress(progress - 1);
            }
        }
        if (action === "forward") {
            if (progress < 8) {
                setProgress(progress + 1);
            }
        }
        if (action === "end") { }
    }

    const cleanUp = () => {
        setProgress(0);
        setFirstAnswer(0);
        setFirstAnswerSwitcher(false);

        setSecondAnswer("")
        setSecondAnswerSwitcher(false)

        setThirdA(false)
        setThirdB(false)
        setThirdC(false)
        setThirdD(false)
        setThirdFinal(false)

        setFourthAnswer("")
        setFourthAnswerSwitcher(false)

        setFifthA(false)
        setFifthB(false)
        setFifthC(false)
        setFifthD(false)
        setFifthE(false)
        setFifthF(false)
        setFifthFinal(false)

        setSixthAnswer("")
        setSixthAnswerSwitcher(false)

        setSeventhAnswer("")
        setSeventhAnswerSwitcher(false)
    }





    const getCurrentRep = async () => {
        try {
            const rep: any = await AsyncStorage.getItem("mrep");
            if (!rep) { setIsAuthNeeded(true) }
            else {
                setMrep(rep)
                setIsAuthNeeded(false);
            }
        } catch (error: any) {
            setErrorSnippet(error.message)
        }

    }
    const authRep = async () => {
        if (mrep && mrep.length > 0) {
            try {
                await AsyncStorage.setItem("mrep", mrep)
            } catch (error: any) {
                setErrorSnippet(error.message)
            }
            getCurrentRep();
        } else {
            setErrorSnippet("Jméno musí být vyplněno")
        }
    }


    useFocusEffect(
        React.useCallback(() => {
            getCurrentRep()
            return () => {

            };
        }, [])
    );
    return (
        <Layout>

            <View style={styles.center}>
                {

                    progress === 8 && <>

                        <Certificate mrep={mrep} />
                    </>}

                {progress === 0 &&
                    <>
                        {!isAuthNeeded && <>
                            <Text style={styles.greenNadpis}>Otestujte si svoji{"\n"}
                                mentální svěžest </Text>
                            <Text>{"\n"}</Text>
                            <TouchableOpacity onPress={() => { setProgress(1) }} style={{ justifyContent: "center", alignItems: "center" }}>
                                <ImageBackground style={{ width: 250, height: 60 }} source={require("../assets/btn_plain.png")}>
                                    <Text style={[styles.textbtn, { textAlign: "center", marginTop: 14 }]}>Začít kvíz</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </>}
                        {
                            isAuthNeeded &&
                            <KeyboardAvoidingView behavior='padding' enabled>
                                <View style={{ flexDirection: "column", justifyContent: "center", alignContent: "center" }}>
                                    <Text style={styles.greenNadpis}>Medical Representative</Text>
                                    <Text style={{ fontSize: 10, textAlign: "center" }}>Tato položka se vyplňuje pouze jednou - vyplní jí kolega, který na iPadu pracuje!</Text>
                                    <Text>{"\n"}</Text>
                                    <TextInput
                                        style={{
                                            textAlign: "center",
                                            backgroundColor: "#f4f4f4",
                                            padding: 10,
                                        }}
                                        onChangeText={(s: string) => {
                                            setMrep(s)
                                        }}
                                        value={mrep}
                                        placeholder="Jméno a příjmení"
                                        keyboardType="default"
                                    />
                                    <TouchableOpacity onPress={() => { authRep() }}>
                                        <Text style={{ backgroundColor: "#74bf43", color: "white", padding: 10, marginTop: 10, textAlign: "center" }}>Autorizovat</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        }

                    </>
                }
                {progress >= 1 &&
                    <View style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
                        <Text style={[styles.greenNadpis2, { backgroundColor: "#74bf43", color: "white", textAlign: "center" }]}>{questions[progress]}</Text>
                    </View>}
                {
                    /**
                     * FIRST QUESTION
                     */
                }
                {
                    progress === 1 &&
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ justifyContent: "flex-start", alignItems: "flex-start", marginLeft: 50 }}>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFirstAnswer(5)
                            }}>
                                <Text style={[styles.questionText, firstAnswer === 5 && { fontWeight: "bold" }]}>a{")"} 5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFirstAnswer(10)
                            }}>
                                <Text style={[styles.questionText, firstAnswer === 10 && { fontWeight: "bold" }, firstAnswerSwitcher && { color: "green", fontWeight: "bold", fontSize: 40 }]}>b{")"} 10</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity, {}]} onPress={() => {
                                setFirstAnswer(15)
                            }}>
                                <Text style={[styles.questionText, firstAnswer === 15 && { fontWeight: "bold" }]}>c{")"} 15</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>

                        <TouchableOpacity style={{ padding: 10, backgroundColor: "#0a035b" }} onPress={() => {
                            setFirstAnswerSwitcher(true)
                        }}>
                            <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Zkontrolovat</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    /**
                     * SECOND QUESTION
                     */
                }

                {
                    progress === 2 &&
                    <View>
                        <View>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setSecondAnswer("14%")
                            }}>
                                <Text style={[styles.questionText, secondAnswer === "14%" && { fontWeight: "bold" }]}>a{")"} 14%</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setSecondAnswer("37%")
                            }}>
                                <Text style={[styles.questionText, secondAnswer === "37%" && { fontWeight: "bold" }, secondAnswerSwitcher && { color: "green", fontWeight: "bold", fontSize: 40 }]}>b{")"} 37%</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity, {}]} onPress={() => {
                                setSecondAnswer("67%")
                            }}>
                                <Text style={[styles.questionText, secondAnswer === "67%" && { fontWeight: "bold" }]}>c{")"} 67%</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>

                        <TouchableOpacity style={{ padding: 10, backgroundColor: "#0a035b" }} onPress={() => {
                            setSecondAnswerSwitcher(true)
                        }}>
                            <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Zkontrolovat</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    progress === 3 &&

                    <View style={{ alignItems: "center" }}>

                        <View style={{ marginLeft: 100, justifyContent: "flex-start", alignItems: "flex-start" }}>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setThirdA(!thirdA)
                            }}>
                                <Text style={[styles.questionText, thirdA && { fontWeight: "bold" }, thirdFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>a{")"} inhibuje agregaci trombocytů</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setThirdB(!thirdB)
                            }}>
                                <Text style={[styles.questionText, thirdB && { fontWeight: "bold" }, thirdFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>b{")"} zvyšuje vstřebávání kyslíku a glukózy mozkovou tkání</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setThirdC(!thirdC)
                            }}>
                                <Text style={[styles.questionText, thirdC && { fontWeight: "bold" }, thirdFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>c{")"} má protizánětlivý účinek</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setThirdD(!thirdD)
                            }}>
                                <Text style={[styles.questionText, thirdD && { fontWeight: "bold" }]}>d{")"} způsobuje sedaci</Text>
                            </TouchableOpacity>
                        </View>

                        <Text>{"\n"}</Text>
                        <TouchableOpacity style={{ padding: 10, backgroundColor: "#0a035b" }} onPress={() => {
                            setThirdA(true)
                            setThirdB(true)
                            setThirdC(true)
                            setThirdD(false)
                            setThirdFinal(true)
                        }}>
                            <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Zkontrolovat</Text>
                        </TouchableOpacity>
                    </View>

                }

                {
                    progress === 4 &&

                    <View style={{ alignItems: "center" }}>
                        <View style={{ marginLeft: 50, alignItems: "flex-start" }}>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFourthAnswer("zlepšuje cerebrální perfuzi")
                            }}>
                                <Text style={[styles.questionText, fourthAnswer === "zlepšuje cerebrální perfuzi" && { fontWeight: "bold" }, fourthAnswerSwitcher && { color: "green", fontWeight: "bold", fontSize: 40 }]}>a{")"} zlepšuje cerebrální perfuzi</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFourthAnswer("podporuje tvorbu nových neuronů")
                            }}>
                                <Text style={[styles.questionText, fourthAnswer === "podporuje tvorbu nových neuronů" && { fontWeight: "bold" }]}>b{")"} podporuje tvorbu nových neuronů</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity, {}]} onPress={() => {
                                setFourthAnswer("zvyšuje IQ")
                            }}>
                                <Text style={[styles.questionText, fourthAnswer === "zvyšuje IQ" && { fontWeight: "bold" }]}>c{")"} zvyšuje IQ</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>

                        <TouchableOpacity style={{ padding: 10, backgroundColor: "#0a035b" }} onPress={() => {
                            setFourthAnswerSwitcher(true)
                        }}>
                            <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Zkontrolovat</Text>
                        </TouchableOpacity>
                    </View>
                }


                {
                    progress === 5 &&
                    <View style={{ alignItems: "center" }}>
                        <View style={{ alignItems: "flex-start" }}>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFifthA(!fifthA)
                            }}>
                                <Text style={[styles.questionText, fifthA && { fontWeight: "bold" }, fifthFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>a{")"} tinnitu</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFifthB(!fifthB)
                            }}>
                                <Text style={[styles.questionText, fifthB && { fontWeight: "bold" }, fifthFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>b{")"} závratí</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFifthC(!fifthC)
                            }}>
                                <Text style={[styles.questionText, fifthC && { fontWeight: "bold" }, fifthFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>c{")"} zlepšuje koncentraci</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFifthD(!fifthD)
                            }}>
                                <Text style={[styles.questionText, fifthD && { fontWeight: "bold" }, fifthFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>d{")"} zlepšuje výkonnost</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFifthE(!fifthE)
                            }}>
                                <Text style={[styles.questionText, fifthE && { fontWeight: "bold" }, fifthFinal && { color: "green", fontWeight: "bold", fontSize: 25 }]}>e{")"} zlepšuje paměť</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setFifthF(!fifthF)
                            }}>
                                <Text style={[styles.questionText, fifthF && { fontWeight: "bold" }]}>f{")"} erektilních dysfunkcí</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>
                        <TouchableOpacity style={{ padding: 10, backgroundColor: "#0a035b" }} onPress={() => {
                            setFifthA(true)
                            setFifthB(true)
                            setFifthC(true)
                            setFifthD(true)
                            setFifthE(true)
                            setFifthF(false)
                            setFifthFinal(true)
                        }}>
                            <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Zkontrolovat</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    progress === 6 &&
                    <View style={{ alignItems: "center" }}>

                        <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                            setSixthAnswer("1x denně 10 mg")
                        }}>
                            <Text style={[styles.questionText, sixthAnswer === "1x denně 10 mg" && { fontWeight: "bold" }]}>a{")"} 1x denně 10 mg</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                            setSixthAnswer("2x denně 10 mg")
                        }}>
                            <Text style={[styles.questionText, sixthAnswer === "2x denně 10 mg" && { fontWeight: "bold" }]}>b{")"} 2x denně 10 mg</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                            setSixthAnswer("3x denně 10 mg")
                        }}>
                            <Text style={[styles.questionText, sixthAnswer === "3x denně 10 mg" && { fontWeight: "bold" }, sixthAnswerSwitcher && { color: "green", fontWeight: "bold", fontSize: 40 }]}>c{")"} 3x denně 10 mg</Text>
                        </TouchableOpacity>

                        <Text>{"\n"}</Text>

                        <TouchableOpacity style={{ padding: 10, backgroundColor: "#0a035b" }} onPress={() => {
                            setSixthAnswerSwitcher(true)
                        }}>
                            <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Zkontrolovat</Text>
                        </TouchableOpacity>
                    </View>
                }
                {
                    progress === 7 &&
                    <View style={{ alignItems: "center" }}>
                        <View style={{ alignItems: "flex-start" }}>
                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setSeventhAnswer("na lačno")
                            }}>
                                <Text style={[styles.questionText, seventhAnswer === "na lačno" && { fontWeight: "bold" }]}>a{")"} na lačno</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setSeventhAnswer("po jídle")
                            }}>
                                <Text style={[styles.questionText, seventhAnswer === "po jídle" && { fontWeight: "bold" }, seventhAnswerSwitcher && { color: "green", fontWeight: "bold", fontSize: 40 }]}>b{")"} po jídle</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.questionOpacity]} onPress={() => {
                                setSeventhAnswer("kdykoliv")
                            }}>
                                <Text style={[styles.questionText, seventhAnswer === "kdykoliv" && { fontWeight: "bold" }]}>c{")"} kdykoliv</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{"\n"}</Text>

                        <TouchableOpacity style={{ padding: 10, backgroundColor: "#0a035b" }} onPress={() => {
                            setSeventhAnswerSwitcher(true)
                        }}>
                            <Text style={{ margin: 10, color: "white", fontWeight: "bold", fontSize: 18 }}>Zkontrolovat</Text>
                        </TouchableOpacity>
                    </View>
                }


                {progress >= 1 &&
                    <Text>{"\n"}{"\n"}</Text>
                }
                {progress >= 1 &&
                    <View style={{ flex: 1, flexDirection: "row", position: "absolute", bottom: 0, left: "28%", justifyContent: "space-around", marginBottom: 30 }}>
                        <TouchableOpacity style={{ marginRight: 100 }} onPress={() => { changeProgress("back") }}>
                            <AntDesign name="caretleft" size={50} color="#74bf43" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight: 100 }} onPress={() => {
                            cleanUp()
                        }}>
                            <Text style={{ fontSize: 15, textAlign: "center" }}>{progress}/8</Text>
                            <AntDesign name="closecircleo" size={50} color="#74bf43" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { changeProgress("forward") }}>
                            <AntDesign name="caretright" size={50} color="#74bf43" />
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <Text style={{ fontSize: 8 }}>{errorSnippet} V 1.00</Text>

        </Layout >
    )
}

export default Quiz

const styles = StyleSheet.create({
    questionText: {
        color: "#0a035b",
        fontSize: 25,
        marginBottom: 10,
        textAlign: "center"
    },
    questionOpacity: {},
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    greenNadpis: {
        color: "#74bf43",
        fontWeight: "bold",
        fontSize: 40
    },
    greenNadpis2: {
        color: "#74bf43",
        fontWeight: "bold",
        fontSize: 30,
        padding: 20
    },
    textbtn: {
        color: "#2e3092",
        fontSize: 20,
        fontWeight: "bold"
    },
})