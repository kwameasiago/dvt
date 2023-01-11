# pull official base image
FROM node:18

# set working directory
WORKDIR /frontend



# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g npm@9.2.0 --silent

# add `/frontend/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# add app
COPY . ./

EXPOSE 3000

# start app
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true
