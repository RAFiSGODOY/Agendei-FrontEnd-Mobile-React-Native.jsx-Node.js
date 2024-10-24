import { Text, TextInput, TouchableOpacity, View, Image, ActivityIndicator } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import AlertModal from "../../components/modal/modal.jsx";
import { AuthContext } from "../../contexts/auth.js";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../constants/theme.js";


function Login(props) {
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState("eduardo@gmail.com");
    const [password, setPassword] = useState("eduardo123");
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("Ocorreu um erro. Tente novamente mais tarde");
    const [loading, setLoading] = useState(false); // Inicializa como false
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


    const closeModal = () => {
        setModalVisible(false);
    };

    async function ExecuteLogin() {
        setLoading(true); // Inicia o carregamento
        try {
            const response = await api.post("/users/login", { email, password });

            if (response.data) {
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
                const userName = response.data.name || "";
                setTextModal(`Bem-vindo, ${userName}`);
                setModalVisible(true);
                setTimeout(() => {
                    setUser(response.data);
                }, 2000);
            }
        } catch (error) {
            if (error.response?.data.error) {
                setTextModal(error.response.data.error);
            } else if (email === "" || password === "") {
                setTextModal("Por favor, insira seu e-mail e sua senha.");
            } else {
                setTextModal("Ocorreu um erro. Tente novamente mais tarde.");
            }
            setModalVisible(true);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>
            <View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Ionicons
                            name={isPasswordVisible ? "eye-off" : "eye"}
                            size={24}
                            color={COLORS.gray2}
                            style={{marginRight:10}}
                        />
                    </TouchableOpacity>
                </View>

                <Button onPress={ExecuteLogin} loading={loading} text={loading ? "" : "Acessar"} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Não tenho conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
                    <Text style={styles.footerLink}>Criar conta. </Text>
                </TouchableOpacity>
            </View>
            <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal} />
        </View>
    );
}

export default Login;
