# Transaction Service

El **Transaction Service** es responsable de gestionar las transacciones entre cuentas. Este microservicio recibe las solicitudes de transacción y las procesa, además de interactuar con la base de datos para almacenar la información de las transacciones.

## Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **NestJS**: Framework para construir aplicaciones backend.
- **PostgreSQL**: Base de datos relacional para almacenar transacciones.
- **Kafka**: Sistema de mensajería para la comunicación entre microservicios.

## Variables de Entorno
- `TRANSACTION_SERVICE_PORT=3002`
- `KAFKA_BROKER=localhost:9092`
- `ANTI_FRAUD_AMOUNT_LIMIT=1000`
- `DATABASE_URL=postgresql://postgres:postgres@postgres:5432/postgres`

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install
```

## Iniciar el Servicio

Este servicio está configurado para ejecutarse con Docker. Usa el siguiente comando para levantar el servicio:

```bash
npm run start:dev
