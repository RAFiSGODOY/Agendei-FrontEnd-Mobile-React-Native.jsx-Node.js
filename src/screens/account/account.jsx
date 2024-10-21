import { Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import  Button  from "../../components/button/button.jsx";
import { useState } from "react";
import api from "../../constants/api.js";
import AlertModal from "../../components/modal/modal.jsx";


function Account(props) {


    const[name, setName] = useState("");
    const[email, setEmail] = useState(""); 
    const[password, setPassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("");
    const [loading, setLoading] = useState(false); // Inicializa como true
    const closeModal = () => {
        setModalVisible(false);
    };

    async function ExecuteCadastro(){
        if(name&&email&&password){
            setLoading(true); 
           try{
            const response = await api.post("/users/register",{
             name,
             email, 
             password
            });

           if(response.data){
            console.log(response.data);
            setTextModal("Conta criada com sucesso!");
            setModalVisible(true);
            setTimeout(() => {
                props.navigation.navigate("login");
            }, 3000);
            
           }

        }catch(error){
            if(error.response?.data.error){
                setTextModal(error.response.data.error);
                setModalVisible(true);
            }else if(name == " " ||password==" " || email == " ") {
             setTextModal("Por favor, preencha todos os campos.");
             setModalVisible(true);
            } else{
                setTextModal("Ocorreu um erro. Tente novamente mais tarde. ");
                setModalVisible(true);
               }
            
            

        }finally {
            setLoading(false);
        }
        }else{
            setTextModal("Por favor, preencha todos os campos.");
            setModalVisible(true);
        }
       
    }
    return (
        <View style={styles.container}>


            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            <View>
            <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="Nome"
                        onChangeText={(text) => setName(text)}
                        
                        />
                </View>
                <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="E-mail"
                        onChangeText={(text) => setEmail(text)} />
                </View>

                <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true} 
                        onChangeText={(text) => setPassword(text)}/>
                </View>
                <Button onPress={ExecuteCadastro} loading={loading} text={loading ? "" : "Criar Conta"} />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Já tenho conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                    <Text style={styles.footerLink}>Fazer login. </Text>
                </TouchableOpacity>
            </View>


            <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal}/>

        </View>

    )
}

export default Account;