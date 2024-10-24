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
    containerInput: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:COLORS.gray5,
      borderRadius:6,
      marginBottom:15,
      shadowColor: '#000', // Sombra para dar profundidade
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 2, // Para Android
      
  },
 

    input:{
      flex:1,
      padding: 10,
        
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
