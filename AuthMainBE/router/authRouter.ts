import express from "express"
import { regUsers, singUsers, viewUsers } from "../controller/authController"
import {upload} from "../config/multer"

const router = express.Router()

router.route("/reg").post(upload, regUsers)
router.route("/sign").post(singUsers)
router.route("/view").get(viewUsers)

export default router