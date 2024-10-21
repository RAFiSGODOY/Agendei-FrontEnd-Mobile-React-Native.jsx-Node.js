import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles ={

    container:{
      backgroundColor:COLORS.background,
      flex:1,
      paddingTop:12,
    },

    item:{
        borderWidth:1,
        borderColor: COLORS.gray4,
        padding:20,
        marginBottom:10,
        borderColor:COLORS.gray4,
    },
    title:{
        fontSize:FONT_SIZE.sm,
        color:COLORS.gray3,
        marginBottom:4,
        
    },
    text:{
        fontSize:FONT_SIZE.md,
        color:COLORS.gray1,
    },
    containerButton:{
       padding:10,
       
    },
}