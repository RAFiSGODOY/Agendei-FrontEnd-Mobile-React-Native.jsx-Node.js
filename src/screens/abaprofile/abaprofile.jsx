import {Text, View} from "react-native";
import {styles} from "./abaprofile.styles.js";


function AbaProfile() {
    return (

        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>
                    Nome
                </Text>
                <Text style={styles.text}>
                    Heber Stein Mazutti
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>
                    E-mail
                </Text>
                <Text style={styles.text}>
                    heber@test.com.br
                </Text>
            </View>
        </View>

    )
}

export default AbaProfile;