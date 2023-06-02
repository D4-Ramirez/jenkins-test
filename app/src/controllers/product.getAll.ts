import { Request, Response } from "express";
import Product from "../models/products.model";

export async function getAllProducts(req: Request, res: Response) {
    const products = await Product.find();
    res.json(products);
}
