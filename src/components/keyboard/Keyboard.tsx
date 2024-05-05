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
          <KeyButton
            styles={`size-60 border-rounded button-reset-${theme}`}
            color="white"
          >
            C
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
          >
            /
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
          >
            *
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
          >
            %
          </KeyButton>
        </div>
      </div>

      <div className="grid-container column-4 grid-margins">
        <div className="grid-item  grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
          >
            7
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
          >
            8
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
          >
            9
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
          >
            +
          </KeyButton>
        </div>
      </div>
      <div className="grid-container column-4 grid-margins">
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
          >
            4
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
          >
            5
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
          >
            6
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
          >
            -
          </KeyButton>
        </div>
      </div>
      <div className="grid-container column-3fr-1fr">
        <div>
          <div className="grid-container grid-item-gap grid-item grid-margins column-3">
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-number-${theme}`}
                color="white"
              >
                1
              </KeyButton>
            </div>
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-number-${theme}`}
                color="white"
              >
                2
              </KeyButton>
            </div>
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-number-${theme}`}
                color="white"
              >
                3
              </KeyButton>
            </div>
          </div>
          <div className="grid-container grid-item-gap  grid-item grid-item grid-margins  column-3">
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-oper-${theme}`}
                color="white"
              >
                +/-
              </KeyButton>
            </div>{" "}
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-number-${theme}`}
                color="white"
              >
                0
              </KeyButton>
            </div>{" "}
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-oper-${theme}`}
                color="white"
              >
                .
              </KeyButton>
            </div>
          </div>
        </div>
        <div className="grid-item grid-item-gap grid-margins">
          <KeyButton
            color="white"
            height="full"
            styles={`full-height border-radius-50 border-rounded button-equal-${theme} border-radius-50`}
          >
            =
          </KeyButton>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
