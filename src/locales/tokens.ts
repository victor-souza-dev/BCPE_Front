interface IGeneric {
  [key: string]: string | object;
}

export interface ITokens {
  [key: string]: string | IGeneric;
  languages: {
    en: string;
    es: string;
    ptbr: string;
    ja: string;
    de: string;
    it: string;
    ru: string;
  };
  navbar: {
    title: string;
  };
  extractCssToJson: {
    root: string;
    file: string;
    files: string;
    submit: string;
    className: string;
    config: string;
    property: string;
    keyValues: string;
    values: string;
    variableName: string;
  };
  threeList: {
    addConfig: string;
    addValue: string;
  };
  exceptions: {
    notFound: string;
  };
  words: {
    tutorial: string;
    generate: string;
    skip: string;
    close: string;
    back: string;
    next: string;
  };
  phrases: {
    fileCss: string;
    uploadCss: string;
    finishTour: string;
  };
  tours: {
    body: {
      title: string;
      content: string;
    };
    switchLanguageButton: {
      title: string;
      content: string;
    };
    treeView: {
      title: string;
      content: string;
    };
    config: {
      title: string;
      content: string;
    };
    className: {
      title: string;
      content: string;
    };
    values: {
      title: string;
      content: string;
    };
    keyValues: {
      title: string;
      content: string;
    };
    property: {
      title: string;
      content: string;
    };
    variableName: {
      title: string;
      content: string;
    };
    removeButton: {
      title: string;
      content: string;
    };
    addValueButton: {
      title: string;
      content: string;
    };
    addConfigButton: {
      title: string;
      content: string;
    };
    uploadButton: {
      title: string;
      content: string;
    };
    generateButton: {
      title: string;
      content: string;
    };
  };
}

export const tokens: ITokens = {
  languages: {
    en: "languages.en",
    es: "languages.es",
    ptbr: "languages.ptbr",
    ja: "languages.ja",
    de: "languages.de",
    it: "languages.it",
    ru: "languages.ru",
  },
  navbar: {
    title: "navbar.title",
  },
  extractCssToJson: {
    root: "extractCssToJson.root",
    config: "extractCssToJson.config",
    className: "extractCssToJson.className",
    property: "extractCssToJson.property",
    keyValues: "extractCssToJson.keyValues",
    values: "extractCssToJson.values",
    variableName: "extractCssToJson.variableName",
    file: "extractCssToJson.file",
    files: "extractCssToJson.files",
    submit: "extractCssToJson.submit",
  },
  threeList: {
    addConfig: "threeList.addConfig",
    addValue: "threeList.addValue",
  },
  exceptions: {
    notFound: "exceptions.notFound",
  },
  words: {
    tutorial: "words.tutorial",
    generate: "words.generate",
    skip: "words.skip",
    close: "words.close",
    back: "words.back",
    next: "words.next",
  },
  phrases: {
    fileCss: "phrases.fileCss",
    uploadCss: "phrases.uploadCss",
    finishTour: "phrases.finishTour",
  },
  tours: {
    body: {
      title: "tours.body.title",
      content: "tours.body.content",
    },
    switchLanguageButton: {
      title: "tours.switchLanguageButton.title",
      content: "tours.switchLanguageButton.content",
    },
    treeView: {
      title: "tours.treeView.title",
      content: "tours.treeView.content",
    },
    config: {
      title: "tours.config.title",
      content: "tours.config.content",
    },
    className: {
      title: "tours.className.title",
      content: "tours.className.content",
    },
    values: {
      title: "tours.values.title",
      content: "tours.values.content",
    },
    keyValues: {
      title: "tours.keyValues.title",
      content: "tours.keyValues.content",
    },
    property: {
      title: "tours.property.title",
      content: "tours.property.content",
    },
    variableName: {
      title: "tours.variableName.title",
      content: "tours.variableName.content",
    },
    removeButton: {
      title: "tours.removeButton.title",
      content: "tours.removeButton.content",
    },
    addValueButton: {
      title: "tours.addValueButton.title",
      content: "tours.addValueButton.content",
    },
    addConfigButton: {
      title: "tours.addConfigButton.title",
      content: "tours.addConfigButton.content",
    },
    uploadButton: {
      title: "tours.uploadButton.title",
      content: "tours.uploadButton.content",
    },
    generateButton: {
      title: "tours.generateButton.title",
      content: "tours.generateButton.content",
    },
  },
};
