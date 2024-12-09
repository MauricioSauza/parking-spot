# Uso de sockets y operaciones REST

## Uso de operaciones REST

Para poder hacer una petición POST al servidor primero apuntemos al puerto `3000` del `localhost`

URL:
`http://localhost:3000/api/send-data`

Dentro del controlador llamado `Parking.spot.controller` encontraremos la ruta especifica a la que tenemos que llamar `api/send-data`

cuando hagamos una petición `POST` al servidor tiene que tener el formato adecuado de otra forma tendremos un error

## Formato

```
{
    "id": "abc", // string
    "spot": 23, // number
    "floor": 1, // number
    "isTaken": true // boolean
}   
```
## Uso de websockets

Dentro del controlador llamado `Parking.spot.controller` mediante inyección de dependencias importamos la instancia de `Parking.spot.gateway.service` que contiene todas las operaciones de sockets

Lo unico que tenemos que hacer para empezar a escuchar mensajes dentro de nuestro frontend o app mobile es escuchar con una libreria de sockets al puerto `http://localhost:3000`

Y con uns instancia de socket io escuchar al mensaje `new-data` como se especifica en `Parking.spot.gateway.service`

