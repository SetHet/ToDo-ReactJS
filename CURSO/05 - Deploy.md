# Deploy Github Pages

Para usar github pages como entorno de despliegue, hay que hacer algunas configuraciones.

## PD

- `npm run build` permite crear una build del proyecto que se usara en el despliegue.
- El build se guarda en la rama `gh-pages`

## Pasos

1.  Creamos una build temporal con `npm run build`.
2.  Creamos una propiedad en el package.json que se llama "homepage". Esta es solo contenida en el json principal. Esta propiedad le asignamos la direccion del build. Esta direccion luego se cambiara por la del ambiente del despligue.

```json
{
    ...,
    "homepage": "D:\\BIBLIOTECA\\ESCRITORIO\\Platzi\\Platzi-Curso-ReactJS\\build"
}
```

3. Cambiar la direccion por "https://sethet.github.io/ToDo-ReactJS"

4. Instalar la herramienta: `npm i --save-dev gh-pages`

5. Crear un nuevo script para el deploy y su pre script.

```json
{
  "scripts": {
    ...,
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

6.  Ejecutar `npm run deploy`. Esto tambien creara la rama que usara github pages.
7.  Vamos a https://github.com/SetHet/ToDo-ReactJS/settings/pages Aqui vamos a configurar el github pages con la rama gh-pages y de fuente /root. Guardamos y esperamos que se inicio de la web.
