FROM node:21.1.0

WORKDIR /var/www/html

COPY package.json .

RUN npm install

COPY . .

EXPOSE 14777

CMD ["npm", "start"]
