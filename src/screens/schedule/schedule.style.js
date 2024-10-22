
import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {

  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    marginBottom: 20,

  },

  theme: {
    todayTextColor: COLORS.primary,
    selectedDayBackgroundColor: COLORS.primary,
    selectedDayTextColor: COLORS.background,
    arrowColor: COLORS.primary,
    
  },

  textHour: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.gray3,
    marginTop: 20,
    textAlign: 'center',
  },
  textHour2: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.background,
    textAlign: 'center',
    top: 5,
  },

  Circulo: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    top: 10,

  },

  containerPicker: {
    marginTop: -60,
    marginBottom: 10,
    fontSize: 15,
    borderRadius:20,
    backgroundColor:COLORS.background,
    width: "100%",
    color: COLORS.primary,
    shadowColor: '#000', // Sombra para dar profundidade
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2, // Para Android
},

pickeritem:{
  color:COLORS.primary,
  backgroundColor:COLORS.gray4,
  
}
  

  
}