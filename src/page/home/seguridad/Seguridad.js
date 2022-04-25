import {useState } from "react";
import Text from "../../../util/text/Text";

const Seguridad=()=>{ 

   //Variasbles a utilizar
   const [usuario, setUsuario] = useState('');

    return (
        <> 
           <div className="container-fluid d-flex justify-content-center">
           <div className="card w-50">
              <div className="card-body">
              <form>
                <div className="form-group">
                  <Text 
                    icon="fas fa-user-lock" 
                    label="Usuario"
                    id="user"
                    text={usuario}
                    setText={setUsuario}
                   />                      
                </div>
              </form>
              </div>
            </div>
           </div>
        </>
    );
}

export default Seguridad;