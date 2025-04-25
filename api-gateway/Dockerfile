FROM node:18-alpine

WORKDIR /app/api-gateway

COPY api-gateway/package*.json ./
COPY api-gateway/nest-cli.json ./
COPY api-gateway/tsconfig.json ./
COPY api-gateway ./

RUN npm install
RUN npm run build

EXPOSE 3001

CMD ["node", "dist/main"]