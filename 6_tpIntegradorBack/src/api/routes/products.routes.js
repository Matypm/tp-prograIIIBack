/*========================
    Rutas producto
========================*/

import { Router } from "express";
import { validateId, validateProduct } from "../middlewares/middlewares.js";
import { createProduct, getAllProducts, getProductById, modifyProduct, removeProduct } from "../controllers/product.controllers.js";
const router = Router();


//GET all products
router.get("/", getAllProducts);



//GET product by id
router.get("/:id", validateId, getProductById);



// POST product (CREAR)
router.post("/", validateProduct, createProduct);



// PUT Products (ACTUALIZAR)
router.put("/", validateProduct,modifyProduct);



//DELETE Products 
router.delete("/:id", validateId, removeProduct)



export default router;