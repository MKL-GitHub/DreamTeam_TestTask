import styles from "./index.module.scss";
import { FC } from "react";

interface TextareaProps {
  className?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> =
  ({ className, label, placeholder, value, onChange }) => {
    return (
      <div className={`${styles.index} ${className}`}>
        <div className={styles.label}>{label}</div>
        <div className={styles.textareaContainer}>
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }

export default Textarea;