# pull official base image
FROM node:18

USER root

# set working directory
WORKDIR /frontend

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN npm install -g npm@9.3.0
RUN npm install 
#RUN npm install react-scripts@3.4.1 -g


# add `/frontend/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# add app
COPY . ./

EXPOSE 3000

# start app
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true