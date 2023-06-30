import express from "express";
import { userController } from "../controller";

const uesrRouter = express.Router();

uesrRouter.post('/', (req, res, next) => userController.create(req, res, next));

export { uesrRouter };