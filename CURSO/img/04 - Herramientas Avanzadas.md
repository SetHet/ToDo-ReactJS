# Local Storage

Permite tener persistencia de datos en el lado del cliente, aun cuando se cierre el navegador. LocalStorage solo guarda strings, entonces hay que hacer parseo para poder leer y escribir.

## Consultar datos

```js
localStorage.getItem("key");
```

### Json

```js
let json = JSON.parse(localStorage.getItem("key"));
```

## Escribir datos

```js
localStorage.setItem("key", datos);
```

### Json

```js
let _string = JSON.stringify(_json)
localStorage.setItem("key", _string));
```

## Remover datos

```js
localStorage.removeItem("key");
```
