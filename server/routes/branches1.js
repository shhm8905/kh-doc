import express from "express";
import branches1 from "../controllers/branches1.js";

const router = express.Router();

router.route("/").get(branches1.getBranches1).post(branches1.createBranch1);
router.route("/:id").get(branches1.getBranch1).patch(branches1.updateBranch1).delete(branches1.deleteBranch1);

export default router;