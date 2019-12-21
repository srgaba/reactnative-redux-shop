import React, { Component } from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';

import IconEmpty from 'react-native-vector-icons/MaterialIcons';
import IconCart from 'react-native-vector-icons/Fontisto';
import IconAddRemove from 'react-native-vector-icons/Ionicons';

import Reactotron from 'reactotron-react-native'
import formatPrice from '../../util/format';

import * as CartActions from '../../redux/modules/cart/index';

import { 
  Container, 
  CartContainer,
  CartEmpty,
  CartEmptyText,
  Cart_,
  Cart_Img,
  Cart_Header,
  Cart_Header_Text,
  Cart_Title,
  Cart_Price,
  Cart_BtnDel,
  Cart_Body,
  Cart_Body_Amount,
  Cart_Body_Price,
  Cart_Btn_Remove,
  Cart_Input,
  Cart_Btn_Add,
  Cart_Footer,
  Cart_Footer_Text,
  Cart_Footer_Price

} from './styles';

import { View } from 'react-native';

class Cart extends Component
{
  static navigationOptions = {
    header: null,
  };

  state = {
    emptyCart: true
  }

  
  componentDidMount()
  {
    const { cart } = this.props;
    if(cart.length > 0)
    {
      this.setState({
        emptyCart: false
      });
    };
  }


  addAmountProduct = product => {
    const { dispatch } = this.props;
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  removeAmountProduct = product => {
    const { dispatch } = this.props;
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  getSubTotal = product => {
    const subTotal = product.amount * product.price;
    return formatPrice(subTotal);
  }

  getTotal()
  {
    const { cart } = this.props;
    const total = formatPrice(cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0))

    return total;
  }

  delProduct =  id => {
    const { dispatch } = this.props;
    dispatch(CartActions.removeSucess(id));
  }

  render()
  {
    const { emptyCart } = this.state;
    const { cart } = this.props;

    return(
      <>
        <Header />
        <Container>
          <CartContainer>
            { 
              emptyCart ? 
                <CartEmpty>
                  <IconEmpty name="remove-shopping-cart" size={80} color="#E8E9E8"/>
                  <CartEmptyText>Seu carrinho está vazio</CartEmptyText>
                </CartEmpty>
              :
              <>
                 <Cart_ 
                    data={cart}
                    keyExtractor={product => product.id}
                    renderItem={({ item }) => (
                      <>
                        <Cart_Header key={item.id}>
                          <Cart_Img source={{ uri: item.image}}/>

                          <Cart_Header_Text>
                            <Cart_Title>{item.title}</Cart_Title>
                            <Cart_Price>{item.priceFormatted}</Cart_Price>
                          </Cart_Header_Text>

                          <Cart_BtnDel onPress={() => this.delProduct(item.id)}>
                            <IconCart name="trash" size={25} color="#7159c1"/>
                          </Cart_BtnDel>
                        </Cart_Header>
                        <Cart_Body>
                          <Cart_Body_Amount>
                            <Cart_Btn_Remove onPress={() => this.addAmountProduct(item)}>
                              <IconAddRemove name="md-add-circle"color="#7159c1" size={25}/>
                            </Cart_Btn_Remove>
                  
                            <Cart_Input value={String(item.amount)}/>

                            <Cart_Btn_Add onPress={() => this.removeAmountProduct(item)}>
                              <IconAddRemove name="md-remove-circle"color="#7159c1" size={25}/>
                            </Cart_Btn_Add>
                          </Cart_Body_Amount>

                          <Cart_Body_Price>{this.getSubTotal(item)}</Cart_Body_Price>
                        </Cart_Body>
                      </>
                    )}
                 />
                 <Cart_Footer>
                    <Cart_Footer_Text>Total</Cart_Footer_Text>
                    <Cart_Footer_Price>{this.getTotal()}</Cart_Footer_Price>
                 </Cart_Footer>
              </>
                 
            }
          </CartContainer>
        </Container>
      </>
    );
  }
}

export default connect(state => ({
  cart: state.cart
}))(Cart);

