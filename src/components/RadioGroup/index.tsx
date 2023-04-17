import { RadioOptionType } from "@/types";
import styles from "./index.module.scss";
import { FC, useState } from "react";

interface RadioGroupProps {
  className?: string;
  name: string;
  options: RadioOptionType[];
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const RadioGroup: FC<RadioGroupProps> =
  ({ className, name, options, selected, setSelected }) => {
    return (
      <div className={`${styles.index} ${className}`}>
        {options.map(option =>
          <label key={option.value} data-is-selected={selected === option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected === option.value}
              onChange={(e) => setSelected(e.target.value)}
            />
            {option.label}
          </label>
        )}
      </div>
    );
  }

export default RadioGroup;