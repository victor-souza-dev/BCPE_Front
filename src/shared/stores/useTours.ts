import { Step } from "react-joyride";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { tokens } from "src/locales/tokens";

interface IStore {
  steps: Step[];
  currentStepIndex: number;
  run: boolean;
  startRun: (t: any) => void;
  finishRun: () => void;
  previousStep: () => void;
  nextStep: () => void;
}

const stepWrapper = (steps: Step[]): Step[] => {
  return steps.map((step) => ({
    ...step,
    disableBeacon: true,
  }));
};

export const useTours = create(
  persist<IStore>(
    (set) => ({
      steps: [],
      currentStepIndex: 0,
      run: false,
      startRun: (t) =>
        set((state) => ({
          ...state,
          currentStepIndex: 0,
          run: true,
          steps: stepWrapper([
            {
              target: "body",
              content: t(tokens.tours.body.content),
              title: t(tokens.tours.body.title),
              placement: "center",
            },
            {
              target: "#switchLanguageButton",
              content: t(tokens.tours.switchLanguageButton.content),
              title: t(tokens.tours.switchLanguageButton.title),
            },
            {
              target: "#uploadButton",
              content: t(tokens.tours.uploadButton.content),
              title: t(tokens.tours.uploadButton.title),
            },
            {
              target: "#treeView",
              content: t(tokens.tours.treeView.content),
              title: t(tokens.tours.treeView.title),
            },
            {
              target: "#config",
              content: t(tokens.tours.config.content),
              title: t(tokens.tours.config.title),
            },
            {
              target: "#className",
              content: t(tokens.tours.className.content),
              title: t(tokens.tours.className.title),
            },
            {
              target: "#values",
              content: t(tokens.tours.values.content),
              title: t(tokens.tours.values.title),
            },
            {
              target: "#keyValues",
              content: t(tokens.tours.keyValues.content),
              title: t(tokens.tours.keyValues.title),
            },
            {
              target: "#property",
              content: t(tokens.tours.property.content),
              title: t(tokens.tours.property.title),
            },
            {
              target: "#variableName",
              content: t(tokens.tours.variableName.content),
              title: t(tokens.tours.variableName.title),
            },
            {
              target: "#removeButton",
              content: t(tokens.tours.removeButton.content),
              title: t(tokens.tours.removeButton.title),
            },
            {
              target: "#addValueButton",
              content: t(tokens.tours.addValueButton.content),
              title: t(tokens.tours.addValueButton.title),
            },
            {
              target: "#addConfigButton",
              content: t(tokens.tours.addConfigButton.content),
              title: t(tokens.tours.addConfigButton.title),
            },
            {
              target: "#generateButton",
              content: t(tokens.tours.generateButton.content),
              title: t(tokens.tours.generateButton.title),
            },
          ]),
        })),
      finishRun: () =>
        set((state) => ({
          ...state,
          run: false,
          currentStepIndex: 0,
          steps: [],
        })),
      previousStep: () =>
        set((state) => {
          const index = state.currentStepIndex - 1;

          if (index < 0) {
            return state;
          }

          return {
            ...state,
            currentStepIndex: index,
          };
        }),
      nextStep: () =>
        set((state) => {
          const index = state.currentStepIndex + 1;

          if (index > state.steps.length - 1) {
            return state;
          }

          return {
            ...state,
            currentStepIndex: index,
          };
        }),
    }),
    {
      name: "tours",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
