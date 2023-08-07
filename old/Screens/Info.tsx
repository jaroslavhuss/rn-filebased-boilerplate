import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout";

const Info = () => {
  return (
    <Layout>
      <View style={[styles.container, {  
       marginBottom:10,
       paddingBottom:20,
         borderBottomWidth:2,
         borderBottomColor:"#f3eeee"
         }]}>
        <View style={styles.column}>
          <View style={styles.headline}>
            <Text style={styles.headlineText}>Cavinton Forte</Text>
          </View>
          <View style={[styles.greenBubble, {marginTop:10}]}>
            <Text>10 mg/3x denně (30 mg)</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.headlineTebokan}>
            <Text style={styles.headlineText}>Tebokan</Text>
          </View>
          <View style={[styles.blueBubble, {marginTop:10}]}>
            <Text>1-2 tablety/denně (120 - 240 mg)</Text>
          </View>
        </View>
       
      </View>
      <View style={[styles.container,
    {  
        marginBottom:10,
        paddingBottom:20,
          borderBottomWidth:2,
          borderBottomColor:"#f3eeee"
          }
    ]}>
        <View style={styles.column}>
          <View style={styles.greenBubble}>
            <Text style={{ textAlign: "center" }}>
              350 Kč/90 tlb{"\n"}
              <Text
                style={{ color: "#8bb243", fontWeight: "bold", fontSize: 18 }}
              >
                350 Kč/měsíc léčby
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.container}>
            <View style={styles.column}>
              <View style={styles.blueBubble}>
                <Text style={{ textAlign: "center" }}>
                  350 Kč/90 tlb{"\n"}
                  <Text
                    style={{ color: "red", fontWeight: "bold", fontSize: 18 }}
                  >
                    610 Kč/měsíc léčby
                  </Text>
                </Text>
              </View>
              <Text>{""}</Text>
              <View style={styles.blueBubble}>
                <Text style={{ textAlign: "center" }}>
                  350 Kč/90 tlb{"\n"}
                  <Text
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      fontSize: 18,
                      marginTop: 0,
                    }}
                  >
                    678 Kč/měsíc léčby
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.column}>
              <Image
                source={require("../assets/max.png")}
                style={{ width: 150, height: 50 }}
              />
              <Text>{""}</Text>
              <Text>{""}</Text>
              <Image
                source={require("../assets/logo-benu.png")}
                style={{ width: 160, height: 42 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.container, {  
       marginBottom:10,
       paddingBottom:20,
         borderBottomWidth:2,
         borderBottomColor:"#f3eeee"
         }]}>
        <View style={styles.column}>
          
          <View style={styles.greenBubble}>
            <Text style={{paddingHorizontal:50, color:"#8bb243", fontWeight:"bold", fontSize:18}}>RX</Text>
          </View>
        </View>
        <View style={styles.column}>
    
          <View style={styles.blueBubble}>
            <Text style={{fontSize:18}}><Text style={{color:"red", fontWeight:"bold"}}>Volně dostupné</Text> léčivo</Text>
          </View>
        </View>
      </View>
      <View style={[styles.container, {  
       marginBottom:10,
       paddingBottom:20,
         borderBottomWidth:2,
         borderBottomColor:"#f3eeee"
         }]}>
        <View style={styles.column}>
          
          <View style={styles.greenBubble}>
            <Text>
                <Text style={{textDecorationLine:"underline"}}>Upozornění:</Text>{"\n"}
            
Doporučuje se kontrolovat EKG u pacientů se syndromem prodlouženého QT intervalu

            </Text>
          </View>
        </View>
        <View style={styles.column}>
    
          <View style={styles.blueBubble}>
          <Text>
                <Text style={{textDecorationLine:"underline"}}>Upozornění:</Text>{"\n"}
            <Text style={{color:"red"}}>
            Depresivní nálada a bolest hlavy{"\n"}
Může zvýšit sklon ke krvácení{"\n"}
Nelze vyloučit podporu záchvatů u epileptiků
            </Text>
                

            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.container, { height: 100 }]}>
        <View style={styles.column}>
          
          <View style={styles.greenBubble}>
          <Text style={{textAlign:"center"}}>
                <Text style={{color:"#8bb243", fontWeight:"bold", fontSize:18 }}>Bez častých NÚ</Text>{"\n"}
                <Text style={{textDecorationLine:"underline"}}>Méně časté:</Text>bolest hlavy, závrať, somnolence,{"\n"} nevolnost, sucho v ústech, hypotenze

            </Text>
          </View>
        </View>
        <View style={styles.column}>
    
          <View style={styles.blueBubble}>
          <Text style={{textAlign:"center"}}>
                    <Text style={{fontWeight:"bold", color:"red"}}>Poruchy nervového systému</Text>, bolesti hlavy,
                    <Text style={{fontWeight:"bold", color:"red"}}>cévní poruchy, krvácení z jednotlivých orgánů,</Text>mírné GIT potíže,
                    <Text style={{fontWeight:"bold", color:"red"}}>kožní alergické reakce</Text>
              
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    flexDirection: "row",
   // justifyContent: "space-between",
   marginVertical:10
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
    alignContent: "center",
    alignItems: "center",
  },
  headline: {
    backgroundColor: "#8bb243",
    paddingVertical: 20,
    margin: 5,
    borderRadius: 10,
    width: "100%",
  },
  greenBubble: {
    borderWidth: 2,
    borderColor: "#8bb243",
    padding: 10,
    borderRadius: 15,
    textAlign: "center",
  },
  headlineTebokan: {
    backgroundColor: "#3144d1",
    paddingVertical: 20,
    margin: 5,
    borderRadius: 10,
    width: "100%",
  },
  blueBubble: {
    borderWidth: 2,
    borderColor: "#3144d1",
    padding: 10,
    borderRadius: 15,
  },
  headlineText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
