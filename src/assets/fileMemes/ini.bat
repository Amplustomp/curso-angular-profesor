rem  recordar instalar json-server
rem npm -g install json-server
json-server --watch db.json

rem enviar por postman body,raw, alfinal seleccionar json
rem duplicate { "id": 2, "email": "harrys@harrys.cl",    "username": "harrys"  }
rem { "id": 12, "email": "harrys@harrys.cl",    "username": "harrys"  }
rem http://localhost:3000/usuarios/12