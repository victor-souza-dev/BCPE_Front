import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import Joyride, { CallBackProps, STATUS } from "react-joyride";

import { tokens } from "src/locales/tokens";
import { useTours } from "src/shared/stores/useTours";

export function Tours() {
  const { t } = useTranslation();
  const { run, finishRun, steps, currentStepIndex, previousStep, nextStep } =
    useTours();

  useEffect(() => {
    finishRun();
  }, []);

  useEffect(() => {
    if (run && steps.length > 0) {
      const element = document.querySelector(
        `react-joyride__step--${currentStepIndex}`,
      ) as HTMLElement;
      if (element) {
        element.click();
      }
    }
  }, [run, currentStepIndex, steps]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, action, index } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      finishRun();
    } else if (action === "next" && index + 1 < steps.length) {
      nextStep();
    } else if (action === "prev" && index - 1 >= 0) {
      previousStep();
    } else if (action === "close") {
      finishRun();
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      run={run}
      steps={steps}
      scrollToFirstStep
      showProgress
      showSkipButton
      disableCloseOnEsc
      disableOverlayClose
      styles={{
        options: {
          zIndex: 10000,
          overlayColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
      locale={{
        back: t(tokens.words.back),
        close: t(tokens.words.close),
        last: t(tokens.phrases.finishTour),
        next: t(tokens.words.next),
        skip: t(tokens.words.skip),
      }}
    />
  );
}
