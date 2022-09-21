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
      <div className="container">wrong</div>

      <div className={styles.container}>right</div>
    </>
  );
}


