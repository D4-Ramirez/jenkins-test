import express, { Router } from "express";

import { createProduct } from "../controllers/product.create";
import { getAllProducts } from "../controllers/product.getAll";
import { getProductById } from "../controllers/product.getById";
import { deleteProduct } from "../controllers/product.delete";
import { updateProduct } from "../controllers/product.update";

const router: Router = express();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
