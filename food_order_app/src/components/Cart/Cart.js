import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-item']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {

          <li>{item.name}</li>
      })}
    </ul>
  );
      console.log("helhl")
  return (
    <Modal>
        
      {/* {cartItems} */}
      <ul className={classes['cart-item']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (

          <li>{item.name}</li>
      ))}
    </ul>
      <div>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick = {props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
