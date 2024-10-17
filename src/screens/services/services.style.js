import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {

  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 12,

  },
  banner: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'Center',
    paddingTop: 10,
    paddingBottom: 25,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: 'white',
    fontWeight:'bold',
    marginTop:5,
  },
  
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: 'white',
    marginTop:3,
  },
}