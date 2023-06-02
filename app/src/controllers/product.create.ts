import { Request, Response } from "express";
import Product from "../models/products.model";

export async function createProduct(req: Request, res: Response) {
    const product = new Product(req.body);
    await product.save();
    res.json("👍 Saved");
}
