 import { COLORS, FONT_SIZE } from "../../constants/theme.js";

 export const styles = {
    container:{
      flex:1,
      backgroundColor:COLORS.background,
      padding:40,
      justifyContent:'space-around'
    },

    containerLogo:{
        alignItems:"center"
    },

    logo:{
      width: 190, 
      height: 45,
    },

    input:{
        backgroundColor:COLORS.gray5,
        padding:10,
        borderRadius:6,
        marginBottom:10,
        shadowColor: '#000', // Sombra para dar profundidade
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2, // Para Android
    },

    footer:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',

    },
    footerText:{
      alignItems:'center',
     color:COLORS.gray3,
    },

    footerLink:{
      color:COLORS.primary,
      
    },
    
}
