import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.btn, props.theme === "danger" ? styles.danger : styles.primary]}
            disabled={props.loading} 
        >
            <View style={styles.buttonContent}>
                {props.loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.text}>{props.text} </Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

export default Button;
