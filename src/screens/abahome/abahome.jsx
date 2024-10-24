import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./abahome.style.js";
import Doctor from "../../components/doctor/doctor.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";
import AlertModal from "../../components/modal/modal.jsx";
import { COLORS } from "../../constants/theme.js";
function AbaHome(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("Ocorreu um erro. Tente novamente mais tarde");
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true); // Inicializa como true
    const closeModal = () => {
        setModalVisible(false);
    };

    function ClickDoctor(id_doctor,name,specialty,icon){
        props.navigation.navigate("services", {id_doctor,
            name,
            specialty,
            icon
        });

    }
    async function LoadServices(){
        setLoading(true); 
        try{
            const response = await api.get("/doctors")

           if(response.data){
            setDoctors(response.data);
            
           }

        }catch(error){
            if(error.response?.data.error){
                setTextModal(error.response.data.error);
                setModalVisible(true); 
            } 
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        LoadServices();
    }, []);


    return (<View style={styles.container}>
        <Text style={styles.text}>
            Serviços médicos disponíveis:
        </Text>
        {loading ? ( 
                <View style={styles.LoadingContainer}>
                  <ActivityIndicator size="large" color={COLORS.primary} />  
                </View>

                
            ): doctors.length > 0 ? (
                <FlatList data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Doctor id_doctor={item.id_doctor}
                                name={item.name}
                               icon={item.icon}
                               specialty={item.specialty} 
                               onPress = {ClickDoctor}
                />
            }}  

        />
            ) : (
                <View style={styles.containerI}>
                    <Text style={styles.Indisponivel}>Não há serviços disponíveis. </Text>
                </View>
            )}
        <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal}/>
    </View>
    )
}


export default AbaHome;