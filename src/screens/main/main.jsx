import { Image, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import icon from "../../constants/icon.js";

import { COLORS, FONT_SIZE } from "../../constants/theme.js";

import abahome from "../abahome/abahome.jsx";
import abaprofile from "../abaprofile/abaprofile.jsx";
import abacalendar from "../abacalendar/abacalendar.jsx";


const Tab= createBottomTabNavigator();


function Main() {
    return (
            <Tab.Navigator>
                <Tab.Screen  name="Home" component={abahome} options={{
                    headerTitleAlign:'center',
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{
                            width:125, 
                            height:29,}
                        } />
                    },
                    tabBarShowLabel:false,
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.home} style={{
                            width:25, 
                            height:25,
                            opacity: focused ? 1 : 0.3
                        }
                        }/>
                    }
                }} />

                <Tab.Screen  name="Calendar" component={abacalendar}  options={{
                    headerTitleAlign:'center',
                    headerTitle: () => {
                        return <Text style={{
                            color:COLORS.primary,
                            fontSize:FONT_SIZE.lg,
                        }}>Minhas Reservas </Text>
                    },
                    tabBarShowLabel:false,
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.calendar} style={{
                            width:25, 
                            height:25,
                            opacity: focused ? 1 : 0.3
                        }
                        }/>
                    }
                }} />

                <Tab.Screen  name="Profile" component={abaprofile}  options={{
                    headerTitleAlign:'center',
                    headerTitle: () => {
                        return <Text style={{
                            color:COLORS.primary,
                            fontSize:FONT_SIZE.lg,
                        }}>Meu Perfil </Text>
                    },
                    tabBarShowLabel:false,
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.profile} style={{
                            width:25, 
                            height:25,
                            opacity: focused ? 1 : 0.3
                        }
                        }/>
                    }
                }} />

            </Tab.Navigator>
    )

}

export default Main;