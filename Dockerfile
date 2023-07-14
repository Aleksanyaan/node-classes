FROM node
COPY package*.json .
ENV APP_PORT=3000
WORKDIR /app
RUN npm install


COPY . . 
CMD node app.js