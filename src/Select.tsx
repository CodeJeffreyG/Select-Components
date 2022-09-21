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
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>value</span>
      <button className={"clear-btn"}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${styles.show}`}>
        {options.map((option) => (
          <li key={option.label} className={`${styles.options} ${styles.show}`}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
