import { Request, Response } from "express";
import Product from "../models/products.model";

export async function getProductById(req: Request, res: Response) {
    const product = await Product.findById(req.params.id);
    res.json(product);
}
