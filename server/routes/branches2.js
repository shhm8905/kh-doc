import express from "express";
import branches2 from "../controllers/branches2.js";

const router = express.Router();

router.route("/").get(branches2.getBranches2).post(branches2.createBranch2);
router.route("/:id").get(branches2.getBranch2).patch(branches2.updateBranch2).delete(branches2.deleteBranch2);

export default router;