import { Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";
import { useState } from "react";
import api from "../../constants/api.js";

function Login(props) {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");


    async function ExecuteLogin(){
        try{
            const response = await api.post("/users/login",
            {email, 
             password
            });

           if(response.data){
            console.log(response.data);
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
                        placeholder="E-mail" 
                        onChangeText={(text) => setEmail(text)}
                        
                        
                        />

                </View>

                <View styles={styles.containerInput}>
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        />
                </View>
                <Button text="Acessar" onPress={ExecuteLogin}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Não tenho conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
                    <Text style={styles.footerLink}>Criar conta. </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Login;