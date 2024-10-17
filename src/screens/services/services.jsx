import { View, Text, FlatList, Image} from "react-native";
import { styles } from "./services.style.js";
import { doctors_services } from "../../constants/data.js";
import icon from "../../constants/icon.js";

function Services() {
    return (<View style={styles.container}>
        <View style={styles.banner}>
            <Image source={icon.female}/>
            <Text style={styles.name}>
                Heber
            </Text>
            <Text style={styles.specialty}>
                Cardiologista
            </Text>
        </View>




        <FlatList data={doctors_services}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => {
                return
            }}

        />
    </View>
    )
}


export default Services;