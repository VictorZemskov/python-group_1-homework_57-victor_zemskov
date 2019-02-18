import React from 'react';
import './Alert.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Alert = props => {
    const dismissed = props.dismiss;
    if (dismissed === undefined)
        return <div className={["Alert" + (props.show ? ' Alert-show' : ''), props.type].join(' ')}>
            {props.children}
            {/*<Button btnType="Danger" click={props.dismiss}>CANCEL</Button>*/}
        </div>
    else
        return <div className={["Alert" + (props.show ? ' Alert-show' : ''), props.type].join(' ')}>
            {props.children}
            <Button btnType="Danger" click={props.dismiss}>CANCEL</Button>
        </div>
};

export default Alert;
