import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import { styles } from "./services.style.js";
import icon from "../../constants/icon.js";
import Service from "../../components/service/service.jsx";
import api from "../../constants/api.js";
import { useEffect, useState } from "react";
import AlertModal from "../../components/modal/modal.jsx";
import { COLORS } from "../../constants/theme.js";

function Services(props) {
    const id_doctor = props.route.params.id_doctor;
    const name = props.route.params.name;
    const specialty = props.route.params.specialty;
    const iconDoctor = props.route.params.icon;
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("Ocorreu um erro. Tente novamente mais tarde");
    const [doctorsServices, setDoctorsServices] = useState([]);
    const [loading, setLoading] = useState(true); // Inicializa como true

    const closeModal = () => {
        setModalVisible(false);
    };

    function ClickService(id_service) {
        props.navigation.navigate("schedule", { id_doctor, id_service });
    }

    async function LoadServices() {
        setLoading(true); // Define loading como true antes de fazer a requisição
        try {
            const response = await api.get("/doctors/" + id_doctor + "/services");
            if (response.data) {
                setDoctorsServices(response.data);
                console.log(response.data);
            }
        } catch (error) {
            if (error.response?.data.error) {
                setTextModal(error.response.data.error);
                setModalVisible(true);
            }
        } finally {
            setLoading(false); // Define loading como false após a requisição
        }
    }

    useEffect(() => {
        LoadServices();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    source={iconDoctor === "M" ? icon.male : icon.female}
                    style={styles.doctorImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.specialty}>{specialty}</Text>
                </View>
            </View>
            <View style={styles.AlinharSP}>
                <Text style={styles.Prestados}>Serviços Prestados</Text>
                <View style={styles.line}></View>
            </View>

            {loading ? ( 
                <View style={styles.LoadingContainer}>
                  <ActivityIndicator size="large" color={COLORS.primary} />  
                </View>

                
            ) : doctorsServices.length > 0 ? (
                <FlatList
                    data={doctorsServices}
                    keyExtractor={(serv) => serv.id_service.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Service
                            id_service={item.id_service}
                            description={item.description}
                            price={item.price}
                            onPress={ClickService}
                        />
                    )}
                />
            ) : (
                <View style={styles.containerI}>
                    <Text style={styles.Indisponivel}>Não há serviços disponíveis. </Text>
                </View>
            )}

            <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal} />
        </View>
    );
}

export default Services;
