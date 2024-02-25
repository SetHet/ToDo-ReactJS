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

# Custom Hooks

Es una forma de abstraer seccion de codigo en una estructura custom o como los estados de react, para generar un objeto con funcionalidades abstraidas al resto del sistema.

```js
// importamos lo que queramos
import { UpperCaseFirstWord, AddColor } from ".......";

// creamos una funcion que normalmente inicia con 'use.....'
export function useNombre(initNombre) {
  // creamos un estado para guardar informacion temporal
  [nombre, setNombre] = React.useState(initNombre);

  // funcion interna
  function ParseNombre(nombre) {
    return UpperCaseFirstWord(nombre);
  }

  // funcion de actualizacion que daremos
  function ActualizarNombre(nuevoNombre) {
    setNombre(ParseNombre(nuevoNombre));
  }

  // funcion de mostrar nombre editado
  function ColorNombre(color) {
    return AddColor(nombre);
  }

  // retornar el hook, como State pero con más cosas
  return [nombre, ActualizarNombre, ColorNombre];
}
```

```js
// importamos el hook
import { useNombre } from ".....";

// invocamos el hook
const [nombre, setNombre, nombreColor] = useNombre("arturito");

// usamos el hook
console.log(nombre);
console.log(nombreColor("green"));
setNombre("citrico");
```