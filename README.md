# Presentación: Síndrome Piramidal y Extrapiramidal

Presentación interactiva sobre Síndrome Piramidal y Extrapiramidal, convertida de PowerPoint a React.

## Características

- **22 slides** con contenido completo
- **Navegación lateral** estilo PowerPoint
- **19 imágenes** integradas del PPT original
- **Animaciones fluidas** con Framer Motion
- **Diseño responsive** con Tailwind CSS
- **Controles de teclado** para navegación fácil

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```

## Controles de Navegación

- **Flecha Derecha** o **Espacio**: Siguiente slide
- **Flecha Izquierda**: Slide anterior
- **Home**: Ir al inicio
- **End**: Ir al final
- **Click en puntos laterales**: Ir a slide específico
- **Botones en pantalla**: Navegación con mouse

## Estructura del Proyecto

```
sindrome-piramidal-react/
├── public/
│   └── images/          # 19 imágenes del PowerPoint
├── src/
│   ├── App.jsx          # Componente principal con todos los slides
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Build para Producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`.

## Contenido de los Slides

1. Portada
2. Temario
3. Definiciones básicas
4-5. Síndromes Piramidal y Extrapiramidal
6-8. Signos clínicos
9-10. Parálisis espástica y fláccida
11-15. Maniobras semiológicas
16-17. Importancia semiológica y diagnóstico
18-19. Caso clínico
20. Tratamiento
21-22. Conclusión y cierre

## Tecnologías Utilizadas

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (iconos)

## Notas

- Las imágenes fueron extraídas automáticamente del archivo PPTM original
- El contenido está basado en la presentación "Clase Sindrome Piramidal.pptm"
- El diseño es completamente responsive y se adapta a diferentes tamaños de pantalla
