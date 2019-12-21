import React from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native'

import logoHeader from '../../images/gabashoes.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';


import { 
    Background,
    ImageLogo, 
    HeaderLeft, 
    HeaderRight, 
    ContainerAmount, 
    AmountText, 
} from './styles';


function Header({ navigation, cart })
{
    return(
        <Background>
            <HeaderLeft onPress={() => navigation.navigate('Main')}>
                <ImageLogo source={logoHeader} />
            </HeaderLeft>

            <HeaderRight  onPress={() => navigation.navigate('Cart', 'as')}>
                <Icon name="shopping-cart" size={30} color="#FFF" /> 
                <ContainerAmount>
                    <AmountText>{cart.length}</AmountText>
                </ContainerAmount>
            </HeaderRight>
        </Background>
    );
}


export default connect(state => ({
    cart: state.cart
}))(withNavigation(Header));