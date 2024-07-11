import { tokens } from "../tokens";

export const ptbr: typeof tokens = {
  languages: {
    en: "Inglês",
    es: "Espanhol",
    ptbr: "Português",
    de: "Alemão",
    ru: "Russo",
    it: "Italiano",
    ja: "Japonês",
  },
  navbar: {
    title: "Extrator de propriedades CSS em Lote",
  },
  extractCssToJson: {
    root: "Raiz",
    file: "Arquivo",
    files: "Arquivos",
    submit: "Enviar",
    className: "Nome da Classe",
    config: "Configuração",
    property: "Propriedade",
    keyValues: "Chave e Valor",
    values: "Valores",
    variableName: "Nome da Variável",
  },
  threeList: {
    addConfig: "Adicionar Configuração",
    addValue: "Adicionar Valor",
  },
  exceptions: {
    notFound: "Página não encontrada",
  },
  words: {
    generate: "Gerar",
    tutorial: "Tutorial",
    skip: "Pular",
    back: "Voltar",
    close: "Fechar",
    next: "Próximo",
    search: "Pesquisar",
  },
  phrases: {
    fileCss: "Arquivo css",
    uploadCss: "Enviar Css",
    finishTour: "Finalizar Tour",
    existingConfig: "Configuração Existente",
    translationManager: "Gerenciador de Tradução",
  },
  tours: {
    body: {
      title: "Bem-vindo!",
      content:
        "Este é o tour de boas-vindas! Clique em 'Próximo' para continuar!",
    },
    switchLanguageButton: {
      title: "Botão de Troca de Idioma",
      content:
        "Clique neste botão para alterar o idioma da interface. Você pode escolher entre vários idiomas disponíveis.",
    },
    treeView: {
      title: "Visualização de Árvore",
      content:
        "Aqui você pode visualizar e navegar pela estrutura de elementos em forma de árvore. Cada nó representa uma configuração ou um valor que será extraído do arquivo CSS.",
    },
    config: {
      title: "Elemento de Configuração",
      content:
        "Este elemento permite adicionar uma nova configuração, que define como os valores CSS serão extraídos e organizados.",
    },
    className: {
      title: "Elemento de Nome de Classe",
      content:
        "Aqui você pode especificar o nome da classe CSS para a qual a configuração se aplica. Isso ajuda a identificar e agrupar propriedades CSS específicas.",
    },
    values: {
      title: "Elemento de Valores",
      content:
        "Neste elemento, você pode adicionar valores CSS que deseja extrair. Cada valor representa uma propriedade CSS específica e seu valor correspondente.",
    },
    keyValues: {
      title: "Elemento de Chave e Valores",
      content:
        "Aqui você pode definir pares de chave e valor para as propriedades CSS. A chave é o nome da propriedade CSS e o valor é o que será aplicado a essa propriedade.",
    },
    property: {
      title: "Elemento de Propriedade",
      content:
        "Este campo permite adicionar uma propriedade CSS específica que será extraída. Por exemplo, 'background-color', 'font-size', etc.",
    },
    variableName: {
      title: "Elemento de Nome de Variável",
      content:
        "Aqui você pode definir um nome de variável para a propriedade CSS extraída. Isso é útil para reutilizar valores CSS em diferentes partes do seu projeto.",
    },
    removeButton: {
      title: "Botão de Remoção",
      content:
        "Use este botão para remover um elemento da árvore. Isso pode ser usado para excluir uma configuração ou um valor que não é mais necessário.",
    },
    addValueButton: {
      title: "Botão de Adição de Valor",
      content:
        "Clique neste botão para adicionar um novo valor à configuração atual. Isso permite expandir a lista de propriedades CSS que serão extraídas.",
    },
    addConfigButton: {
      title: "Botão de Adição de Configuração",
      content:
        "Use este botão para adicionar uma nova configuração à árvore. Cada configuração pode conter múltiplos valores CSS.",
    },
    generateButton: {
      title: "Botão de Geração",
      content:
        "Clique neste botão para gerar o JSON com as configurações e valores CSS definidos.",
    },
    uploadButton: {
      title: "Botão de Envio",
      content:
        "Use este botão para enviar um arquivo CSS. O conteúdo do arquivo será analisado e as propriedades CSS serão extraídas de acordo com as configurações definidas.",
    },
  },
  responseErrors: {
    "Atleastoneconfigurationmustbeprovided.":
      "Pelo menos uma configuração deve ser fornecida.",
    "AtleastoneKeyValuemustbeprovided.":
      "Pelo menos uma chave-valor deve ser fornecida.",
    "ClassNamecannotbelongerthan100characters.":
      "O nome da classe não pode ter mais de 100 caracteres.",
    "ClassNameisrequired.": "O nome da classe é obrigatório.",
    "ClassNamemustbeatleast1characterlong.":
      "O nome da classe deve ter pelo menos 1 caractere.",
    "Configsisrequired.": "As configurações são obrigatórias.",
    "KeyValuelistisrequired.": "A lista de chave-valor é obrigatória.",
    "Propertycannotbelongerthan50characters.":
      "A propriedade não pode ter mais de 50 caracteres.",
    "Propertyisrequired.": "A propriedade é obrigatória.",
    "Propertymustbeatleast1characterlong.":
      "A propriedade deve ter pelo menos 1 caractere.",
    "ResultNamecannotbelongerthan50characters.":
      "O nome do resultado não pode ter mais de 50 caracteres.",
    "ResultNameisrequired.": "O nome do resultado é obrigatório.",
    "ResultNamemustbeatleast1characterlong.":
      "O nome do resultado deve ter pelo menos 1 caractere.",
    "Thenumberoffilesmustbebetween1and1000.":
      "O número de arquivos deve estar entre 1 e 1000.",
    "Youmustuploadatleastonefile.": "Você deve enviar pelo menos um arquivo.",
  },
};
