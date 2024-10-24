import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'space-around',
    padding: 40,
  },

  containerLogo: {
    alignItems: "center",

  },

  logo: {
    width: 190,
    height: 43,
  },

  input: {
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6,
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
  containerInput2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray5,
    borderRadius: 6,
    marginBottom: 15,
    shadowColor: '#000', // Sombra para dar profundidade
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2, // Para Android

  },


  input2: {
    flex: 1,
    padding: 10,

  },

  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',


  },
  footerText: {
    color: COLORS.gray3,
  },

  footerLink: {
    color: COLORS.primary,
  },

}