# API Gateway

El **API Gateway** es la puerta de entrada central para todas las solicitudes de clientes, encaminando las solicitudes a los microservicios adecuados y manejando las respuestas.

## Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **NestJS**: Framework para construir aplicaciones backend.
- **GraphQL**: Lenguaje de consulta para la interacción con los microservicios.

## Variables de Entorno
- `TRANSACTION_SERVICE_PORT=3002`
- `KAFKA_BROKER=localhost:9092`
- `DATABASE_URL=postgresql://postgres:postgres@postgres:5432/postgres`
- `TIME_ZONE="America/Lima"`

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install
```

## Iniciar el Servicio

Este servicio está configurado para ejecutarse con Docker. Usa el siguiente comando para levantar el servicio:

```bash
npm run start:dev