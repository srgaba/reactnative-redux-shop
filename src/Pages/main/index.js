import React, { Component } from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import Reactotron from 'reactotron-react-native'


import * as CartActions from '../../redux/modules/cart/index'
import formatPrice from '../../util/format';;


import { 
  Container,
  ListProduct, 
  Product, 
  ImageList, 
  ProductText,
  ProductPrice,
  ProductButton,
  DivButton,
  DivButtonText,
  ProductButtonText
} from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    products: [],
  };

  addToCart = id => 
  {
    const { dispatch } = this.props;

    dispatch(CartActions.addToCartRequest(id))
  }

  async componentDidMount()
  {
      const response = await api.get('/product');

      const data = response.data.products.map(product => ({
        ...product, 
        priceFormatted: formatPrice(product.price),
      }));  

      this.setState({
        products: data
      })
  }

  mapState(index)
  {
    const { cart } = this.props;

    const amount = cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      
      return amount
    }, {})

    if(amount[index] > 0)
    {
      return amount[index]
    }

    return 0;
  }

  render()
  {
    const { products } = this.state;
    return (
      <>
        <Header />
        <Container>
            <ListProduct 
              horizontal={true}
              data={products}
              keyExtractor={product => product.id}
              renderItem={({ item }) => (
                <Product>
                  <ImageList source={{ uri: item.image}}/>
                  <ProductText>{item.title}</ProductText>
                  <ProductPrice>{item.priceFormatted}</ProductPrice>

                  <ProductButton onPress={() => this.addToCart(item.id)}>
                      <DivButton>
                        <Icon name="shopping-cart" size={20} color="#FFF" />
                        <DivButtonText>{this.mapState(item.id)}</DivButtonText>
                      </DivButton>

                      <ProductButtonText>Adicionar</ProductButtonText>
                  </ProductButton>
                </Product>
              )}
            />
    
      </Container>
      </>
      
    );
  };
}

export default connect(state => ({
  cart: state.cart
}))(Main);
