import { useState, useEffect } from "react";
import styles from "./select.module.css";

type selectOptions = {
  label: string;
  value: any;
};

type SelectProps = {
  options: selectOptions[];
  value?: selectOptions | undefined;
  onChange: (value: selectOptions | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highLightedIndex, setHighlightedIndex] = useState<number>(0);
  const clearOptions = () => onChange(undefined);
  const selectOption = (option: selectOptions) => {
    if (option !== value) onChange(option);
  };
  const isOptionSelected = (option: selectOptions) => option === value;

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
    
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={"clear-btn"}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.label}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${index === highLightedIndex ? styles.highlighted : ""}`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
