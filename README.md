# Challenge XII Backend

## Stack

<div align="left">
<img src="https://img.shields.io/badge/NestJS-black?logo=nestjs&logoColor=red" />
<img src="https://img.shields.io/badge/MySQL-black?logo=mysql" />
<img src="https://img.shields.io/badge/TypeORM-black?logo=type" />
<img src="https://img.shields.io/badge/Eslint-purple?logo=eslint&color=%234B32C3"/>
<img src="https://img.shields.io/badge/Docker-blue?logo=docker&logoColor=white&color=%232496ED"/>
<img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white&color=%233178C6"/>
</div>

## Author:

Emmanuel Barros Moraes

## Description:

This is the back-end part of the project "Challenge XII" from Compass UOL Internship. It's the 3rd and last challenge which integrates back-end with front-end as part of the "Full Stack" role. Here you will find the routes of the API.

## First Step - Creating your .env file

Remember to change the port 80 to another on the docker-compose.yml in order to run the project locally, I sugest the port 3000

<div style="padding-left: 1em;"><img src="https://img.shields.io/badge/Env-blue?logo=.env&logoColor=black&color=%23ECD53F"/></div>

```bash
PORT=Your port here
DB_HOST= Your db host name
DB_PORT= Your db port
DB_USERNAME= Your db username
DB_PASSWORD= Your db password
DB_DATABASE= Your db
```

To run on my database:

```bash
PORT=3000
DB_HOST=database-1.cbuqmyg8wxao.us-east-1.rds.amazonaws.com
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD="#ChallengeAWS"
DB_DATABASE=myRIDE
```

## Second Step - Building your docker compose

<div style="padding-left: 1em;" >
<img src="https://img.shields.io/badge/Docker-blue?logo=docker&logoColor=white&color=%232496ED"/>
</div>

```bash
docker-compose build
```

## Third Step - Starting the docker compose

If you don't want to run it on background just remove the "-d"

<div style="padding-left: 1em;" >
<img src="https://img.shields.io/badge/Docker-blue?logo=docker&logoColor=white&color=%232496ED"/>
</div>

```bash
docker-compose up -d
```

## Testing on Postman/Insomnia:

## Route /posts

| Route                        | HTTP(method) | Description        |
| ---------------------------- | ------------ | ------------------ |
| http://localhost:3000/posts/ | GET          | Retrieve all posts |
| http://localhost:3000/posts/ | POST         | Create Post        |

## Route /drivers

| Route                          | HTTP(method) | Description          |
| ------------------------------ | ------------ | -------------------- |
| http://localhost:3000/drivers/ | GET          | Retrieve all drivers |
| http://localhost:3000/drivers/ | POST         | Create Driver        |
