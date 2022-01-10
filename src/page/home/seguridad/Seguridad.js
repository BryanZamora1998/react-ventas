import { Fragment, useState } from "react";
import Text from "../../../util/text/Text";

const Seguridad=()=>{ 

   //Variasbles a utilizar
   const [usuario, setUsuario] = useState('');

    return (
        <Fragment> 
           <div class="container-fluid d-flex justify-content-center">
           <div class="card w-50">
              <div class="card-body">
              <form>
                <div class="form-group">
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

        </Fragment>
    );
}

export default Seguridad;