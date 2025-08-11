# Yape Code Challenge :rocket:

<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Postgresql_elephant.svg" width="50" alt="PostgreSQL" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Kafka_logo.svg" width="50" alt="Kafka" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/GraphQL_Logo.svg" width="50" alt="GraphQL" />
  <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="50" alt="Node.js" />
</p>

<p align="center">Un repositorio que implementa una arquitectura de microservicios utilizando **Node.js**, **NestJS**, **PostgreSQL**, **Kafka** y **GraphQL** para la gestión de transacciones y detección de fraudes.</p>

---

## Descripción

Este repositorio está diseñado como una solución escalable y robusta para gestionar transacciones financieras, validaciones de fraude y recuperación de información. A través de una arquitectura de microservicios, el sistema centraliza la gestión de transacciones y utiliza un **API Gateway** para la comunicación con los clientes, mientras que los microservicios de **Transaction Service** y **Anti-Fraud Service** gestionan la lógica de negocio.

---

## Tecnologías Usadas

- **Node.js**: Plataforma para construir aplicaciones escalables y de alto rendimiento.
- **NestJS**: Framework de Node.js para crear aplicaciones backend de forma eficiente y escalable.
- **PostgreSQL**: Base de datos relacional utilizada para almacenar información de transacciones.
- **Kafka**: Sistema de mensajería utilizado para la comunicación entre microservicios.
- **GraphQL**: Lenguaje de consulta para APIs que facilita la recuperación de datos.
  
---

## Estructura del Proyecto

```plaintext
app-nodejs-codechallenge/
├── docker-compose.yml 
├── .env                        
├── README.md                   
│
├── transaction-service/        
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── ... (estructura completa)
│
├── antifraud-service/  
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── ... (estructura completa )
│
├── api-gateway/                
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── ... (estructura completa )
```

---

## Variables de Entorno

Asegúrate de configurar las siguientes variables en un archivo `.env` para que los servicios funcionen correctamente:

### API Gateway

- `API_GATEWAY_PORT`: Puerto donde corre el API Gateway (por defecto: `3001`).
- `TRANSACTION_SERVICE_URL`: URL del microservicio de transacciones (por defecto: `http://transaction-service:3002`).
- `KAFKA_BROKER`: Dirección del broker de Kafka (por defecto: `localhost:9092`).

### Transaction Service

- `TRANSACTION_SERVICE_PORT`: Puerto donde corre el microservicio de transacciones (por defecto: `3002`).
- `DATABASE_URL`: URL de la base de datos PostgreSQL (por defecto: `postgresql://postgres:postgres@postgres:5432/postgres`).
- `KAFKA_BROKER`: Dirección del broker de Kafka (por defecto: `localhost:9092`).
- `TIME_ZONE`: Zona horaria (por defecto: `America/Lima`).

### Anti-Fraud Service

- `API_GATEWAY_PORT`: Puerto donde corre el API Gateway (por defecto: `3001`).
- `TRANSACTION_SERVICE_URL`: URL del microservicio de transacciones (por defecto: `http://transaction-service:3002`).
- `KAFKA_BROKER`: Dirección del broker de Kafka (por defecto: `localhost:9092`).
- `ANTI_FRAUD_AMOUNT_LIMIT`: Límite de monto para las transacciones (por defecto: `1000`).

---

## Instalación

### Requisitos previos

Asegúrate de tener Docker y Docker Compose instalados en tu máquina. Luego, para levantar todos los servicios necesarios, ejecuta el siguiente comando:

```sh
docker compose up --build -d
```

Esto iniciará todos los servicios en contenedores Docker, incluyendo:

- **PostgreSQL**: Para almacenar las transacciones.
- **Kafka**: Para la comunicación entre microservicios.
- **Zookeeper**: Para gestionar Kafka.
- **API Gateway**: Servicio para centralizar todas las solicitudes.
- **Transaction Service**: Microservicio para gestionar las transacciones.
- **Anti-Fraud Service**: Microservicio para validar fraudes en las transacciones.

