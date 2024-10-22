import { Text, View, ActivityIndicator } from "react-native";
import { styles } from "./abaprofile.styles.js";
import api from "../../constants/api.js";
import { useContext, useEffect, useState } from "react";
import AlertModal from "../../components/modal/modal.jsx";
import { COLORS } from "../../constants/theme.js";
import Button from "../../components/button/button.jsx";
import { AuthContext } from "../../contexts/auth.js";

function AbaProfile() {
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("Ocorreu um erro. Tente novamente mais tarde");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const {setUser} = useContext(AuthContext);
    const closeModal = () => {
        setModalVisible(false);
    };
    async function LoadProfile() {
        setLoading(true);
        try {
            const response = await api.get("/users/profile");
            if (response.data?.name) {
                setName(response.data.name);
                setEmail(response.data.email);
            }

        } catch (error) {
            if (error.response?.data.error) {
                setTextModal(error.response.data.error);
                setModalVisible(true);
            }
        } finally {
            setLoading(false);
        }
    }

    function logout(){
        setTextModal("Desconectando da conta....");
        setModalVisible(true);
        setLoading(true);
        setTimeout(() => {
          api.defaults.headers.common['Authorization'] = "";
        setUser({}); 
        setLoading(false); 
        setModalVisible(false);
        }, 2000);
    }

    useEffect(() => {
        LoadProfile();
    }, []);


    return (<View style={styles.container}>
            

                <View style={styles.item}>
                    <Text style={styles.title}>
                        Nome
                    </Text>
                    <Text style={styles.text}>{name}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>
                        E-mail
                    </Text>
                    <Text style={styles.text}>{email} </Text>
                </View>
                <View style={styles.containerButton}>
                    <Button  theme="danger" onPress={logout} loading={loading} text={loading ? "" : "Desconectar"}/>
                </View>
           
        <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal} />
    </View>

    )
}

export default AbaProfile;