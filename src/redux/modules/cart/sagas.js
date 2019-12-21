import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import formatPrice from '../../../util/format';

import * as CartActions from './index';

function* addToCartRequest({ id })
{
    const productExists = yield select(
        state => state.cart.find(p => p.id == id)
    );
    if(productExists)
    {
        const amount = productExists.amount + 1;
        yield put(CartActions.updateAmountSucess(id, amount))
    }
    else 
    {
        const response = yield call(api.get, '/product');
        const data = response.data.products.find(p => p.id == id);
        const product = {
            ...data, 
            amount: 1,
            priceFormatted: formatPrice(data.price)
        }
        
        yield put(CartActions.addToCart(product))
    }
}

function* updateAmountRequest({ id, amount })
{
    if( amount <= 0) return;

    const response = yield call(api.get, '/product');
    const data = response.data.stock.find(p => p.id == id);
    const stockAmount = data.stock;

    if(amount > stockAmount)
    {
        return;
    }

    yield put(CartActions.updateAmountSucess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCartRequest),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmountRequest),
])
