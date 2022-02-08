import React from "react";
import classes from "./Cart.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Cart } from "../StoreContext/CartContext";
import { useContext } from "react";


const CartList = (props) => {
  const {cart} = useContext(Cart)

  const styleBtn = {
    'marginLeft': '72%',
    'height': '40px',
    'marginTop' : '2%',
  }
  return (
    <section className={classes.cartBody}>
      <Button style={styleBtn} onClick={props.Close}>X</Button>
      <h2 className={classes.cartHeading}>CART</h2>

      <Row>
        <Col xs="4">
          <span className={classes.headText}>Item</span>
          <hr />
        </Col>
        <Col xs="4">
          <span className={classes.headText}>Price</span>
          <hr/>
        </Col>
        <Col xs="4">
          <span className={classes.headText}>Quantity</span>
          <hr />
        </Col>
      </Row>
      {cart.map((items) => {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col xs="4">
                <Col xs="6">
                  <img className={classes.cartImages} src={items.imageUrl} />
                </Col>
                <Col xs='6' className={classes.cartTitle} xs="6">{items.title}</Col>
              </Col>

              <Col xs="4">${items.price}</Col>
              <Col xs="4">{items.quantity}</Col>
            </Row>

          </Container>

          // <ul className={classes.cartList}>
          //     <li><img className={classes.cartImages} src={items.imageUrl}/></li>
          //     <li className={classes.cartTitle}>{items.title}</li>
          //     <li className={classes.cartPrice}>{items.price}</li>
          //     <li className={classes.cartQuantity}>{items.quantity}</li>
          // </ul>
        );
      })}
    </section>
  );
};

export default CartList;