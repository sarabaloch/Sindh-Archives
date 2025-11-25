// import express from "express";
// // import { registerUser, loginUser } from "../controllers/authController.js";
// import { login } from "../controllers/authController.js";

// const router = express.Router();

// // POST /api/auth/register
// // router.post("/register", registerUser);

// // POST /api/auth/login
// router.post("/login", loginUser);

// export default router;
import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

// POST /api/auth/login
router.post("/login", login);

export default router;
