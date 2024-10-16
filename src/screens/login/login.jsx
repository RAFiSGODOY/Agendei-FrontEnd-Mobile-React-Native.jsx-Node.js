import { Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style.js";
import { Button } from "../../components/button/button.jsx";
function Login() {

    return (
        <View style={styles.container}>


            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
                <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="E-mail" />
                </View>

                <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true} />
                </View>
                <Button text="Acessar" />
            </View>

            <View style={styles.footer}>
                <Text style={footerText}>Não tenho conta. </Text>
                <TouchableOpacity >
                    <Text style={styles.footerLink}>
                        Criar conta agora.
                    </Text>
                </TouchableOpacity>
            </View>




        </View>

    )
}

export default Login;