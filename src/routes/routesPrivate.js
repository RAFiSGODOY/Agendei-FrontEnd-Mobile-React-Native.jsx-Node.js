import Main from "../screens/main/main.jsx";
import Services from "../screens/services/services.jsx";
import Schedules from "../screens/schedule/schedule.jsx";
import { COLORS } from "../constants/theme.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

function RoutesPrivate() {
    return(
    <Stack.Navigator>
        <Stack.Screen name="main" component={Main}
        options={{headerShown:false}}
        />
        <Stack.Screen name="services" component={Services}
        options={{
                  headerTitle:"Serviços",
                  headerTitleAlign:"center",
                  headerShadowVisible:false,
                  headerTintColor:COLORS.background,
                  headerStyle:{
                    backgroundColor:COLORS.primary,

                  }
        
        }}
        />
        <Stack.Screen name="schedule" component={Schedules}
        options={{
            headerTitle:"Fazer uma reserva",
            headerTitleAlign:"center",
            headerShadowVisible:false,
            headerTintColor:COLORS.primary,
            headerStyle:{
              backgroundColor:COLORS.background,

            }
  
  }}
        />
    </Stack.Navigator>
    )
}

export default RoutesPrivate;