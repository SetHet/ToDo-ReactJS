# Partes del repositorio

- `Readme.md`: Mensaje del desarrollador.
- `package.json`: Configuracion de node, con las dependencias, scripts y otras configuraciones.
- `.gitignore`: Archivos que ignorara el Git.
- `public/`: Contiene lo que esta abierto a la web, con <b>app.com/robot.txt</b> se puede acceder al archivo <b>robot.txt</b>.
- `src/`: Archivos que se utilizaran para la compilacion de la aplicacion. Son los que usara WebPack.

## package.json

### En los scripts

- `start` levanta el servidor en modo desarrollo con hot reload.
- `build` genera una version del proyecto para desplegar en produccion.
- `eject` ...

### Eslint

Para tener un codigo más limpio.

### Browsers list

Ayuda a Babel para hacer la transpilacion del codigo.

## Public

### index.html

Tiene el HTML base de la aplicacion.

En el Body: La parte de `<noscript>...` solo se mostrara si no funciona javascript en el navegador. Y la parte de `<div id="root"></div>` es donde se insertara la aplicacion.

En el Head: Tiene el manifest para progressive web apps y offline, archivos meta, idioma, etc.

## Src

### index.js

Conecta la aplicacion con el html basico.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // asigna el css
import App from "./App"; // aplicacion

// Crea en el dominio el root y busca el root del HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza la APP
root.render(<App />);
```

Inserta en esta posicion la app:

```html
<div id="root"></div>
```

### App.js

Es el componente base que se inserto en el root.

```js
import logo from "./platzi.webp"; // importa el logo
import "./App.css"; // Agrega los estilos

// Componente App
function App() {
  return ( // Retornar el componente
    <div className="App">
      <header className="App-header">
        <!-- inserta el logo -->
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; // Exportar el componente
```

# Componentes

Un componente en react es una funcion que retorna un XML. Estos componentes suelen estar escritos en Pascal Case. Esto funciona porque los archivos JS son JSX (JS Xml) que ayuda a crear HTML más facil en el JS. Por ejemplo, en lugar de usar `class="container"` se usa en JSX `className="container"` porque luego se traducira a HTML.

Los componentes estan compuesto por elementos de react, los que estan en minusculas, como pueden ser `div` o `p` que no son elementos de HTML sino de react que se traduciran a HTML.

### Crear un nuevo componente

```js
// Nuevo componente, props es opcional
function TodoItem(props) {
  return (
    <li>
      <span>{props.activo ? "V" : "F"}</span>
      <p>{props.mensaje ?? "default message"}</p>
      <span>X</span>
    </li>
  );
}
```

```xml
<ul>
    <!-- Usar el componente -->
    <TodoItem />
    <!-- Usar otra vez el componente -->
    <TodoItem />
    <!-- Usar el componente con props -->
    <TodoItem mensaje="hola" activo={true} />
</ul>
```
