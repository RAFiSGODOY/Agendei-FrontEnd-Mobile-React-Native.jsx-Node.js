import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {
    doctor: {
        backgroundColor: COLORS.background,
        flexDirection: 'row',
        padding: 15,
        borderLeftWidth: 4,
        borderColor: COLORS.primary,
        marginVertical: 3,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    textContainer: {
        flex: 1, 
        justifyContent: 'center', 
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginTop: 5,
        flexWrap: 'wrap', 
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 8,
    },
};
