# INSTALLATION INSTRUCTION

## PREREQUISITE 
Make sure the following packages are installed 

- Docker
- Docker-composE
- Git

git clone this repository then follow the instructions listed below

## AUTH SERVICE SET UP

1. cd into auth 
2. create auth.env file
3. Add the following env variables
    1. PORT
    2. NODE_ENV
    3. DEVELOPMENT_URI
    4. SECRET_KEY
4. Run docker-compose pull to pull the images
5. Run docker-compose build to build the images
6. Run docker-compose up -d to run auth in detached mode
7. Bash into the new  auth container using docker-compose run auth bash
8. Run migrations with npx sequelize-cli db:migrate
9. Exit from bash using exit

## FRONTEND SERVICE SET UP

1. cd into frontend 
2. create frontend.env file
3. Add the following env variables
    1. REACT_APP_DEEZER_URL
    2. REACT_APP_AUTH_URL
4. Run docker-compose pull to pull the images
5. Run docker-compose build to build the images
6. Run docker-compose up -d to run auth in detached mode

## CORS
In the event you get cors when trying to fetch from the api visit this [link](https://cors-anywhere.herokuapp.com/ ) and request for temporary access.

## Deployment link
[Deployment link](http://ec2-3-134-83-24.us-east-2.compute.amazonaws.com/)
