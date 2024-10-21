import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles ={

    container:{
      backgroundColor:COLORS.background,
      flex:1,
      padding:12,

    },

    text:{
        fontSize:FONT_SIZE.md,
        color:COLORS.gray1,
        marginBottom:15,
        marginLeft:10,
    },
    containerI: {
      flex: 1,
      justifyContent: 'center', // Centraliza verticalmente
      alignItems: 'center',     // Centraliza horizontalmente
      backgroundColor: COLORS.gray5, // Adicione a cor de fundo se necessário
      borderRadius:12,
      shadowColor: '#000', // Sombra para dar profundidade
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2, // Para Android
        padding:40,
  },

  Indisponivel:{
      fontSize:FONT_SIZE.lg,
      color:COLORS.gray2,
      textAlign:'center',
      marginBottom:10,
  },
}