/ import { UserService } from "../services/user.service";
import { IUserService } from "../services/user.service";
export class UserControoller {
    constructor(private userService: IUserService) {}
    create(req, res, next) {
        const userPayLoad = req.body;
        try {
            const result = this.userService.createUser(userPayLoad);
            res.status(201).send(result);
        } catch (err:any) {
            // next(error);
            res.status(500).send({error: err.message});
        }
    }
}