---

## Ejecución de los Servicios

Una vez que los servicios estén corriendo, podrás acceder a ellos a través de los siguientes puertos:

- **API Gateway**: `http://localhost:3001`
- **Transaction Service**: `http://localhost:3002`
- **Anti-Fraud Service**: `http://localhost:3003`
- **PostgreSQL**: `localhost:5432`
- **Kafka**: `localhost:9092`

---

## Endpoints

### 1. **Obten la lista de tipo de transferencia

El API Grateway expone un endpoint para la obtencion del listado de tipo de transferencia, aquí se podrá identificar el transferId para la creacion de la transaccion.  Este se comunica con el microservicio de transacciones para recuperar el dato.

**API**

```
GET http://localhost:3001/transfer-types
```

**Response**:

```json
[
    {
        "id": "1",
        "name": "VISA",
        "description": "Visa credit card",
        "createdAt": "2025-08-10 21:03:21"
    },
    {
        "id": "2",
        "name": "MASTERCARD",
        "description": "Mastercard credit card",
        "createdAt": "2025-08-10 21:03:21"
    },
    {
        "id": "3",
        "name": "AMERICAN_EXPRESS",
        "description": "American Express credit card",
        "createdAt": "2025-08-10 21:03:21"
    },
    {
        "id": "4",
        "name": "DISCOVER",
        "description": "Discover credit card",
        "createdAt": "2025-08-10 21:03:21"
    }
]]
```

### 2. **Crear una Transacción**

El API Gateway expone un endpoint para crear una transacción. Este se comunica con el microservicio de transacciones y luego con el servicio de detección de fraudes.

**API**:

```
POST http://localhost:3001/transactions
```

**Request Body**:

```json
{
  "accountExternalIdDebit": "550e8400-e29b-41d4-a716-446655440000",
  "accountExternalIdCredit": "550e8400-e29b-41d4-a716-446655440001",
  "transferTypeId": 1,
  "value": 1090.5
}
```

**Flujo del proceso**:

1. El **API Gateway** recibe la solicitud y la envía al microservicio `transaction-service`.
2. `transaction-service` procesa la transacción, actualiza el estado de la base de datos y publica un evento en Kafka (`transaction.created`).
3. El microservicio `anti-fraud-service` consume el evento, valida la transacción y si es válida, la aprueba. Si no, la marca como rechazada.
4. `transaction-service` recibe el evento actualizado con el estado de la transacción y la actualiza en la base de datos.

---

### 3. **Recuperar los Datos de una Transacción**

Una vez que una transacción haya sido creada, puedes recuperar la información relacionada con la transacción usando los siguientes métodos:

#### **API**

```
GET http://localhost:3001/transactions/:id
```

**Ejemplo de ID**: `b5994342-84c1-4825-aa0f-de050e061751`

---

#### **GraphQL**

Realiza una consulta a través de GraphQL:

```
POST http://localhost:3002/graphql
```

**Query**:

```graphql
query GetTransaction($id: String!) {
  getTransaction(id: $id) {
    transactionExternalId
    transactionType {
      name
    }
    transactionStatus {
      name
    }
    value
    createdAt
  }
}
```

**Variables**:

```json
{
  "id": "dcc46dc1-1cde-41ef-9a86-2aef49824f85"
}
```

---

## Despliegue

Para desplegar las aplicaciones, puedes usar Docker y el archivo `docker-compose.yml` incluido en este repositorio:

```sh
docker compose up --build -d
```

Esto levantará los servicios necesarios, incluyendo la base de datos, Kafka y los microservicios.

---

## Recursos

- [Documentación de NestJS](https://docs.nestjs.com/)
- [Canal de Discord de NestJS](https://discord.com/invite/nestjs)
- [Cursos oficiales de NestJS](https://nestjs.com/courses/)
