import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    modalContainer: {
        flex: 1,
        position:'absolute',
        bottom:0,
        alignItems: 'left',
        padding: 10,
        width: '100%',
    },
    modalContent: {
        backgroundColor: COLORS.gray5,
        borderColor: COLORS.primary,
        borderLeftWidth: 2,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        padding: 10, // Adiciona espaçamento interno
        shadowColor: '#000', // Sombra para dar profundidade
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2, // Para Android
    },
    modalText: {
        color: COLORS.gray2,
        fontSize: FONT_SIZE.medium, // Usar fonte padronizada
        textAlign: 'left',
        paddingLeft: 1,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: FONT_SIZE.medium,
    },
    line: {
        height: 2, // Altura da linha
        backgroundColor: COLORS.primary, // Cor da linha
        marginTop: 2, // Espaçamento entre o texto e a linha
    },
};
