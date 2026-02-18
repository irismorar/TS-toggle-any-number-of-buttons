import { useCallback, useState } from "react";

export function useToggleButtonsState() {
  const [buttons, setButtons] = useState([false, false, false, false, false]);

  const toggleAnyButton = useCallback(
    (currentButtonIndex: number) => {
      const afterToggle = buttons.map(
        (buttonState: boolean, buttonIndex: number) => {
          if (buttonIndex === currentButtonIndex) {
            return !buttonState;
          }
          return buttonState;
        },
      );
      setButtons(afterToggle);
    },
    [buttons],
  );

  return {
    buttons,
    toggleAnyButton,
  };
}
