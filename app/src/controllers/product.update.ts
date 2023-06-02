import { Request, Response } from "express";
import Product from "../models/products.model";

export async function updateProduct(req: Request, res: Response) {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json("👍 Updated");
}
