import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
    background: #09001C;
    padding: 10px 15px 0;
`;

export const CartContainer = styled.View`
    flex: 1;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`; 

export const CartEmpty = styled.View`
    align-items: center;
`
export const CartEmptyText = styled.Text`
    margin-top: 15px;
    font-weight: bold;
    font-size: 28px;
`

export const Cart_ = styled.FlatList`

`;

export const Cart_Header = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Cart_Img = styled.Image`
    width: 100px;
    height: 100px;
`;

export const Cart_Header_Text = styled.View`
    padding: 10px 20px 0;
    max-width: 225px;
    display: flex;
    flex-direction: column;
`;

export const Cart_Title = styled.Text`
    font-size: 19px;
`;

export const Cart_Price = styled.Text`
    font-weight: bold;
    font-size: 23px;
`;

export const Cart_BtnDel = styled.TouchableOpacity`
    margin-top: 35px;
`;

export const Cart_Body = styled.View`
    flex: 1;
    margin-top: 10px;
    background: #EEECEC;
    padding: 12px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Cart_Body_Amount = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Cart_Body_Price = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Cart_Btn_Remove = styled.TouchableOpacity`
    margin: 2px 0;
`;

export const Cart_Input = styled.TextInput`
    background: #fff;
    padding: 5px;
    margin: 0 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    min-width: 50px;
    height: 30px;
`;

export const Cart_Btn_Add = styled.TouchableOpacity`
    margin: 2px 0;
`;


export const Cart_Footer = styled.View`
    padding: 10px 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Cart_Footer_Text = styled.Text`
    color: #585858;
    font-size: 17px;
    font-weight: bold;
`;


export const Cart_Footer_Price = styled.Text`
    font-size: 30px;
    font-weight: bold;
`
