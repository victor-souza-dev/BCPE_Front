import { ITokens } from "../tokens";

export const de: ITokens = {
  languages: {
    en: "Englisch",
    es: "Spanisch",
    ptbr: "Portugiesisch",
    de: "Deutsch",
    ru: "Russisch",
    it: "Italienisch",
    ja: "Japanisch",
  },
  navbar: {
    title: "Batch CSS Eigenschaften Extraktor",
  },
  extractCssToJson: {
    root: "Stamm",
    file: "Datei",
    files: "Dateien",
    submit: "Einreichen",
    className: "Klassenname",
    config: "Konfiguration",
    property: "Eigenschaft",
    keyValues: "Schlüssel und Wert",
    values: "Werte",
    variableName: "Variablenname",
  },
  threeList: {
    addConfig: "Konfiguration hinzufügen",
    addValue: "Wert hinzufügen",
  },
  exceptions: {
    notFound: "Nicht gefunden",
  },
  words: {
    generate: "Generieren",
    tutorial: "Tutorial",
    skip: "Überspringen",
    back: "Zurück",
    close: "Schließen",
    next: "Weiter",
  },
  phrases: {
    fileCss: "CSS Datei",
    uploadCss: "CSS hochladen",
    finishTour: "Tour beenden",
  },
  tours: {
    body: {
      title: "Willkommen!",
      content:
        "Dies ist die Willkommensführung! Klicken Sie auf 'Weiter', um fortzufahren!",
    },
    switchLanguageButton: {
      title: "Sprachwechsel-Taste",
      content:
        "Klicken Sie auf diese Schaltfläche, um die Sprache der Benutzeroberfläche zu ändern. Sie können aus verschiedenen verfügbaren Sprachen wählen.",
    },
    treeView: {
      title: "Baumansicht",
      content:
        "Hier können Sie die Struktur der Elemente in Baumform anzeigen und navigieren. Jeder Knoten stellt eine Konfiguration oder einen Wert dar, der aus der CSS-Datei extrahiert wird.",
    },
    config: {
      title: "Konfigurationselement",
      content:
        "Dieses Element ermöglicht es Ihnen, eine neue Konfiguration hinzuzufügen, die definiert, wie CSS-Werte extrahiert und organisiert werden.",
    },
    className: {
      title: "Klassennamenelement",
      content:
        "Hier können Sie den Namen der CSS-Klasse angeben, auf die die Konfiguration angewendet wird. Dies hilft, spezifische CSS-Eigenschaften zu identifizieren und zu gruppieren.",
    },
    values: {
      title: "Werteelement",
      content:
        "In diesem Element können Sie die CSS-Werte hinzufügen, die Sie extrahieren möchten. Jeder Wert stellt eine spezifische CSS-Eigenschaft und den entsprechenden Wert dar.",
    },
    keyValues: {
      title: "Schlüssel- und Wertelement",
      content:
        "Hier können Sie Schlüssel-Wert-Paare für CSS-Eigenschaften definieren. Der Schlüssel ist der Name der CSS-Eigenschaft und der Wert ist das, was auf diese Eigenschaft angewendet wird.",
    },
    property: {
      title: "Eigenschaftselement",
      content:
        "Dieses Feld ermöglicht es Ihnen, eine spezifische CSS-Eigenschaft hinzuzufügen, die extrahiert wird. Zum Beispiel 'background-color', 'font-size' usw.",
    },
    variableName: {
      title: "Variablennamelement",
      content:
        "Hier können Sie einen Variablennamen für die extrahierte CSS-Eigenschaft definieren. Dies ist nützlich, um CSS-Werte in verschiedenen Teilen Ihres Projekts wiederzuverwenden.",
    },
    removeButton: {
      title: "Entfernungstaste",
      content:
        "Verwenden Sie diese Schaltfläche, um ein Element aus dem Baum zu entfernen. Dies kann verwendet werden, um eine Konfiguration oder einen Wert zu löschen, der nicht mehr benötigt wird.",
    },
    addValueButton: {
      title: "Schaltfläche Wert hinzufügen",
      content:
        "Klicken Sie auf diese Schaltfläche, um der aktuellen Konfiguration einen neuen Wert hinzuzufügen. Dies ermöglicht es Ihnen, die Liste der zu extrahierenden CSS-Eigenschaften zu erweitern.",
    },
    addConfigButton: {
      title: "Schaltfläche Konfiguration hinzufügen",
      content:
        "Verwenden Sie diese Schaltfläche, um dem Baum eine neue Konfiguration hinzuzufügen. Jede Konfiguration kann mehrere CSS-Werte enthalten.",
    },
    generateButton: {
      title: "Generierungstaste",
      content:
        "Klicken Sie auf diese Schaltfläche, um das JSON mit den definierten CSS-Konfigurationen und -Werten zu generieren.",
    },
    uploadButton: {
      title: "Hochladetaste",
      content:
        "Verwenden Sie diese Schaltfläche, um eine CSS-Datei hochzuladen. Der Inhalt der Datei wird analysiert und die CSS-Eigenschaften werden gemäß den definierten Konfigurationen extrahiert.",
    },
  },
};
