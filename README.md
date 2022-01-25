# Añadir un idioma

### Añadir un objeto

Ir a GlobalFunctions.js > nationalitiesFlagsLang

**language**: Formato dinámico finalizado con la abreviación del idioma.  
**region**: Formato dinámico finalizado con la abreviación del país  
**flag**: Nombre del objeto de la bandera del país (asegurarse de que exista en el paquete de imágenes)  
**code**: Código lang-REG (ej: es-ES)

    {
        language: 'language.option.es',
        region: 'region.option.ar',
        flag: Arg,
        code: 'es-AR'
    }

### Ir al directorio **_/languages/Código lang-REG_**

Dirigirse a la sección de idiomas y añadir su traducción:

```
"language.option.es": "Español",
"region.option.ar": "Argentina",
```

### Edición de banderas

En caso de no disponer de la bandera completa, editar el archivo con el nombre del país ubicado en la carpeta **_/assets/svgs/flags/REG_**.

> Editar con Illustrator y quitar los componentes del grupo, posteriormente guardar el archivo y añadir el objeto a la lista de banderas en GlobalFunctions.js.

### Ir al directorio **_/hooks/useContext/langContext_**
