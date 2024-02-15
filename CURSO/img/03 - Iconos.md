# React-Icons

<a href='https://react-icons.github.io/react-icons/'>https://react-icons.github.io/react-icons/</a>

# Iconos personalizados

Se pueden por ejemplo crear iconos en SVG.

Estos nuevos Iconos deben primero estar en la carpeta /src/, para poder acceder a ellos desde react import, si estan fuera saltara un error.

Se puede importar una imagen con el comando:

```jsx
import { ReactComponent as CheckSvg } from "../svg/check.svg";
```

Se importa como un ReactComponent, que automaticamente tomara el formato svg y se le renombra con un nuevo alias "CheckSvg".

Luego para usarlo se usa:

```jsx
<CheckSvg className="Icon-svg Icon-check" fill={color} />
```

## Multiples SVG en un componente

```jsx
// importar el primer svg
import { ReactComponent as CheckSvg } from "../svg/check.svg";
// importar el segunfo svg
import { ReactComponent as DeleteSvg } from "../svg/delete.svg";
// importar los estilos del componente
import "./ToDoIcon.css";

// crear un objeto con los diversos svg y que pueda entregarsele un parametro. Estos retornaran ReactComponent
const iconTypes = {
  check: (color) => <CheckSvg className="Icon-svg Icon-check" fill={color} />,
  delete: (color) => (
    <DeleteSvg className="Icon-svg Icon-delete" fill={color} />
  ),
};

// Funcion del componente
// Recibe el tipo de svg, el color para recolorearlo y una accion
function ToDoIcon({ type, color, onClick }) {
  // retorna el ReactComponent principal
  return (
    <span
      {/*Agrega las clases al span*/}
      className={`Icon-container Icon-container-${type}`}
      {/*Agrega el evento onClick*/}
      onClick={onClick}
    >
      {/*Coloca dentro del span el componente del svg seleccionado*/}
      {iconTypes[type](color)}
    </span>
  );
}

// Exporta el componente principal
export { ToDoIcon };
```
