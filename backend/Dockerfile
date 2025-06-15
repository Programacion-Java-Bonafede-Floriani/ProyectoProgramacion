FROM node:18

RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh

EXPOSE 3000

CMD ["npm", "start"]
