import { tokens } from "../tokens";

export const it: typeof tokens = {
  languages: {
    en: "Inglese",
    es: "Spagnolo",
    ptbr: "Portoghese",
    de: "Tedesco",
    ru: "Russo",
    it: "Italiano",
    ja: "Giapponese",
  },
  navbar: {
    title: "Estrattore Batch delle Proprietà CSS",
  },
  extractCssToJson: {
    root: "Radice",
    file: "File",
    files: "File",
    submit: "Invia",
    className: "Nome Classe",
    config: "Configurazione",
    property: "Proprietà",
    keyValues: "Chiave e Valore",
    values: "Valori",
    variableName: "Nome Variabile",
  },
  threeList: {
    addConfig: "Aggiungi Configurazione",
    addValue: "Aggiungi Valore",
  },
  exceptions: {
    notFound: "Non Trovato",
  },
  words: {
    generate: "Genera",
    tutorial: "Tutorial",
    skip: "Salta",
    back: "Indietro",
    close: "Chiudi",
    next: "Avanti",
    search: "Cerca",
  },
  phrases: {
    fileCss: "File CSS",
    uploadCss: "Carica CSS",
    finishTour: "Termina Tour",
    existingConfig: "Configurazione Esistente",
    translationManager: "Gestore delle Traduzioni",
  },
  tours: {
    body: {
      title: "Benvenuto!",
      content:
        "Questo è il tour di benvenuto! Clicca su 'Avanti' per continuare!",
    },
    switchLanguageButton: {
      title: "Pulsante di Cambio Lingua",
      content:
        "Clicca su questo pulsante per cambiare la lingua dell'interfaccia. Puoi scegliere tra varie lingue disponibili.",
    },
    treeView: {
      title: "Vista ad Albero",
      content:
        "Qui puoi visualizzare e navigare nella struttura degli elementi in forma di albero. Ogni nodo rappresenta una configurazione o un valore da estrarre dal file CSS.",
    },
    config: {
      title: "Elemento di Configurazione",
      content:
        "Questo elemento ti consente di aggiungere una nuova configurazione, definendo come verranno estratti e organizzati i valori CSS.",
    },
    className: {
      title: "Elemento di Nome Classe",
      content:
        "Qui puoi specificare il nome della classe CSS a cui si applica la configurazione. Questo aiuta a identificare e raggruppare specifiche proprietà CSS.",
    },
    values: {
      title: "Elemento di Valori",
      content:
        "In questo elemento, puoi aggiungere i valori CSS che desideri estrarre. Ogni valore rappresenta una proprietà CSS specifica e il suo valore corrispondente.",
    },
    keyValues: {
      title: "Elemento di Chiave e Valori",
      content:
        "Qui puoi definire coppie chiave-valore per le proprietà CSS. La chiave è il nome della proprietà CSS e il valore è ciò che verrà applicato a quella proprietà.",
    },
    property: {
      title: "Elemento di Proprietà",
      content:
        "Questo campo ti consente di aggiungere una specifica proprietà CSS da estrarre. Ad esempio, 'background-color', 'font-size', ecc.",
    },
    variableName: {
      title: "Elemento di Nome Variabile",
      content:
        "Qui puoi definire un nome di variabile per la proprietà CSS estratta. Questo è utile per riutilizzare i valori CSS in diverse parti del tuo progetto.",
    },
    removeButton: {
      title: "Pulsante di Rimozione",
      content:
        "Usa questo pulsante per rimuovere un elemento dall'albero. Questo può essere usato per eliminare una configurazione o un valore che non è più necessario.",
    },
    addValueButton: {
      title: "Pulsante di Aggiunta Valore",
      content:
        "Clicca su questo pulsante per aggiungere un nuovo valore alla configurazione corrente. Questo ti consente di espandere l'elenco delle proprietà CSS da estrarre.",
    },
    addConfigButton: {
      title: "Pulsante di Aggiunta Configurazione",
      content:
        "Usa questo pulsante per aggiungere una nuova configurazione all'albero. Ogni configurazione può contenere più valori CSS.",
    },
    generateButton: {
      title: "Pulsante di Generazione",
      content:
        "Clicca su questo pulsante per generare il JSON con le configurazioni e i valori CSS definiti.",
    },
    uploadButton: {
      title: "Pulsante di Caricamento",
      content:
        "Usa questo pulsante per caricare un file CSS. Il contenuto del file verrà analizzato e le proprietà CSS verranno estratte in base alle configurazioni definite.",
    },
  },
  responseErrors: {
    "Atleastoneconfigurationmustbeprovided.":
      "Deve essere fornita almeno una configurazione.",
    "AtleastoneKeyValuemustbeprovided.":
      "Deve essere fornito almeno un KeyValue.",
    "ClassNamecannotbelongerthan100characters.":
      "Il nome della classe non può essere più lungo di 100 caratteri.",
    "ClassNameisrequired.": "Il nome della classe è obbligatorio.",
    "ClassNamemustbeatleast1characterlong.":
      "Il nome della classe deve essere lungo almeno 1 carattere.",
    "Configsisrequired.": "Le configurazioni sono obbligatorie.",
    "KeyValuelistisrequired.": "La lista di KeyValue è obbligatoria.",
    "Propertycannotbelongerthan50characters.":
      "La proprietà non può essere più lunga di 50 caratteri.",
    "Propertyisrequired.": "La proprietà è obbligatoria.",
    "Propertymustbeatleast1characterlong.":
      "La proprietà deve essere lunga almeno 1 carattere.",
    "ResultNamecannotbelongerthan50characters.":
      "Il nome del risultato non può essere più lungo di 50 caratteri.",
    "ResultNameisrequired.": "Il nome del risultato è obbligatorio.",
    "ResultNamemustbeatleast1characterlong.":
      "Il nome del risultato deve essere lungo almeno 1 carattere.",
    "Thenumberoffilesmustbebetween1and1000.":
      "Il numero di file deve essere compreso tra 1 e 1000.",
    "Youmustuploadatleastonefile.": "Devi caricare almeno un file.",
  },
};
