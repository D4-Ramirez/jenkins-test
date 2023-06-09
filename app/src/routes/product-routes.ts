import express, { Router } from "express";

import * as productController from "../controllers/product-controller";

const router: Router = express();

router.get("/", productController.findAllProducts);
router.get("/:id", productController.findProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
