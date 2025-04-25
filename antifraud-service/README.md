# Anti-Fraud Service

El **Anti-Fraud Service** valida las transacciones en función de un límite de monto, evaluando si las transacciones deben ser aprobadas o rechazadas.

## Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **NestJS**: Framework para construir aplicaciones backend.
- **Kafka**: Sistema de mensajería para la comunicación entre microservicios.

## Variables de Entorno
- `API_GATEWAY_PORT=3001`
- `TRANSACTION_SERVICE_URL=http://transaction-service:3002`
- `KAFKA_BROKER=localhost:9092`

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install
```

## Iniciar el Servicio

Este servicio está configurado para ejecutarse con Docker. Usa el siguiente comando para levantar el servicio:

```bash
npm run start:dev