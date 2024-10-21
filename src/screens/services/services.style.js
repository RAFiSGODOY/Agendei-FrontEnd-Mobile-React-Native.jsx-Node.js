
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    banner: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 25,
        shadowColor: '#000', // Sombra para dar profundidade
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10, // Para Android
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.background,
        fontWeight: "bold",
        marginTop: 5
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.background,
        marginTop: 3,
        textAlign:'center'
    },
    Prestados:{
        color:COLORS.gray2,
        fontSize: FONT_SIZE.lg,
        textAlign:'center',
        
    },
    line: {
        height: 2, // Altura da linha
        backgroundColor: COLORS.gray4, // Cor da linha
        marginTop: 2, // Espaçamento entre o texto e a linha
        width:120,
    },
    AlinharSP:{
        alignItems:'center',
        paddingTop:20,
    },
    containerI: {
        flex: 1,
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center',     // Centraliza horizontalmente
        backgroundColor: COLORS.background, // Adicione a cor de fundo se necessário
    },

    Indisponivel:{
        fontSize:FONT_SIZE.lg,
        color:COLORS.primary,
        textAlign:'center'
    },

    LoadingContainer:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
}