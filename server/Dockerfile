# server/Dockerfile
FROM node:18

WORKDIR /app/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7000  

CMD ["npm", "start"]  
