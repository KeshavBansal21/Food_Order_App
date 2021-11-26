import { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';


const Backdrop = (props) =>{
    return <div className={classes.Backdrop}></div>
}

const ModalOverLay = (props) =>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')
const Modal = (props)=>{
    return(
        <Fragement>
            {ReactDOM.createPortal(<Backdrop/> ,  portalElement)}
            {ReactDOM.createPortal(
                <ModalOverLay>{props.children}</ModalOverLay>,
                portalElement
            )}
        </Fragement>
    )
}