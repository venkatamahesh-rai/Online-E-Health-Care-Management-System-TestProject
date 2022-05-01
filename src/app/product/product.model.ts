import { CategoryModel } from "./category.model";

export class ProductModel{
    categoryID: number;
    category: CategoryModel;
    name: string;
    id: number;
    detail: string;
    imgSrc: string;
    price: number;
    isActive: boolean;
    categories: CategoryModel[];
}