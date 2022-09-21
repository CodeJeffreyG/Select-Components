import styles from "./select.module.css";

type selectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: selectOptions[];
  value?: selectOptions | undefined;
  onChange: (value: selectOptions | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.value}>value</span>
        <button className={"clear-btn"}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
      </div>
    </>
  );
}
