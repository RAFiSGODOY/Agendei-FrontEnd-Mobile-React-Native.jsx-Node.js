import RoutesOpen from "./routesOpen";
import RoutesPrivate from "./routesPrivate";


function Routes(){

    const user = {
       // id_user: 
    }


    return user.id_user ? <RoutesPrivate /> : <RoutesOpen />


}

export default Routes;