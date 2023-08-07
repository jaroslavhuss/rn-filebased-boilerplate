import React from 'react'
import { Dimensions, View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import Menu from "./Menu";
type dim = {
    width: number,
    height: number
}
const Layout = ({ children }: any) => {
    const { width, height }: dim = Dimensions.get("window");
    return (

        <ImageBackground style={[styles.mainLayout, styles.bg, { width, height, zIndex: -1 }]} source={require("../assets/cavinton_bg.png")}>

            <View style={styles.menu}>
                <Menu />
            </View>
            <View style={styles.children}>
                {children}
            </View>
        </ImageBackground>
    )
}

export default Layout

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        flexDirection: "row",
        position: "relative",
        zIndex: -1
    },
    menu: {
        flex: 3,
    },
    children: {
        flex: 10,
        flexDirection: "column",
        position: "relative",
        zIndex: 1
    },
    bg: {
        backgroundColor: "white",
        position: "relative"
    },
});