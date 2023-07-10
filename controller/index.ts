import { userService } from "../services";
import { UserControoller } from "./userController";

export const userController = new UserControoller(userService);
