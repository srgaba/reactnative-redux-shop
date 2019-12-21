import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native';
import { darken } from 'polished';

export const Container = styled.ScrollView`
    background: #09001C;
`

export const ListProduct = styled.FlatList`
`;

export const Product = styled.View`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    padding: 15px;
    max-width: 230px;
    margin-left: 15px;
`;

export const ImageList = styled.Image`
    width: 200px;
    height: 200px;
`;

export const ProductText = styled.Text`
    color: #000;
    font-size: 18px;
`

export const ProductPrice = styled.Text`
    font-weight: bold;
    font-size: 22px;
`;

export const ProductButton = styled(RectButton)`
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    margin-top: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const DivButton = styled.View`
    display: flex;
    flex-direction: row;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 15px;
    background: ${darken(0.03, '#7159c1')};
`;

export const DivButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
`;

export const ProductButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-left: 25px;
`;
