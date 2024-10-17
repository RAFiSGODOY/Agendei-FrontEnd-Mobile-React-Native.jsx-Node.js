import { View, Text, FlatList } from "react-native";
import { styles } from "./abacalendar.style.js";
import { doctors } from "../../constants/data.js";
import icon from "../../constants/icon.js";
import { appointments } from "../../constants/data.js";
import Appointments from "../../components/appointments/appointments.jsx";

function AbaCalendar() {
    return (<View style={styles.container}>
        <FlatList data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => {
                return <Appointments service={item.service}
                               doctor={item.doctor}
                               specialty={item.specialty}
                />
            }}  

        />
    </View>
    )
}


export default AbaCalendar;