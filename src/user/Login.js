// Login Screen component
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

import { BGColor, InputBGColor, ButtonBGColor } from "../assets/Config";

const Login = props => {
  return (
    <View style={Styles.style}>
      <Text>Login</Text>
      <TextInput style={Styles.TextInputStyle} placeholder="User name" />
      <TextInput
        style={Styles.TextInputStyle}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text style={Styles.ButtonStyles}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={Styles.ButtonStyles}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const Styles = StyleSheet.create({
  style: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BGColor
  },
  TextInputStyle: {
    width: 200,
    padding: 5,
    margin: 5,
    borderColor: "gray",
    borderWidth: 1
  },
  ButtonStyles: {
    width: 200,
    margin: 5,
    padding: 5,
    backgroundColor: ButtonBGColor
  }
});
