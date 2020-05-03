# Local Set Up

## Prerequisites

- Node.js (we use 12.16.1)
- PostgreSQL

## Step by Step Guide

To get a developer environment of the backend you have to have installed [node.js](https://nodejs.org/) and [PostgreSQL](https://www.postgresql.org/). To install PostgreSQL I recommend you to follow this [PostgreSQL Tutorial](https://www.postgresqltutorial.com/install-postgresql/). Then you have to fork this repository 

![Fork this repo](assets/fork-repo.png)

Then clone your own fork of the repo, notice that at the header of your repo says forked from MintbeanHackathons. Copy the **clone or download** link, If you have not configured an ssh key click on use HTTPS and copy the link.

![Clone your repo](assets/clone-your-repo.png)

Open a terminal or cmd and put 

```bash
git clone <your clone or download link>

```
Then navigate to the `MintbeanPlatform/backend` folder by

```bash
cd MintbeanPlatform/backend
```
Now, inside of the backend folder install the node dependencies by typing

```bash
yarn install
```
or
```bash
npm run install
```

Before to continue **be sure** that you have installed PostgreSQL.

### Create postgresql user

Browse on your system and open the SQL shell (psql) or type

```bash
psql -U postgres
```
If you have opened the SQL shell it is going to ask for a Server [localhost], Database [postgres], Port [5432] and Username [postgres]. you can leave this values as default by skipping them just hitting enter, then is going to ask you for the *Password for user postgres* so as you have just installed postgresql on your system you have to remember the password.

Once you put your password and hit enter you are going to have an SQL shell similar to this.

```bash
postgres=#
```

To check the users that you have created you can put

```bash
postgres=#\du
```

To create the mintbean user that we are going to use for our backend just type the following and don't forget to put the semicolon at the end. 

```bash
postgres=#CREATE USER mintbean;
```

Once you have created the mintbean user you can check that it has been created by using the `\du` command.

Now you have to add the role of Create Database to our mintbean user. you can to do that by typing:

```bash
postgres=#ALTER USER mintbean CREATEDB;
```

Again, don't forget the semicolon. lastly you have to create a password to your mintbean user

```bash
postgres=#ALTER USER mintbean WITH PASSWORD 'mintbeanpass';
```

![This is your SQL console after the process](assets/pgsql-console.png)

> Now That you have created a user with Create Database role and a password you are ready to come back to the backend console.

### Create the Database

Now type on the console inside of the backend folder

```bash
yarn sql
```

You will see a list of the available commands to interact with the database, to create the database use

```bash
yarn sequelize db:create
```
or
```bash
yarn sequelize-cli db:create
```
depending on you Operating System.

Now that you have created you database you have to populate it with the corresponding tables and relationships. that is achieved by using the migrate command.

```bash
yarn sequelize db:migrate
```

Then, if you want to have some data on the database to work with, just type

```bash
yarn sequelize db:seed:all
```

Now you are ready to see the backend working, but before of that let's check that we are using the correct username and password.

### Username, Password and Environment Variables

If you open the `backend/config/database.config.js` file you will see the username and password that the backend is going to use to connect to the database, now you will notice that you can change the user name *mintbean* to whatever you want but you have to create that user on your postgresql database as was shown.

In the other hand the password has been defined to an Environment Variable by `process.env.DB_PASSWORD`. To set properly the `DB_PASSWORD` variable you have to create or update the file `backend/.env` to contain the following two lines.

```
NODE_ENV=development
DB_PASSWORD=mintbeanpass
```
As you might suspect this two lines set your environment to be development and provide the password to access the database.

This technique is used to avoid hardcoding database passwords and what is worse to upload database passwords to public repositories.

Once you have follow this steps you might run the following command

```bash
yarn dev
```
And you will see your backend coming to life. now navigate to some of the API routes as [http://localhost:3000/api/v1/developer](http://localhost:3000/api/v1/developer). And you are ready to create the next coolest MintBean Hackathon's feature.