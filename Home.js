import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Card} from 'react-native-shadow-cards';
import Login from "./components/Login";
import TrancactionForm from "./components/TrancactionForm"

export default function HomeScreen() {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  const [modalTransactionVisible , setModalTransactionVisible] = useState(false)
  function startLogin() {
    setModalLoginVisible(true);
  }

  function endStartLogin() {
    setModalLoginVisible(false);
  }

  function startAddTransaction(){
    setModalTransactionVisible(true)
  }

  function endAddTransaction(){
    setModalTransactionVisible(false)
  }

  return (
    <>
      <LinearGradient
        style={styles.gradient}
        colors={["#2980B9", "#6DD5FA", "#FFFFFF"]}
        // colors={["#D5FEFD", "#FFFCFF"]}
      >
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.text_header}>HOME</Text>
            <Image
              style={styles.img_acount}
              source={require("./assets/utilisateur.png")}
            />
          </View>
          <Text style={styles.text_info}>
            National transfer: send and receive money anywhere in Morocco
          </Text>
          <Pressable style={styles.login_btn} onPress={startLogin}>
            <Text style={styles.text_btn}>Log in</Text>
          </Pressable>
          <View>
            <Image
              style={styles.img}
              source={require("./assets/crypto_bank.png")}
            />
          </View>

          <View >
            <Pressable style={styles.flex_View} onPress={startAddTransaction}>
              <Image
                style={styles.icon}
                source={require("./assets/public-service.png")}
              />
              <Text  style={styles.txt_card }>Add transaction</Text>
            </Pressable>
          </View>
        </View>
        
      </LinearGradient>

      <View style={styles.container}>
        <Login visible={modalLoginVisible} onCancelLogin={endStartLogin} />
        <TrancactionForm visible={modalTransactionVisible}  OncancelTransaction={endAddTransaction}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "8%",
  },
  gradient: {
    flex: 2,
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: "3%",
    width: "100%",
    height: 50,
    marginBottom: 10,
  },
  text_header: {
    marginLeft: "10%",
    // color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  text_info: {
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  img_acount: {
    width: 30,
    height: 30,
    marginRight: "5%",
    resizeMode: "stretch",
  },
 

  login_btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 12,
    backgroundColor: "#48d1cc",
    marginLeft: "-50%",
    marginTop: "7%",
  },
  text_btn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  img: {
    width: 400,
    height: 280,
    borderRadius: 10,
    resizeMode: "stretch",
  },

  card: {
    marginTop:'-4%',
    marginBottom:30,
    alignItems:"center",
    justifyContent: "space-between",
    shadowOpacity: 1,
    shadowRadius:16,
    elevation: 10,
  },
  txt_card: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: "5%",
  },
  icon: {
    width: 40,
    height: 50,
  },
  flex_View: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:'#D5DBDB',
    marginTop:'-4%',
    marginBottom:30,
    width:'60%',
    shadowOpacity: 1,
    shadowRadius:16,
    elevation: 10,
  },
});
