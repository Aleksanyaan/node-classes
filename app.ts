import express, { Application, Request, Response, NextFunction } from "express";
import { DataSource } from "typeorm";
import { UsersEntity } from "./users.entity";


const app: Application = express();
const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "post18288",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize().then(() => console.log("Connected to db succesfully")).catch(err => console.log(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersRepository = AppDataSource.getRepository(UsersEntity);

app.get("/getUsers", async (req: Request, res: Response) => {
  const data = await usersRepository.findOneBy({name: 'Eduard'});
  res.send(data);
});

app.post('/createUser', async(req: Request, res:Response) => {
  const body = req.body;
  const user = usersRepository.create({name: body.name, age: body.age});
  await usersRepository.save(user);
  res.send(user);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});