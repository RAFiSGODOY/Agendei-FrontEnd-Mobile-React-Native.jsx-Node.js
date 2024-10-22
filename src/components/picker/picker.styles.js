
import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {

    pickerContainer: {
        padding: 15,
        borderColor: COLORS.gray4,
        borderRadius: 12,
        backgroundColor: COLORS.background,
        marginBottom: 10,
        shadowColor: '#000', // Sombra para dar profundidade
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, // Para Android
        marginTop:-60,
    },
    selectedValue: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.primary,
        textAlign:'center',
        
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        elevation: 5,
    },
    option: {
        padding: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    optionText: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray1,
        textAlign:'center'
    },

  
}