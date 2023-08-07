import { StyleSheet, Text, View, ImageBackground, TextInput, Switch, Linking, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
const Certificate = ({ mrep }: { mrep: string }) => {
    const [docName, setDocName] = useState<string>("")
    const [docEmail, setDocEmail] = useState<string>("")

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEmailEnabled, setIsEmailEnabled] = useState(false);
    const toggleEmailSwitch = () => setIsEmailEnabled(previousState => !previousState);

    const [serverMessage, setServerMessage] = useState<string>("");
    const [showServerMessage, setShowServerMessage] = useState<boolean>(false);

    const sendEmail = async () => {

        const shape = {
            docName,
            docEmail,
            personalDataAgreement: isEnabled,
            consentForBusinessEmailGranted: isEmailEnabled,
            mrep,
        }

        try {
            const response: Response = await fetch("https://vpsli4228.a24vps.com/central-server/cavinton/send/email", {
                headers: { 'Content-Type': 'application/json' },
                method: "post",
                body: JSON.stringify(shape)
            })
            const data: any = await response.json();
            if (!data.messageId) {
                throw new Error("Email nebyl odeslán protože: " + data.message + " :::" + data.error)
            }
            setShowServerMessage(true);
            setServerMessage("Certifikát byl úspěšně odeslán!");
        } catch (error: any) {
            setShowServerMessage(true);
            setServerMessage(error.message);
        }


    }
    return (
        <KeyboardAvoidingView behavior='padding' enabled>
            <ImageBackground source={require("../assets/nahled_certifikatu.png")} style={{
                width: 600, height: 200, position: "relative", shadowColor: "#000",

            }}>

                <Text style={{
                    position: "absolute", bottom: 0, width: 600, textAlign: "center", marginBottom: 10, fontWeight: "bold", fontSize: 20, shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.44,
                    shadowRadius: 1.32,

                    elevation: 16,
                }}>{docName}</Text>
            </ImageBackground>
            <Text>{"\n"}</Text>
            {!showServerMessage &&
                <>
                    <TextInput
                        style={{
                            textAlign: "center",
                            backgroundColor: "#f4f4f4",
                            padding: 10,
                        }}
                        onChangeText={(s: string) => {
                            setDocName(s)
                        }}
                        value={docName}
                        placeholder="Jméno a příjmení včetně titulů"
                        keyboardType="default"
                    />
                    <TextInput
                        style={{
                            textAlign: "center",
                            backgroundColor: "#f4f4f4",
                            padding: 10,
                            marginTop: 5
                        }}
                        onChangeText={(s: string) => {
                            setDocEmail(s)
                        }}
                        value={docEmail}
                        placeholder="@ email na který půjde certifikát"
                        keyboardType="default"
                    />
                    <View style={{ flexDirection: "row", width: 600 }}>
                        <View style={{ flexDirection: "column", width: "50%", padding: 10 }}>
                            <Switch
                                style={{ alignSelf: "center" }}
                                trackColor={{ false: "#767577", true: "#74bf43" }}
                                thumbColor={isEnabled ? "#74bf43" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled} />
                            <TouchableOpacity onPress={() => {
                                Linking.openURL("https://www.richtergedeon.cz/zasady-zpracovani-osobnich-udaju/")
                            }}>
                                <Text style={{ textAlign: "center", marginTop: 5, color: "#23bcdd" }}>Souhlas se zpracovním osobních údajů <AntDesign name="link" size={12} color="black" /></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "column", width: "50%", padding: 10 }}>
                            <Switch
                                style={{ alignSelf: "center" }}
                                trackColor={{ false: "#767577", true: "#74bf43" }}
                                thumbColor={isEmailEnabled ? "#74bf43" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleEmailSwitch}
                                value={isEmailEnabled} />
                            <Text style={{ textAlign: "center", marginTop: 5 }}>Souhlas k zaslání obchodních sdělení</Text>
                        </View>
                    </View>
                    {isEnabled && docName.length > 0 && docEmail.length > 0 && <TouchableOpacity onPress={() => { sendEmail() }}>
                        <Text style={{ backgroundColor: "#74bf43", color: "white", padding: 10, marginTop: 10, textAlign: "center" }}><AntDesign name="mail" size={12} color="white" /> odeslat email</Text>
                    </TouchableOpacity>}
                    <Text>{"\n"}</Text>
                </>
            }
            {
                showServerMessage &&
                <>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>{serverMessage}</Text>
                </>
            }
        </KeyboardAvoidingView>
    )
}

export default Certificate

const styles = StyleSheet.create({
    greenNadpis: {
        color: "#74bf43",
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center"
    },
})