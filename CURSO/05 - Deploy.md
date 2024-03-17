# Deploy Github Pages

Para usar github pages como entorno de despliegue, hay que hacer algunas configuraciones.

## PD

- `npm run build` permite crear una build del proyecto que se usara en el despliegue.

## Pasos

1.  Creamos una build temporal con `npm run build`.
2.  Creamos una propiedad en el package.json que se llama "homepage". Esta es solo contenida en el json principal. Esta propiedad le asignamos la direccion del build. Esta direccion luego se cambiara por la del ambiente del despligue.

```json
{
    ...,
    "homepage": "D:\\BIBLIOTECA\\ESCRITORIO\\Platzi\\Platzi-Curso-ReactJS\\build"
}
```
