# Forum Express Grading

A simple expense Forum  Grading website built with Node.js and Express

- Email : <root@example.com>
- Password: 12345678

![overall](/public/images/overall.png)

## Features

- Sign in to view user's own restaurant reviews
- View the latest news, users, and popular restaurants
- User Profile, edit user information
- followings, followers functions
- Collection function
- Comment function

## Getting Start

1. Please make sure it is installed [Node.js](https://nodejs.org/en/download/) (skip if already install)

2. Open Terminal and Clone the project

```
git clone https://github.com/DannyHucc/forum-express-grading.git
```

3. Go to the folder where this project is stored

```
cd forum-express-grading
```

4. Install the required dependencies

```
npm install
```

5. Install nodemon (skip if already install)

```
npm i -g nodemon
```

6. Set environment variables in .env file according to .env.exp

```
mkdir .env
```

7. Set `PORT`(number) to start the server

```
PORT=<your port>
```

8. MONGODB_URI: Go to [MongoDB](https://account.mongodb.com/account/login) to create an account and set [MongoDB Atlas](https://account.mongodb.com/account/login) to get `MONGODB_URI` and modify the following parameters `username`、`password`、`database`

```
IMGUR_CLIENT_ID=<your IMGUR CLIENT ID>
IMGUR_CLIENT_SECRET=<your IMGUR CLIENT SECRET>
```

9. Create a database in SQL WorkBench (enter in workBench)

```
create database forum
```

10. Create database tables

```
npx sequelize db:migrate
```

11. Create database seed

```
npx sequelize db:seed:all
```

12. Start the server

```
npm run dev
```

13. Execute successfully if seeing following message

```

Example app listening on port 3000!
Executing (default): SELECT 1+1 AS result
...
Executing (default): SHOW INDEX FROM `Likes` FROM `forum`
yes re-sync done!

```

14. Now you can browse the website on <http://localhost:3000>

15. Test account

>- name: root
>- email: <root@example.com>
>- password: 12345678

>- name: user1
>- email: <user1@example.com>
>- password: 12345678

>- name: user2
>- email: <user2@example.com>
>- password: 12345678

16. Leave server

```

ctrl + c

```

## Built With

- Runtime: node @ v18.16.1
- Framework: express @ 4.17.1
- Database: mysql2 @ 2.3.0
- ORM Suite: sequelize @ 6.6.5
- View Engine: express-handlebars @ 5.3.3
- Check package.json for other dependencies

## Author

DannyHucc 胡晉嘉
