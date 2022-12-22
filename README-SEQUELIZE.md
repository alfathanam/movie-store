##

#### Sequelize Model Generate

```
npx sequelize model:generate --name movies --attributes name:string,release:dateonly,genre:string,image:string

npx sequelize model:generate --name actors --attributes name:string,age:integer,address:string,image:string

npx sequelize model:generate --name movieActor --attributes movieId:integer,actorId:integer

```
