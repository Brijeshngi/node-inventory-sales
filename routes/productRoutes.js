import express from "express";
import {
  addProduct,
  editProduct,
  findOneProduct,
  productList,
  searchProduct,
} from "../controllers/productController";

const router = express.Router();

router.route("/product").post(addProduct).get(productList);
router.route("/product/:id").put(editProduct).put(findOneProduct);
router.route("/product/search").get(searchProduct);
export default router;
