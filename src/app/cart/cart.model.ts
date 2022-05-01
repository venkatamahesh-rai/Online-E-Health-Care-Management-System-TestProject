import { ProductModel } from "../product/product.model";

export class CartModel {
    id: number;
    ownerID: number;
    items: CartItemModel[];
}


export class CartItemModel {
    id: number;
    product: ProductModel;
    cartID: number;
}