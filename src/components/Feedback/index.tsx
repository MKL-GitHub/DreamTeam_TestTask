import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import ImageButton from "../ImageButton";
import Input from "../Input";
import Textarea from "../Textarea";
import Checkbox from "../Checkbox";
import Select from "../Select";
import { RadioOptionType } from "@/types";
import RadioGroup from "../RadioGroup";

const trips: string[] = ["Trip 1", "Trip 2", "Trip 3"];

const radioOptions: RadioOptionType[] = [
  { value: "reviews", label: "Reviews and suggestions" },
  { value: "question", label: "Question about content" },
  { value: "complaints", label: "Complaints" },
  { value: "other", label: "Other" },
];

interface FeedbackProps {
  className?: string;
  toggleVisibility: () => void;
}

const Feedback: FC<FeedbackProps> =
  ({ className, toggleVisibility }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [trip, setTrip] = useState<string | undefined>();

    const [isNameValid, setIsNameValid] = useState<boolean | undefined>();
    const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>();
    const [isPhoneValid, setIsPhoneValid] = useState<boolean | undefined>();
    const [isTripValid, setIsTripValid] = useState<boolean | null>(null);

    const [selectedRadio, setSelectedRadio] = useState<string | undefined>(radioOptions[0].value);
    const [question, setQuestion] = useState<string>("");
    const [activeButton, setActiveButton] = useState<number>(1);
    const [isConsentGiven, setIsConsentGiven] = useState(false);

    const handleOnSubmitFormClick = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    }

    const handleOnSendClick = () => {
      setIsNameValid(!!name);
      setIsEmailValid(!!email);
      setIsPhoneValid(!!phone);
      setIsTripValid(!!trip);
    }

    return (
      <div className={`${styles.index} ${className}`}>
        <form onSubmit={handleOnSubmitFormClick}>
          <div className={`container ${styles.container}`}>
            <div className={styles.row}>
              <div className={styles.heading}>Feedback</div>
              <ImageButton
                imageSrc="/svg/cross.svg"
                className={`${styles.close}`}
                onClick={toggleVisibility}
              />
            </div>

            <div className={styles.inputsContainer}>
              <Input
                label="Your name"
                placeholder="Placeholder"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                name="name"
                valid={isNameValid}
                type="text"
              />
              <Input
                label="Email address"
                placeholder="Placeholder"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                valid={isEmailValid}
                type="email"
              />
              <Input
                label="Your phone"
                placeholder="Placeholder"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                valid={isPhoneValid}
                type="text"
              />
              <Select
                label="Сhoose a trip"
                options={trips}
                placeholder="Choose"
                isValid={isTripValid}
                setIsValid={setIsTripValid}
                value={trip}
                setValue={setTrip}
              />
            </div>

            <RadioGroup
              name="feedback-type"
              options={radioOptions}
              className={styles.radioGroup}
              selected={selectedRadio}
              setSelected={setSelectedRadio}
            />

            <Textarea
              label="Describe your question"
              placeholder="Placeholder"
              value={question}
              onChange={e => setQuestion(e.target.value)}
            />

            <div className={`${styles.row} ${styles.row__bottom}`}>
              <Checkbox
                label="Даю согласие на обработку"
                checked={isConsentGiven}
                onChange={e => setIsConsentGiven(e.target.checked)}
                required
                name="agreement"
              />
              <button
                type="submit"
                className={`button_pale-blue ${styles.sendButton}`}
                onClick={handleOnSendClick}
              >Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

export default Feedback;