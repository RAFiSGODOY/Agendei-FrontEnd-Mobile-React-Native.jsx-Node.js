import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {

  service: {
    backgroundColor: COLORS.background,
    flex: 1,
    marginTop:12,
    padding: 12,
    flexDirection:'row',
    padding:12,
    borderWidth:1,
    borderColor:COLORS.gray4,

  },

  containerText:{
    flex:1,

  },
  containerButton:{
    marginTop:5,
    
  },

  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray3,
    marginTop:5,
  },

  price: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.primary,
    marginTop:3,
  },
}