import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    btn: {
        width: '100%',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center', // Centraliza o texto
        justifyContent: 'center', // Centraliza verticalmente
    },
    primary: {
        backgroundColor: COLORS.primary,

    },
    danger: {
        backgroundColor: COLORS.second,
    },
    text: {
        color: COLORS.terciary,
        fontSize: FONT_SIZE.md,
        textAlign: 'center',
    }
};
