import Image from "next/image";
import styles from "./index.module.scss";
import { FC, useEffect, useState } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
  valid?: boolean;
  type?: React.HTMLInputTypeAttribute | undefined;
}

const Input: FC<InputProps> =
  ({ label, placeholder, value, onChange, required, name, valid, type }) => {
    const [isValid, setIsValid] = useState<boolean | undefined>(valid);

    useEffect(() => {
      setIsValid(valid);
    }, [valid]);

    useEffect(() => {
      setIsValid(undefined);
    }, [value]);

    return (
      <div className={`${styles.index}`}>
        {label && <div className={styles.label}>{label}</div>}
        <div
          className={`inputContainer ${styles.inputContainer}`}
          data-is-valid={isValid}
        >
          <input
            required={required}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          />
          {(isValid === true || isValid === false) &&
            <Image
              alt=""
              src={`/svg/${isValid ? "checkmark" : "cross"}.svg`}
              width={8}
              height={8}
              className={styles.validationImage}
            />}
        </div>
      </div>
    );
  }

export default Input;