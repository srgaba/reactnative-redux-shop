export function addToCartRequest(id)
{
    return {
        type: '@cart/ADD_REQUEST',
        id
    }
}

export function addToCart(product)
{
    return {
        type: '@cart/ADD',
        product
    }
}

export function removeSucess(id)
{
    return {
        type: '@cart/REMOVE',
        id
    }
}

export function updateAmountRequest(id, amount)
{
    return {
        type: '@cart/UPDATE_AMOUNT_REQUEST',
        id, amount
    }
}

export function updateAmountSucess(id, amount)
{
    return {
        type: '@cart/UPDATE_AMOUNT',
        id, 
        amount
    }
}