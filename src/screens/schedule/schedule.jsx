import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";
import AlertModal from "../../components/modal/modal.jsx";
import api from "../../constants/api.js";
import { COLORS } from "../../constants/theme.js";
import CustomPicker from "../../components/picker/picker.jsx";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule(props) {
    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;
    const id_user = props.route.params.id_user;

    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [selectedHour, setSelectedHour] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("Ocorreu um erro. Tente novamente mais tarde");
    const [loading, setLoading] = useState(false);
    const [availableHours, setAvailableHours] = useState([]);

    const closeModal = () => {
        setModalVisible(false);
    };

    async function fetchAvailableHours() {
        if (!selectedDate) return;
        try {
            const response = await api.get(`/appointments/check?booking_date=${selectedDate}`);
            setAvailableHours(response.data || []);
        } catch (error) {
            console.error(error);
            setTextModal("Erro ao buscar horários disponíveis.");
            setModalVisible(true);
        }
    }

    useEffect(() => {
        if (selectedDate) {
            fetchAvailableHours();
        }
    }, [selectedDate]);
    
    async function ClickBooking() {
        if (selectedDate && selectedHour) {
            setLoading(true);
            try {
                const response = await api.post("/appointments", {
                    id_doctor,
                    id_service,
                    id_user,
                    booking_date: selectedDate,
                    booking_hour: selectedHour,
                });
    
                if (response.data?.id_appointment) {
                    setTextModal("Agendamento concluído! Redirecionando...");
                    setModalVisible(true);
                    setTimeout(() => {
                        props.navigation.popToTop();
                    }, 2000);
                }
            } catch (error) {
                if (error.response?.data.error) {
                    setTextModal(error.response.data.error);
                } else {
                    setTextModal("Ocorreu um erro. Tente novamente mais tarde.");
                }
                setModalVisible(true);
            } finally {
                setLoading(false);
            }
        } else {
            setTextModal("Ops, selecione a Data e Hora do seu agendamento!");
            setModalVisible(true);
            setLoading(false);
        }
    }
    
    
    
    

    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setUTCHours(0, 0, 0, 0); 
        return date.getUTCDate(); 
    };

    return (
        <View style={styles.container}>
            <Calendar
                theme={styles.theme}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                }}
                markedDates={{ [selectedDate]: { selected: true } }}
                minDate={new Date().toDateString()}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>

                <Text style={styles.textHour}>Horários disponíveis para o dia: </Text>
                <View style={styles.Circulo}>
                    <Text style={styles.textHour2}>{formatDate(selectedDate)}</Text>
                </View>
            </View>

            <View >
            <CustomPicker 
                selectedValue={selectedHour} 
                options={availableHours} 
                onValueChange={setSelectedHour} 
            />

            </View>

            <View>
                <Button onPress={ClickBooking} loading={loading} text={loading ? "Carregando..." : "Confirmar Reserva"} />
            </View>
            <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal} />
        </View>
    );
}

export default Schedule;
