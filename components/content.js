import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import axios from "axios";

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.studia.krishome.hmcloud.pl/?ins=ALL"
        );
        // console.log(response.data.post[0]);
        setData(response.data.post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView>
      {data.map((item) => (
        <TouchableOpacity
          style={styles.co}
          onPress={() => Linking.openURL(item.link)}
        >
          <Text style={styles.titleStyle} key={item.id}>
            {item.title}
          </Text>
          <Text style={styles.content}>
            {"\n"}
            {item.content}
            {"\n"}
          </Text>
          <View style={styles.endDiv}>
            <Text style={styles.ins}> {item.instytut} </Text>
            <Text style={styles.date}> {item.data} </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  co: {
    // height: 220,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,

    margin: 15,
    marginBottom: 1,
    display: "flex",
    flexDirection: "column",
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
  },
  titleStyle: {
    // backgroundColor: "blue",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  content: {
    // backgroundColor: "orange",
    // fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  endDiv: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    width: 100,
    // backgroundColor: "red",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    // marginBottom: 0,
    // alignSelf: "flex-end",
  },
  ins: {
    width: 100,
    // backgroundColor: "red",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    // marginBottom: 0,
    // alignSelf: "flex-start",
  },
});
