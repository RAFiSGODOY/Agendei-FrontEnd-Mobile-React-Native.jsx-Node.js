import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {

    appointments: {
        backgroundColor: COLORS.background,
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray4,


    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 2,
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4,
    },

    icon: {
        width: 25,
        height: 25,
        marginRight: 5,
    },

    bookingDate: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginTop: 3,
        marginBottom:3,


    },
    bookingHour: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginTop: 3,
    },

    Booking: {
        flexDirection: "row",
    },

    containerBooking: {
       flex:1,
    },
    containerButton:{
        marginTop:5,
    },

    container:{
        flexDirection:"row",
    }


}