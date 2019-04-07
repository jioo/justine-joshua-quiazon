FROM node:8
WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

EXPOSE 5000