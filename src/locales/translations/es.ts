import { tokens } from "../tokens";

export const es: typeof tokens = {
  languages: {
    en: "Inglés",
    es: "Español",
    ptbr: "Portugués",
    de: "Alemán",
    ru: "Ruso",
    it: "Italiano",
    ja: "Japonés",
  },
  navbar: {
    title: "Extractor de propiedades CSS por lotes",
  },
  extractCssToJson: {
    root: "Raíz",
    file: "Archivo",
    files: "Archivos",
    submit: "Enviar",
    className: "Nombre de clase",
    config: "Configuración",
    property: "Propiedad",
    keyValues: "Clave y valor",
    values: "Valores",
    variableName: "Nombre de variable",
  },
  threeList: {
    addConfig: "Agregar configuración",
    addValue: "Agregar valor",
  },
  exceptions: {
    notFound: "No encontrado",
  },
  words: {
    generate: "Generar",
    tutorial: "Tutorial",
    skip: "Saltar",
    back: "Atrás",
    close: "Cerrar",
    next: "Siguiente",
    search: "Buscar",
  },
  phrases: {
    fileCss: "Archivo css",
    uploadCss: "Subir css",
    finishTour: "Finalizar recorrido",
    existingConfig: "Configuración existente",
    translationManager: "Gestor de traducción",
  },
  tours: {
    body: {
      title: "¡Bienvenido!",
      content:
        "¡Este es el recorrido de bienvenida! ¡Haga clic en 'Siguiente' para continuar!",
    },
    switchLanguageButton: {
      title: "Botón de Cambio de Idioma",
      content:
        "Haga clic en este botón para cambiar el idioma de la interfaz. Puede elegir entre varios idiomas disponibles.",
    },
    treeView: {
      title: "Vista de Árbol",
      content:
        "Aquí puede ver y navegar a través de la estructura de elementos en forma de árbol. Cada nodo representa una configuración o un valor que se extraerá del archivo CSS.",
    },
    config: {
      title: "Elemento de Configuración",
      content:
        "Este elemento le permite agregar una nueva configuración, definiendo cómo se extraerán y organizarán los valores CSS.",
    },
    className: {
      title: "Elemento de Nombre de Clase",
      content:
        "Aquí puede especificar el nombre de la clase CSS a la que se aplica la configuración. Esto ayuda a identificar y agrupar propiedades CSS específicas.",
    },
    values: {
      title: "Elemento de Valores",
      content:
        "En este elemento, puede agregar valores CSS que desea extraer. Cada valor representa una propiedad CSS específica y su valor correspondiente.",
    },
    keyValues: {
      title: "Elemento de Clave y Valores",
      content:
        "Aquí puede definir pares de clave y valor para las propiedades CSS. La clave es el nombre de la propiedad CSS y el valor es lo que se aplicará a esa propiedad.",
    },
    property: {
      title: "Elemento de Propiedad",
      content:
        "Este campo le permite agregar una propiedad CSS específica que se extraerá. Por ejemplo, 'background-color', 'font-size', etc.",
    },
    variableName: {
      title: "Elemento de Nombre de Variable",
      content:
        "Aquí puede definir un nombre de variable para la propiedad CSS extraída. Esto es útil para reutilizar valores CSS en diferentes partes de su proyecto.",
    },
    removeButton: {
      title: "Botón de Eliminación",
      content:
        "Utilice este botón para eliminar un elemento del árbol. Esto puede usarse para eliminar una configuración o un valor que ya no es necesario.",
    },
    addValueButton: {
      title: "Botón de Adición de Valor",
      content:
        "Haga clic en este botón para agregar un nuevo valor a la configuración actual. Esto le permite expandir la lista de propiedades CSS a extraer.",
    },
    addConfigButton: {
      title: "Botón de Adición de Configuración",
      content:
        "Utilice este botón para agregar una nueva configuración al árbol. Cada configuración puede contener múltiples valores CSS.",
    },
    generateButton: {
      title: "Botón de Generar",
      content:
        "Haga clic en este botón para generar el JSON con las configuraciones y valores CSS definidos.",
    },
    uploadButton: {
      title: "Botón de Subir",
      content:
        "Utilice este botón para subir un archivo CSS. El contenido del archivo será analizado y las propiedades CSS se extraerán de acuerdo con las configuraciones definidas.",
    },
  },
};
