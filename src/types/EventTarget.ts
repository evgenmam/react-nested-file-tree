export interface EventTarget {
  target: {
    value: React.SetStateAction<string>;
  };
  preventDefault(): void;
}
