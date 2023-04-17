import Image from "next/image";
import styles from "./index.module.scss";
import { FC } from "react";

interface CheckboxProps {
  className?: string;
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
}

const Checkbox: FC<CheckboxProps> =
  ({ className, label, checked, onChange, required, name }) => {
    return (
      <div className={`${styles.index} ${className}`}>
        <label data-is-checked={checked}>
          <div>
            <Image
              alt=""
              src="/svg/checkmark.svg"
              width={16}
              height={16}
            />
          </div>
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            required={required}
            name={name}
          />
          {label}
        </label>
      </div>
    );
  }

export default Checkbox;