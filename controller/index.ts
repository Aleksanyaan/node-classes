import { UserControoller } from "./userController";
import { UserService } from "../services/user.service";

export const userController = new UserControoller(UserService);