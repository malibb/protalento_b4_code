// Objetos

const miObjeto0 = {
  "nombre": "Objeto mágico",
  "_id": 101012,
  "activo": true,
  "caracteristicas": [
    'pequeño',
    'color rosa',
  ],
};

const miObjeto1 = {
    "nombre": "Objeto mágico 1",
    "_id": 101011,
    "activo": true,
    "caracteristicas": [
      'pequeño',
      'color rosa',
    ],
  };

const misObjetos = [miObjeto0, miObjeto1, miObjeto0, miObjeto0, miObjeto1];
miObjeto1["caracteristicas"][0] = 'little';
console.log(miObjeto1["caracteristicas"][0]);

for (const objeto of misObjetos) {
    console.log(`Objeto nombre: ${objeto.nombre}`);  
    for (const key in objeto) {
        if (Object.hasOwnProperty.call(objeto, key)) {
            console.log(`clave: ${key} - valor : ${objeto[key]}`);
        }
    } 
}
