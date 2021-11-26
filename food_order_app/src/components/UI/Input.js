
// spread opertor used because it convert {type:"text"} into type="text"
import classes from './Input.module.css';

const Input = (props) =>{
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input {...props.input} />
        </div>
        
    )
}

export default Input;