FROM node:18-alpine



WORKDIR /app/antifraud-service

COPY antifraud-service/package*.json ./
COPY antifraud-service/nest-cli.json ./
COPY antifraud-service/tsconfig.json ./
COPY antifraud-service ./

RUN npm install
RUN npm run build

EXPOSE 3003

CMD ["node", "dist/main"] 