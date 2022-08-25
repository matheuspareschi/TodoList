import "./warning.css"
import { CircleWavyWarning, X } from "phosphor-react";


const Warning = (props) => {
    return (
        <div className={`alert ${props.show}`}>
        <span>
          <CircleWavyWarning size={32} color="#d90429" weight="duotone" />
        </span>
        <span className="msg"> {props.text} </span>
        <span>
          <button onClick={() => props.setShow("hide")} className="close-btn">
            <span>
              <X className="close" size={20} color="#d90429" weight="bold"/>
            </span>
          </button>
        </span>
      </div>
    )
}

export default Warning