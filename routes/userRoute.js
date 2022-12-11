import express from "express";

import {
  userLogin,
  userRegister,
  userAddFavourites,
  userRemoveFavourites,
  userGetFavourites
} from "../controllers/userController.js";

import { verifyUser, verifyAdmin } from "../utils/veryfyToken.js";

const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)

router.put("/favourites/add/:id", userAddFavourites)
router.put("/favourites/remove/:id", userRemoveFavourites)
router.get("/favourites/get/:id", userGetFavourites)

export default router