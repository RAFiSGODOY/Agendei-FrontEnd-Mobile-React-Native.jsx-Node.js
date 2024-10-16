 import { COLORS, FONT_SIZE } from "../../constants/theme.js";

 export const styles = {
    container:{
      backgroundColor:COLORS.background,
      flex:1,
      justifyContent:'space-between',
      padding:40,
    },

    containerLogo:{
        alignItemns:"center",

    },

    logo:{
      width: 100, 
      height: 23,
    },

    input:{
        backgroundColor:COLORS.gray5,
        padding:10,
        borderRadius:6,
    },

    containerInput:{
        marginBottom:15,
    },

    footer:{
        alignItemns:'center',
        flexDirection:'row',
        justifyContent:'center',

    },
    footerText:{
     color:COLORS.gray3,
    },

    footerLink:{
      color:COLORS.primary,
    },
    
}