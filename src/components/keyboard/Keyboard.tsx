import KeyButton from "../keyButton/KeyButton";
import "./styles.css";

interface IKeyboard {
  theme: "dark" | "light";
}

const Keyboard = ({ theme }: IKeyboard) => {
  return (
    <div className="keyboard-container">
      <div className="grid-container column-4 grid-margins">
        <div className="grid-item grid-item-gap">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
      </div>
      <div className="grid-container column-4 grid-margins">
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
      </div>{" "}
      <div className="grid-container column-4 grid-margins">
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
        <div className="grid-item">
          <KeyButton styles="border-rounded" color="white">
            a
          </KeyButton>
        </div>
      </div>
      <div className="grid-container column-3fr-1fr">
        <div>
          <div className="grid-container grid-item grid-margins column-3">
            <div className="grid-item">
              <KeyButton styles="border-rounded" color="white">
                a
              </KeyButton>
            </div>{" "}
            <div className="grid-item">
              <KeyButton styles="border-rounded" color="white">
                a
              </KeyButton>
            </div>{" "}
            <div className="grid-item">
              <KeyButton styles="border-rounded" color="white">
                a
              </KeyButton>
            </div>
          </div>
          <div className="grid-container  grid-item grid-item grid-margins  column-3">
            <div className="grid-item">
              <KeyButton styles="border-rounded" color="white">
                a
              </KeyButton>
            </div>{" "}
            <div className="grid-item">
              <KeyButton styles="border-rounded" color="white">
                a
              </KeyButton>
            </div>{" "}
            <div className="grid-item">
              <KeyButton styles="border-rounded" color="white">
                a
              </KeyButton>
            </div>
          </div>
        </div>
        <div className="grid-item grid-margins">
          <KeyButton color="white" height="full" styles="border-radius-50 ">
            a
          </KeyButton>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
