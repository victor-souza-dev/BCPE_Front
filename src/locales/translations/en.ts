import { ITokens } from "../tokens";

export const en: ITokens = {
  languages: {
    en: "English",
    es: "Spanish",
    ptbr: "Portuguese",
    ja: "Japanese",
    de: "German",
    it: "Italian",
    ru: "Russian",
  },
  navbar: {
    title: "Batch CSS Properties Extractor",
  },
  extractCssToJson: {
    root: "Root",
    file: "File",
    files: "Files",
    submit: "Submit",
    className: "Class Name",
    config: "Config",
    property: "Property",
    keyValues: "Key and Value",
    values: "Values",
    variableName: "Variable Name",
  },
  threeList: {
    addConfig: "Add Config",
    addValue: "Add Value",
  },
  exceptions: {
    notFound: "Not Found",
  },
  words: {
    generate: "Generate",
    tutorial: "Tutorial",
    skip: "Skip",
    back: "Back",
    close: "Close",
    next: "Next",
  },
  phrases: {
    fileCss: "File css",
    uploadCss: "Upload Css",
    finishTour: "Finish Tour",
  },
  tours: {
    body: {
      title: "Welcome!",
      content: "This is the welcome tour! Click 'Next' to continue!",
    },
    switchLanguageButton: {
      title: "Language Switch Button",
      content:
        "Click this button to change the interface language. You can choose from various available languages.",
    },
    treeView: {
      title: "Tree View",
      content:
        "Here you can view and navigate through the structure of elements in a tree form. Each node represents a configuration or a value to be extracted from the CSS file.",
    },
    config: {
      title: "Configuration Element",
      content:
        "This element allows you to add a new configuration, defining how CSS values will be extracted and organized.",
    },
    className: {
      title: "Class Name Element",
      content:
        "Here you can specify the CSS class name to which the configuration applies. This helps identify and group specific CSS properties.",
    },
    values: {
      title: "Values Element",
      content:
        "In this element, you can add CSS values you want to extract. Each value represents a specific CSS property and its corresponding value.",
    },
    keyValues: {
      title: "Key and Values Element",
      content:
        "Here you can define key-value pairs for CSS properties. The key is the name of the CSS property and the value is what will be applied to that property.",
    },
    property: {
      title: "Property Element",
      content:
        "This field allows you to add a specific CSS property to be extracted. For example, 'background-color', 'font-size', etc.",
    },
    variableName: {
      title: "Variable Name Element",
      content:
        "Here you can define a variable name for the extracted CSS property. This is useful for reusing CSS values in different parts of your project.",
    },
    removeButton: {
      title: "Remove Button",
      content:
        "Use this button to remove an element from the tree. This can be used to delete a configuration or a value that is no longer needed.",
    },
    addValueButton: {
      title: "Add Value Button",
      content:
        "Click this button to add a new value to the current configuration. This allows you to expand the list of CSS properties to be extracted.",
    },
    addConfigButton: {
      title: "Add Configuration Button",
      content:
        "Use this button to add a new configuration to the tree. Each configuration can contain multiple CSS values.",
    },
    generateButton: {
      title: "Generate Button",
      content:
        "Click this button to generate the JSON with the defined CSS configurations and values.",
    },
    uploadButton: {
      title: "Upload Button",
      content:
        "Use this button to upload a CSS file. The file content will be analyzed and the CSS properties will be extracted according to the defined configurations.",
    },
  },
};
