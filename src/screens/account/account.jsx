import { Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import  Button  from "../../components/button/button.jsx";
import { useState } from "react";
import api from "../../constants/api.js";

function Account(props) {


    const[name, setName] = useState("");
    const[email, setEmail] = useState(""); 
    const[password, setPassword] = useState("");
    

    async function ExecuteCadastro(){
        try{
            const response = await api.post("/users/register",{
             name,
             email, 
             password
            });

           if(response.data){
            console.log(response.data);
            Alert.alert("Conta criada com sucesso...");
            props.navigation.navigate("login");
           }

        }catch(error){
            if(error.response?.data.error)
                Alert.alert(error.response.data.error);
             else 
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
            
            

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
                <Button text="Criar Conta" onPress={ExecuteCadastro}/>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Já tenho conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                    <Text style={styles.footerLink}>Fazer login. </Text>
                </TouchableOpacity>
            </View>




        </View>

    )
}

export default Account;