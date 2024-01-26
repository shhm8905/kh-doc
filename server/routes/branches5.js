import express from "express";
import branches5 from "../controllers/branches5.js";

const router = express.Router();

router.route("/").get(branches5.getBranches5).post(branches5.createBranch5);
router.route("/:id").get(branches5.getBranch5).patch(branches5.updateBranch5).delete(branches5.deleteBranch5);

export default router;