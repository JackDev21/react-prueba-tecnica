
---

# 🐱 Prueba Técnica: React y API de Gatos

## Objetivo

1. **Obtener un hecho aleatorio de gatos** desde la API [catfact.ninja](https://catfact.ninja/fact).
2. **Extraer la primera palabra** del hecho.
3. **Mostrar una imagen de un gato** con la primera palabra superpuesta, utilizando [cataas.com](https://cataas.com/cat/says/hello).

---

## Pasos de Instalación y Configuración

### 1. Instalación de Vite

Instalamos **Vite** para crear el proyecto desde cero sin usar plantillas.

```bash
npm create vite@latest
```

Durante la instalación:

- **Selecciona Vanilla** como opción de template.
- **Elige React** cuando te pregunte por el framework.

---

### 2. Instalación del plugin de React para Vite

Instalamos el plugin de React necesario para que Vite soporte React correctamente:

```bash
npm install @vitejs/plugin-react -E
```

---

### 3. Instalación de React y React-DOM

Instalamos **React** y **React-DOM**, los paquetes necesarios para crear la aplicación React:

```bash
npm install react react-dom -E
```

---

### 4. Configuración de Vite

Creamos el archivo `vite.config.js` en la raíz del proyecto y añadimos la configuración para React:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

---

### 5. Punto de entrada de la aplicación

En el archivo `index.html`, cargamos nuestro archivo de entrada (`main.js`). Cambia el contenido del archivo `main.js` por lo siguiente:

```js
// main.jsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world!</h1>);
```

⚠️ **Nota:** Si ves un error que indica que el archivo necesita extensión `.jsx`, haz lo siguiente:

- Renombra **main.js** a **main.jsx**.
- Actualiza el script en `index.html` para que apunte a `main.jsx`.

---

### 6. Ejecutar el proyecto

Finalmente, para ver tu proyecto en acción, ejecuta el siguiente comando:

```bash
npm run dev
```

---

### 7. Instalación de ESLint

Para mantener el código limpio y estandarizado, instalamos **ESLint** utilizando el estándar de JavaScript:

```bash
npm install standard -D
```

Luego, agregamos la siguiente configuración al archivo `package.json`:

```json
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
}
```

---

### 8. Creación de la App

Creamos una carpeta `src` en la raíz del proyecto y añadimos el archivo `App.jsx` con el siguiente contenido:

```jsx
// src/App.jsx
export function App() {
  return (
    <>
      <h1>App Gatitos</h1>
    </>
  );
}
```

---

### 9. Importar la App en `main.jsx`

Modificamos el archivo `main.jsx` para importar y renderizar el componente `App`:

```jsx
// main.jsx
import { createRoot } from 'react-dom/client';
import { App } from './src/App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);  // Aquí renderizamos el componente App
```

---

## 📚 APIs Utilizadas

- **Hecho aleatorio de gatos:** [https://catfact.ninja/fact](https://catfact.ninja/fact)
- **Imagen de gato con texto:** [https://cataas.com/cat/says/hello](https://cataas.com/cat/says/hello)

---