import { Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import { Button } from "../../components/button/button.jsx";
function Account() {

    return (
        <View style={styles.container}>


            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
            <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="Nome" />
                </View>
                <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="E-mail" />
                </View>

                <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true} />
                </View>
                <Button text="Criar Conta" />
            </View>

            <View style={styles.footer}>
                <Text style={footerText}>Já tenho conta. </Text>
                <TouchableOpacity >
                    <Text style={styles.footerLink}>
                        Criar conta agora.
                    </Text>
                </TouchableOpacity>
            </View>




        </View>

    )
}

export default Account;