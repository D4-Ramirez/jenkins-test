import { Request, Response } from "express";
import Product from "../models/products.model";

export async function deleteProduct(req: Request, res: Response) {
    await Product.findByIdAndDelete(req.params.id);
    res.json("👍 Deleted");
}
