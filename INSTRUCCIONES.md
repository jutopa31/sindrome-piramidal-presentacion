# Instrucciones de Uso y Personalización

## Cómo ejecutar el proyecto

### 1. Primera vez

```bash
cd sindrome-piramidal-react
npm install
npm run dev
```

Luego abre tu navegador en: `http://localhost:5173`

### 2. Ejecuciones posteriores

```bash
cd sindrome-piramidal-react
npm run dev
```

## Cómo editar el contenido de los slides

Todo el contenido está en el archivo `src/App.jsx`. Busca el array `slides` al inicio del componente.

### Estructura de un slide

Cada slide tiene la siguiente estructura:

```javascript
{
  id: 1,                    // Número único del slide
  title: 'Título',          // Título principal
  subtitle: 'Subtítulo',    // Subtítulo (opcional)
  content: 'Texto...',      // Contenido de párrafo (opcional)
  bullets: [                // Lista de puntos (opcional)
    'Punto 1',
    'Punto 2'
  ],
  image: '/images/image1.jpeg',  // Ruta de la imagen (opcional)
  layout: 'content-image'   // Tipo de diseño
}
```

### Tipos de layout disponibles

1. **'cover'**: Slide de portada con imagen de fondo
   - Usa: title, subtitle, content, image

2. **'title-only'**: Solo muestra el título grande
   - Usa: title

3. **'split'**: Contenido a la izquierda, imagen a la derecha
   - Usa: title, content, bullets, image

4. **'content-image'**: Título arriba, contenido e imagen divididos
   - Usa: title, content, bullets, image

5. **'center'**: Todo centrado
   - Usa: title, content, bullets

### Ejemplo de edición

Si quieres cambiar el contenido del slide 4:

```javascript
{
  id: 4,
  title: 'Nuevo Título',
  content: 'Nuevo contenido del slide...',
  bullets: [
    'Nuevo punto 1',
    'Nuevo punto 2',
    'Nuevo punto 3'
  ],
  image: '/images/image3.png',
  layout: 'content-image'
}
```

## Cómo agregar o eliminar slides

### Agregar un slide

Simplemente agrega un nuevo objeto al array `slides`:

```javascript
{
  id: 23,
  title: 'Slide adicional',
  content: 'Contenido adicional',
  layout: 'center'
}
```

### Eliminar un slide

Elimina el objeto correspondiente del array `slides`.

## Cómo cambiar imágenes

1. Coloca tu nueva imagen en `public/images/`
2. En el slide, actualiza la ruta:
   ```javascript
   image: '/images/mi-nueva-imagen.png'
   ```

## Cómo cambiar colores

En `src/App.jsx`, busca las clases de Tailwind CSS:
- `text-blue-700`: Color de texto azul
- `bg-blue-600`: Color de fondo azul
- Puedes cambiar `blue` por: `red`, `green`, `purple`, `indigo`, etc.

Ejemplo:
```javascript
className="text-purple-700"  // Cambia azul a morado
```

## Cómo ajustar tamaños de texto

Busca clases como:
- `text-xl`: Texto mediano
- `text-2xl`: Texto grande
- `text-4xl`: Texto muy grande
- `text-6xl`: Texto extra grande

## Build para producción

Cuando estés listo para publicar:

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`.

Puedes subir esa carpeta a servicios como:
- Vercel
- Netlify
- GitHub Pages

## Solución de problemas

### Las imágenes no se ven

1. Verifica que las imágenes estén en `public/images/`
2. Verifica que la ruta en el slide sea correcta: `/images/nombre.png`
3. Reinicia el servidor de desarrollo (`npm run dev`)

### Error al instalar dependencias

Intenta:
```bash
rm -rf node_modules package-lock.json
npm install
```

### El proyecto no arranca

1. Verifica que estés en la carpeta correcta: `cd sindrome-piramidal-react`
2. Asegúrate de tener Node.js instalado: `node --version`
3. Reinstala dependencias: `npm install`

## Atajos de teclado durante la presentación

- **→** o **Espacio**: Siguiente slide
- **←**: Slide anterior
- **Home**: Primer slide
- **End**: Último slide

## Personalización avanzada

### Cambiar velocidad de animaciones

En `src/App.jsx`, busca:
```javascript
transition={{ duration: 0.5 }}
```

Cambia `0.5` por:
- `0.3`: Más rápido
- `1.0`: Más lento

### Cambiar efecto de transición

Cambia:
```javascript
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -100 }}
```

Por ejemplo, para fade simple:
```javascript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
```

### Ocultar controles

Para ocultar los puntos de navegación lateral, elimina o comenta el bloque:
```javascript
{/* Miniaturas (opcional - se puede expandir) */}
<div className="absolute left-4...">
  ...
</div>
```

## Contacto y soporte

Para más ayuda, consulta:
- Documentación de React: https://react.dev
- Documentación de Tailwind: https://tailwindcss.com
- Documentación de Framer Motion: https://www.framer.com/motion/
