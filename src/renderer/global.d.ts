interface Window {
  myAPI: () => void;
  electronAPI: {
    altOPressed: (callback: (value: number) => void) => void;
  };
}