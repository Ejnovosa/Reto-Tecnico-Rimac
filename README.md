# reto-tecnico
Reto con aws, serverless, node js, mysql, SWAPI
# Requisitos mínimos 

Documentación por puntos 

1 Primero npm install serverless 
2 Tener una instancia de mysql, crear la base de datos y la tabla contenidog en scripts.sql
3 Ir a la ubicación del proyecto donde se ha creado para luego lanzar el comando: npm install , dependencia mysql2 y axios
4 Dentro del proyecto lanzar sls offline para levantar la aplicacion de manera local
5 lanzar sls deploy para desplegar la aplicación en la nube
6 Para ejecutar las pruebas unitarias, lanzar npm run test


# Consumir las apis 
1 Ingresar a postman, y crear  nueva collecion
2 Agregar pedido (GET, POST (para el caso del proyecto))
3 Copiar el enlace que muestra al lanzar sls offline (Dependiendo el caso que requiera)
4 Para el pedido GET: Obtiene Usuario , no es necesario llenar ningún valor, sólo dará click en SEND, y obtendrá la lista de usuarios.
consumir los endpoints 

# Pruebas Unitarias
1 Para ejecutar las pruebas unitarias se debe usar el comando: npm run test

