import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import Layout from '../components/Layout';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const Spc = () => {
    const [loadComponent, setLoadComponent] = useState<boolean>(false)
    let pdf = require("../assets/cavinton_letak.pdf");

    const [showRef, setShowRef] = useState<boolean>(false);
    useFocusEffect(() => {
        setLoadComponent(true)
        return () => {
            setLoadComponent(false)
        }
    })
    return (
        <Layout>
            <View style={{ width: "100%", height: "100%" }}>
                {
                    loadComponent && <WebView
                        originWhitelist={["file://*", "http://*", "https://*"]}
                        source={pdf}
                        allowFileAccess
                        allowUniversalAccessFromFileURLs
                        allowFileAccessFromFileURLs
                    ></WebView>
                }
{
    showRef ? <TouchableOpacity
    onPress={
        () => setShowRef(!showRef)
    }
    style={{ position: "absolute", bottom: 0, width: "100%", height: 200, backgroundColor: "white", justifyContent: "center", alignItems: "center", right:0, padding:20, marginBottom:20
    
    }}>
        <Text style={{ fontSize: 12, color: "black" }}>
        1. Zhang Y shuai, Li J dong, Yan C. An update on vinpocetine: New discoveries and clinical implications. European Journal of Pharmacology. 2018;819 (November 2017):30–4. {"\n"}

2. Jeon KI, Xu X, Aizawa T, Lim JH, Jono H, Kwon DS, et al. Vinpocetine inhibits NF-κB-dependent inflammation via an IKK-dependent but PDE-independent mechanism. Proceedings of the National Academy of Sciences of the United States of America. 2010;107(21): 9795–800.{"\n"}

3. Aktuální SPC přípravku Cavinton Forte
             </Text>
    </TouchableOpacity>: <TouchableOpacity
    onPress={
        () => setShowRef(!showRef)
    }
    style={{ position: "absolute", bottom: 0, width: "100%", height: 100, justifyContent: "flex-end", alignItems: "flex-end", right:0, padding:20, marginBottom:20 }}><AntDesign name="infocirlceo" size={40} color="black" /></TouchableOpacity>
}
            </View>
        </Layout>
    )
}

export default Spc

const styles = StyleSheet.create({})