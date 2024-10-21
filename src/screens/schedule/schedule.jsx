import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";
import AlertModal from "../../components/modal/modal.jsx";
import api from "../../constants/api.js";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule(props) {
    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;

    const [selectedDate, setSelectdDate] = useState("");
    const [selectedHour, setSelectdHour] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState("Ocorreu um erro. Tente novamente mais tarde");
    const [loading, setLoading] = useState(false); 

    const closeModal = () => {
        setModalVisible(false);
    };

    async function ClickBooking() {
        
        if (selectedDate && selectedHour) { 
            setLoading(true);
            try {
                const response = await api.post("/appointments", {
                    id_doctor,
                    id_service,
                    booking_date: selectedDate,
                    booking_hour: selectedHour
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
                    setModalVisible(true);
                } 
            } finally {
                setLoading(false);
            }
        } else {
            setTextModal("Ops, selecione a Data e Hora de seu agendamento!");
            setModalVisible(true);
            setLoading(false);
        }
    }
    

    return (
        <View style={styles.container}>
        <View>
            <Calendar theme={styles.theme}
                onDayPress={(day) => {
                    setSelectdDate(day.dateString)
                }}
                markedDates={{ [selectedDate]: { selected: true } }}
                minDate={new Date().toDateString()}

            />

            <View>
                <Text style={styles.textHour}>
                    Horário
                </Text>
            </View>



            <View>
                <Picker selectedValue={selectedHour} onValueChange={(itemValue, itemIndex) => {
                    setSelectdHour(itemValue)
                }}>
                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="09:30" value="09:30" />
                    <Picker.Item label="10:00" value="10:00" />
                    <Picker.Item label="10:30" value="10:30" />
                    <Picker.Item label="11:00" value="11:00" />
                </Picker>
            </View>
        </View>
        <View>
        <Button onPress={ClickBooking} loading={loading} text={loading ? "" : "Confirmar Reserva"} />
        </View>
        <AlertModal modalVisible={modalVisible} text={textModal} onClose={closeModal} />
    </View>
    );
}

export default Schedule;
