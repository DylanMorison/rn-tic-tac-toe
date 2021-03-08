import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../text/text";
import styles from "./Button.styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

const Button = ({ title, style, ...props }: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity {...props} style={[styles.btn, style]}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
