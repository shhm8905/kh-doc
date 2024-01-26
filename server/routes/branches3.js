import express from "express";
import branches3 from "../controllers/branches3.js";

const router = express.Router();

router.route("/").get(branches3.getBranches3).post(branches3.createBranch3);
router.route("/:id").get(branches3.getBranch3).patch(branches3.updateBranch3).delete(branches3.deleteBranch3);

export default router;