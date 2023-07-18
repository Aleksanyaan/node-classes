FROM node
COPY package*.json .
WORKDIR /app
RUN npm install

COPY . . 
CMD node app.js