# Vehicle-Asset Services

Supplementary web services for vehicle asset information validation to be used in vehicle-related asset oracles

## Prerequisites

* Node.JS + NPM

or

* Docker and Docler Compose

## Running

### Using Node.JS

```bash
npm install
npm start
```
Open browser at ```http://localhost:3000```

### Using Docker Compose

Start service

```bash
docker-compose up -d
```

Open browser at ```http://localhost:7056```

Stop service

```bash
docker-compose down
```

## VIN number validator

Request

```
GET http://localhost:7056/api/v1/vin/1GNEK13ZX3R298984
```

Response

```
{
    "vin": "1GNEK13ZX3R298984",
    "ok": true,
    "verified": true,
    "manufacturer": "General Motors USA",
    "year": 2003
}
```