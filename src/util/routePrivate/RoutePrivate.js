import {Route,Redirect} from "react-router"

/**
 *@author privatiza las rutas de forma personalizada 
 * @param {*} props 
 * @returns 
 */
const RoutePrivate=(props)=>{
    let auth=JSON.parse(localStorage.getItem("autenticacion"));
    console.log("Hola ",auth);
    if(auth==true){
        return (  
        <Route {...props}/>      
        );
    }else{
        localStorage.setItem("autenticacion", JSON.stringify(false));
        return (  
            <Redirect to='/login' />    
        ); 
    }
}

export default RoutePrivate;