import { Fragment } from "react";
import './Text.css';
import $ from 'jquery';

const Text=({typeInput,label,id,icon,text,setText})=>{
    const onFocusEvent=()=>{
        $(`#textoF-${id}`).css("margin-top",-20);
        $(`#textoI-${id}`).css("border-bottom","1px solid blue");
        $(`#textoF-${id}`).css("font-size","12px");
    }
    const onFocusOutEvent=()=>{
      if(text==null || text==""){
        $(`#textoF-${id}`).css("margin-top",0);
        $(`#textoI-${id}`).css("border-bottom","1px solid red");
        $(`#textoF-${id}`).css("font-size","13px");
       }
    }
    
    return (
        <Fragment>
            <div className="form-group m-0">
                <label className="position-absolute" htmlFor="texto" id={`textoF-${id}`} >
                    <i className={`${icon} mr-2`}></i>{label}
                </label>
                    <input 
                    autoComplete="nope" 
                    type={typeInput} 
                    className="form-control mt-3" 
                    id={`textoI-${id}`} 
                    value={text}
                    onInput={e => setText(e.target.value)}
                    name="txt_texto" 
                    onFocus={onFocusEvent}
                    onBlur={onFocusOutEvent}
                    required></input>
            </div>
        </Fragment>
    );
}

export default Text;