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

Para comunicarse con los componentes se usan los `props`, estos son un objeto que tiene diversas propiedades como por ejemplo `children` u otros valores custom.

### Crear un componente con propiedades

Un componente puede consumir props de la siguiente forma:

```js
// Componente con props como parametro
function TodoCounter(props) {
  return (
    <h1>
      <!-- Usar las propiedades que tiene el props internamente -->
      {props.completados} de {props.totales} completados
    </h1>
  );
}

export { TodoCounter };
```

Tambien se puede hacer desestructuralizando las propiedades:

```js
function TodoCounter({ completados, totales }) {
  return (
    <h1>
      {completados} de {totales} completados
    </h1>
  );
}

export { TodoCounter };
```

### Entregar propiedades a un componente

Un componente se le puede entregar propiedades, igual como los atributos en el HTML, de la siguiente forma:

```xml
<!-- Entregar un valor directamente -->
<TodoItem mensaje="Holaaaaa" />
<!-- Asignar un valor de una variable -->
<TodoItem activo={true} />
<!-- No entregar nada  -->
<TodoItem />
```

Las `{}` permiten insertar codigo JS en los componentes del JSX.

Las propiedades que entregamos como atributos no se presentaran como atributos en el HTML final, a excepcion de los atributos definidos en JSX que hacer referencia a los de HTML, pero que no se escriben igual, como: `class` en HTML y `className` en JSX.

La propiedad children no se coloca directamente, porque se le asigna lo que esta dentro del componente, lo que esta definido entre la etiqueta de inicio y cierre.

```html
<!-- El children seria todo dentro del TodoList que son los TodoItem -->
<TodoList>
  <TodoItem />
  <TodoItem />
  <TodoItem />
</TodoList>
```

# React Fragment

Esto permite no tener que envolver el contenido multiple con una etiqueta, como puede ser un div.

#### Normal

```js
function App() {
  return (
    // DIV para envolver
    <div className="App">
      <TodoCounter completados={1} totales={3} />
      <TodoSearch />

      <TodoList>
        <TodoItem mensaje="Holaaaaa" />
        <TodoItem activo={true} />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}
```

#### React Fragment

```js
import React from "react";

function App() {
  return (
    // React Fragment para envolver
    <React.Fragment>
      <TodoCounter completados={1} totales={3} />
      <TodoSearch />

      <TodoList>
        <TodoItem mensaje="Holaaaaa" />
        <TodoItem activo={true} />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}
```

o se puede cambiar `<React.Fragment> ... </React.Fragment>` por `<> ... </>` y React lo traducira de la misma forma.

# Renderizar con Arrays

Para renderizar varios elementos en base a un arreglo, esto se hace renderizando arrays:

```js

// Lista con los elementos
const defaultTodos = [
  { mensaje: "Comprar el pan", completado: false },
  { mensaje: "Pasear al perro", completado: true },
  { mensaje: "Cocinar", completado: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completados={1} totales={3} />
      <TodoSearch />

      <TodoList>
        <!-- Hacer un map con el arreglo, generando los elementos en el retorno -->
        {defaultTodos.map((todo, id) => (
          <TodoItem
            /* Reparar el error de key --> */
            key={id}
            mensaje={todo.mensaje}
            completado={todo.completado}
          />
        ))}
        <!-- Agregar una lista de XML -->
        {[<TodoItem></TodoItem>, <TodoItem></TodoItem>]}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}
```

PD Error: Puede saltar el error en la consola del navegador de que le falta una propiedad `key` para distinguir los elementos con un elemento identificador distinto. Pero en versiones recientes no parece ser obligatorio.

# Agregar Estilos CSS

## Estilos en linea

No son los mismos estilos en linea que los HTML. Porque hay que agregar mediante variables los estilo. Esta variable tiene que ser un objeto en `camelCase`.

```js
// Estilos
const estilos = {
  //backgroundColor: "red",
  fontSize: "24px",
  textAlign: "center",
  margin: 0,
  padding: "48px",
};

function TodoCounter({ completados, totales }) {
  return (
    // Agregar los estilos
    <h1 style={estilos}>
      {completados} de {totales} completados
    </h1>
  );
}
```

O directamente agregarlo en la linea:

```html
<h1 style={{ backgroundColor: "red" }}>
```

## Hojas de estilo

Archivos `.css` que podemos importar a los componentes.

```css
h1 {
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;
}
```

Para agregarlo, solo se requiere importalo en el JSX:

```js
import "./TodoCounter.css";
```
