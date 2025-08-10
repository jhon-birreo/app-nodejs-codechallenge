FROM node:alpine3.20

WORKDIR /app/transaction-service

COPY transaction-service/package*.json ./
COPY transaction-service/nest-cli.json ./
COPY transaction-service/tsconfig.json ./
COPY transaction-service ./

RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3002

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]