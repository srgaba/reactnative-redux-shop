import styled from 'styled-components';
import { TouchableHighlight } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Background = styled.View`
    background: #09001C;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    padding: 30px 30px 30px;
`;

export const HeaderLeft = styled(TouchableHighlight)`

`;

export const ImageLogo = styled.Image`
`

export const HeaderRight = styled(RectButton)`
    margin-top: 10px;
`;

export const ContainerAmount = styled.View`
    justify-content: center;
    align-items: center;
    background: #7159c1;
    width: 23px;
    height: 23px;
    border-radius: 13px;
    position: absolute;
    margin-top: -12px;
    margin-left: 12px;
`;

export const AmountText = styled.Text`
    color: #FFF;
    font-weight: bold;
`
