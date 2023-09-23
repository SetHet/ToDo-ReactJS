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

## Crear un nuevo componente

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

## Tipos de componentes

### Tipo de cierre

```html
<!-- Con contenido interno, con etiqueta de apertura y cierre -->
<TodoList>
  <TodoItem mensaje="Holaaaaa" />
  <!-- Sin contenido interno, Auto cierre -->
  <TodoItem activo="{true}" />
  <TodoItem />
</TodoList>
```

## Componente con contenido interno

Para poder colocar componentes dentro de un componente, en el componente padre hay que agregar el `props.childen`, para que sepa el componente donde tiene que desplegarse los componentes hijos.

```js
function TodoList(props) {
  return <ul>{props.children}</ul>;
}
```

```html
<!-- Padre que tiene un props.children -->
<TodoList>
  <!-- El contendio de children que son todo lo que contiene -->
  <TodoItem />
  <TodoItem />
  <TodoItem />
</TodoList>
```

#### Separar por archivos los componentes

En la carpeta src se puede crear una nueva carpeta llamada `src/components/` donde se pueden agregar nuevos componentes.

Para crear un nuevo componente:

1. Crear en el lugar elegido un archivo con el nombre del componente en `Pascal Case`, por ejemplo `src/components/TodoCounter.js`.

2. Crearmos el componente en el archivo:

   ```js
   function TodoCounter(props) {
     return (
       <h1>
         {props.completados} de {props.totales} completados
       </h1>
     );
   }
   ```

3. Exportamos el componente:

   ```js
   // El default hace que al importar no importe el nombre que le demos
   export default TodoCounter;

   // Export nombrados que obligan a saber que se importo con el nombre correspondiente
   export { TodoCounter };
   ```

4. Importamos el componente en donde queramos usarlo:

   ```js
   // importar con desestructarizacion
   import { TodoCounter } from "./components/TodoCounter";

   // importar con default
   import TodoCountersito from "./components/TodoCounter";

   function App() {
      return (
        <div className="App">
          ...
          <!-- Usar -->
          <TodoCounter completados={1} totales={3} />
          ...
      );
   }
   ```

## Comentarios en el XML

```html
{/* <CreateTodoButton /> */}
```

## Comunicacion de componentes con props
