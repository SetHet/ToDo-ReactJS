# Eventos

Se puede usar en los paramentros de un elemento, eventos escritos en camel case. Estos eventos se les entrega una funcion que se llamara cuando el evento ocurra.

## Algunos eventos

### onClick

Al hacer click sobre el elemento se llamara a la funcion.

```html
<button onClick={()=>console.log('click')}>
</button>
```

### onChange

Al hacer un cambio en el elemento se llamara a la funcion.

```html
<input onChange={(event)=>{ setStateX(event.target.value) }}>
```

## Estado

En react, para guardar informacion y actualizar la interfaz hay que usar el sistema de estados de React.

Primero hay que agregar los estados importando la libreria con:

```jsx
import React from "react";
```

Luego para crear un nuevo estado donde guardar informacion se usa:

```jsx
const [stateName, setStateName] = React.useState(0);
```

`React.useState()` es una funcion que entrega un nuevo estado en forma de array que contiene el valor del estado y la funcion de modificacion del estado. Este puede colocar un valor por defecto del estado en el primer parametro.

PD: Tambien se puede usar variables, pero no actualizan el DOM.

Para leer el estado solo hay que usar:

```jsx
console.log(stateName);
```

Para modificar el valor hay que usar:

```jsx
setStateName(nuevovalor);
```

### Estados derivados

## Ver estados de componentes padres

Estos se envian a traves de props

## Ver estados de componentes hijos
