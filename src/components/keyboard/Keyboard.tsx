import { useState } from "react";
import KeyButton from "../keyButton/KeyButton";
import "./styles.css";

interface IKeyboard {
  theme: "dark" | "light";
  handleEqual: () => void;
  reset: () => void;
  handleOperation: (operation: string) => void;
  handleDelete: () => void;
}

const Keyboard = ({
  theme,
  handleEqual,
  handleOperation,
  handleDelete,
  reset,
}: IKeyboard) => {
  const [bracket, setBracket] = useState<"(" | ")">("(");

  const toggleBracket = () => {
    setBracket(bracket === "(" ? ")" : "(");
  };

  return (
    <div className="keyboard-container">
      <div className="grid-container column-4 grid-margins">
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-reset-${theme}`}
            color="white"
            action={reset}
          >
            C
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-reset-${theme}`}
            color="white"
            action={handleDelete}
          >
            DEL
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
            action={() => {
              handleOperation("/");
            }}
          >
            /
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
            action={() => {
              handleOperation("*");
            }}
          >
            *
          </KeyButton>
        </div>
      </div>

      <div className="grid-container column-4 grid-margins">
        <div className="grid-item  grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
            action={() => {
              handleOperation("7");
            }}
          >
            7
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
            action={() => {
              handleOperation("8");
            }}
          >
            8
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
            action={() => {
              handleOperation("9");
            }}
          >
            9
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
            action={() => {
              handleOperation("+");
            }}
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
            action={() => {
              handleOperation("4");
            }}
          >
            4
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
            action={() => {
              handleOperation("5");
            }}
          >
            5
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-number-${theme}`}
            color="white"
            action={() => {
              handleOperation("6");
            }}
          >
            6
          </KeyButton>
        </div>
        <div className="grid-item grid-item-gap">
          <KeyButton
            styles={`size-60 border-rounded button-oper-${theme}`}
            color="white"
            action={() => {
              handleOperation("-");
            }}
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
                action={() => {
                  handleOperation("1");
                }}
              >
                1
              </KeyButton>
            </div>
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-number-${theme}`}
                color="white"
                action={() => {
                  handleOperation("2");
                }}
              >
                2
              </KeyButton>
            </div>
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-number-${theme}`}
                color="white"
                action={() => {
                  handleOperation("3");
                }}
              >
                3
              </KeyButton>
            </div>
          </div>
          <div className="grid-container grid-item-gap  grid-item grid-item grid-margins  column-3">
            <div className="grid-item">
              <div className="container-brackets">
                <KeyButton
                  styles={`size-60 border-rounded button-oper-${theme}`}
                  color="white"
                  action={() => {
                    handleOperation(bracket);
                  }}
                >
                  {bracket}
                </KeyButton>
                <button onClick={toggleBracket} className="button-change">
                  {bracket === "(" ? ")" : "("}
                </button>
              </div>
            </div>
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-number-${theme}`}
                color="white"
                action={() => {
                  handleOperation("0");
                }}
              >
                0
              </KeyButton>
            </div>{" "}
            <div className="grid-item">
              <KeyButton
                styles={`size-60 border-rounded button-oper-${theme}`}
                color="white"
                action={() => {
                  handleOperation(".");
                }}
              >
                .
              </KeyButton>
            </div>
          </div>
        </div>
        <div className="grid-item grid-item-gap grid-margins">
          <KeyButton
            action={handleEqual}
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
