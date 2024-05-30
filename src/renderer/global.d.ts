interface Window {
  myAPI: () => void;
  electronAPI: {
    onUpdateCounter: (callback: (value: number) => void) => void;
  };
}