import { useState, useEffect } from 'react';
import { Slot } from 'expo-router';
import { StatusBar,ImageBackground, Dimensions } from 'react-native';
import Menu from '../components/Menu';


export default function HomeLayout() {
    const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
    const [width, setWidth] = useState(Dimensions.get("screen").width);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
          "change",
          ({ window, screen }) => {
            setHeight(screen.height);
            setWidth(screen.width);
          }
        );

        return () => subscription?.remove();
      },[height,width]);
    
  return (
    <ImageBackground source={require("../assets/cavinton_bg.png")} style={{
        width,
        height
    }}>
        <StatusBar hidden={true} />
        <Menu />
        <Slot />
    </ImageBackground>

  )
}
