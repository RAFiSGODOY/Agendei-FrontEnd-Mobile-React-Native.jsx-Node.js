import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {

  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 12,

  },

  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
  containerI: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    backgroundColor: COLORS.background, // Adicione a cor de fundo se necessário
  },

  Indisponivel: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.primary,
    textAlign: 'center'
  },

  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}