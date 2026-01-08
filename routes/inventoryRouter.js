const express = require("express");
const router = express.Router();

router.get("/");
router.get("/games");
router.get("/games/:gameId");
router.get("/categories");
router.get("categories/:categoryId");
router.get("/new");
router.post("/new");
