
import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {

  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:"space-between",
    marginBottom:20,

  },

  theme:{
    todayTextColor: COLORS.primary,
    selectedDayBackgroundColor: COLORS.primary,
    selectedDayTextColor: COLORS.background,
    arrowColor: COLORS.primary
  },

  textHour:{
    fontSize:FONT_SIZE.lg,
    fontWeight:"bold",
    color:COLORS.gray3,
    marginTop:20,
    textAlign:'center',
  },
  

  
}