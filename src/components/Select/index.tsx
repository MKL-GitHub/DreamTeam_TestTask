import Image from "next/image";
import styles from "./index.module.scss";
import { FC, useState, useRef, useEffect } from "react";

interface SelectProps {
  className?: string;
  label?: string;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedIndex?: number;
  options?: string[];
  placeholder?: string;
  isValid: boolean | null;
  setIsValid: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Select: FC<SelectProps> =
  ({ className, label, options = [], selectedIndex, placeholder, isValid, value, setValue, setIsValid }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
      setIsValid(null);
    }, [isOpened]);

    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpened(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [selectRef]);

    return (
      <div className={`${styles.index} ${className}`}>
        <label>{label}</label>
        <div
          className={`inputContainer ${styles.selectContainer}`}
          onClick={() => setIsOpened(!isOpened)}
          ref={selectRef}
          data-is-opened={isOpened}
          data-is-valid={isValid}
        >
          <div className={styles.selectedOption} data-has-text={!!value}>
            {value ? value : placeholder}
          </div>

          <Image
            alt=""
            src={`/svg/${isValid === null ? "move" : isValid ? "checkmark" : "cross"}.svg`}
            width={14}
            height={14}
            data-is-opened={isOpened}
          />

          {isOpened && <div
            className={styles.options}
          >{options.map((option, index) =>
            <option key={index} onClick={() => setValue(option)}>{option}</option>
          )}</div>}
        </div>
      </div>
    );
  }

export default Select;