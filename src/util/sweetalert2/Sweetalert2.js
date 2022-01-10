
import { Component } from 'react'

import Swal from 'sweetalert2';

class Sweetalert2 extends Component {


  /**
   * @description Muestra un modal de espera
   * @author Bryan Zamora
   * @param {*} activar 
   */
   loading(activar){
    Swal.fire({
      background: 'none',
      heightAuto: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      html: '<img src="https://i.gifer.com/XVo6.gif" width="50" height="50">'
    })

    if(!activar){
      Swal.close();
    }
  }

  /**
   * @description Muestra modal de error
   * @author Bryan Zamora
   * @param {@} message 
   */
  showModalError(message){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      heightAuto: false,
      text: message,
      confirmButtonColor:'#007bff',
    })
  }
}

export default Sweetalert2;