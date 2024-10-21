import { View, Text, FlatList } from "react-native";
import { styles } from "./abahome.style.js";
import { doctors } from "../../constants/data.js";
import Doctor from "../../components/doctor/doctor.jsx";
import icon from "../../constants/icon.js";
function AbaHome(props) {


    function ClickDoctor(id_doctor,name,specialty,icon){
        props.navigation.navigate("services", {id_doctor,
            name,
            specialty,
            icon
        });

    }


    return (<View style={styles.container}>
        <Text style={styles.text}>
            Agende os seus serviços médicos
        </Text>

        <FlatList data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => {
                return <Doctor id_doctor={item.id_doctor}
                                name={item.name}
                               icon={item.icon}
                               specialty={item.specialty} 
                               onPress = {ClickDoctor}
                />
            }}  

        />
    </View>
    )
}


export default AbaHome;