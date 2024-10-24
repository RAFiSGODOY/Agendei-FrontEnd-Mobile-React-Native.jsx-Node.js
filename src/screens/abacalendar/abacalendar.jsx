import { View, FlatList, Text } from "react-native";
import { styles } from "./abacalendar.style.js";
import Appointments from "../../components/appointments/appointments.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";
import AlertModal from "../../components/modal/modal.jsx";
import Button from "../../components/button/button.jsx";


function AbaCalendar(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("Ocorreu um erro. Tente novamente mais tarde");
    const [loading, setLoading] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const closeModal = () => {
        setModalVisible(false);
    };

    async function LoadAppointments() {
        setLoading(true);
        try {
            const response = await api.get("/appointments");
            if (response.data) {
                console.log(response.data)
                setAppointments(response.data)
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

    async function DeleteAppointments(id_appointment) {
        try {
            await api.delete("/appointments/" + id_appointment);
            LoadAppointments();
            setTextModal("Agendamento Cancelado!");
            setModalVisible(true);
        } catch (error) {
            if (error.response?.data.error) {
                setTextModal(error.response.data.error);
                setModalVisible(true);
            }
        } 



    }
    useEffect(() => {
        LoadAppointments();
    }, []);

    function RedirecionarAgendamentos() {
        props.navigation.navigate("Home");
    }

    return (<View style={styles.container}>
        {appointments.length > 0 ? (
            <FlatList
                data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Appointments
                        id_appointment={item.id_appointment}
                        service={item.service}
                        doctor={item.doctor}
                        specialty={item.specialty}
                        bookingDate={item.booking_date}
                        bookingHour={item.booking_hour}
                        onPress={DeleteAppointments}
                        
                    />
                )}

            />
        ) : (
            <View style={styles.containerI}><Text style={styles.Indisponivel}>Nenhum agendamento encontrado. </Text>
                <Button onPress={RedirecionarAgendamentos} text="Agendar nova consulta" />
            </View>
        )}
        <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal} />
    </View>
    )
}


export default AbaCalendar;