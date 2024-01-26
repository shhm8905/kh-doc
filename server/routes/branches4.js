import express from "express";
import branches4 from "../controllers/branches4.js";

const router = express.Router();

router.route("/").get(branches4.getBranches4).post(branches4.createBranch4);
router.route("/:id").get(branches4.getBranch4).patch(branches4.updateBranch4).delete(branches4.deleteBranch4);

export default router;