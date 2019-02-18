import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => (
    <div>
      <Backdrop show={props.show} cancel={props.cancel}/>
      <div className={"Modal" + (props.show ? ' Modal-show' : '')}>
          <h2>{props.title}</h2>
          <Button btnType="Danger" click={props.closed}>CANCEL</Button>
          <Button btnType="Success" click={props.showAlert}>CONTINUE</Button>
        {props.children}
      </div>
    </div>
);

export default Modal;
