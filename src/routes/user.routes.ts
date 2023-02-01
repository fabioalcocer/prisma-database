import { Router } from "express"
import { userController } from "../controllers/user.controller"

const routes = Router()

routes.get("/", userController.index)
routes.post("/create", userController.createUser)
routes.get("/:id", userController.findUniqueUser)
routes.put("/:id", userController.updateUser)
routes.delete("/:id", userController.deleteUser)

export default routes