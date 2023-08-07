import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'

const MainPage = () => {
    return (
        <Layout>

            <Image style={{
                resizeMode: "contain",
                width: "80%",
                alignSelf: "flex-end",
                marginTop: 90
            }} source={require("../assets/main_logo.png")} />
        </Layout>
    )
}

export default MainPage

const styles = StyleSheet.create({})