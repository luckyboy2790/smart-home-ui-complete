import React, { useState } from "react";

const SecurityKeyPad = ({
  setStatus,
}: {
  setStatus: React.Dispatch<
    React.SetStateAction<"ready" | "success" | "wrong">
  >;
}) => {
  const [pin, setPin] = useState("");

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (/^[0-9]$/.test(key) && pin.length < 4) {
        setPin((prevPin) => {
          const newPin = prevPin + key;
          if (newPin.length === 4) {
            handleSubmit(newPin);
          }
          return newPin;
        });
      }

      if (key === "Backspace") {
        setPin((prevPin) => prevPin.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pin]);

  const handleNumberClick = (num: number) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        handleSubmit(newPin);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleClear = () => {
    setPin("");
  };

  const handleSubmit = (submittedPin?: string) => {
    console.log(submittedPin);

    if (submittedPin === "1234") {
      setStatus("success");
    } else {
      setStatus("wrong");

      setTimeout(() => {
        setPin("");
        setStatus("ready");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 text-white">
      <h2 className="mb-6 text-2xl font-semibold">Enter PIN code</h2>
      <div className="mb-4 flex gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded-full ${
              pin.length > i ? "bg-white" : "bg-[#ccccccc5]"
            }`}
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10">
        {[
          { num: 1, text: "ABC" },
          { num: 2, text: "DEF" },
          { num: 3, text: "GHI" },
          { num: 4, text: "JKL" },
          { num: 5, text: "MNO" },
          { num: 6, text: "PQR" },
          { num: 7, text: "STU" },
          { num: 8, text: "VWX" },
          { num: 9, text: "YZ" },
          { action: "clear", label: "C" },
          { num: 0, text: "" },
          { action: "delete", label: "⌫" },
        ].map((item, index) => (
          <button
            key={index}
            className="w-18 h-18 flex flex-col items-center justify-center text-lg font-bold rounded-full bg-[#707070] hover:bg-[#707070]/80 cursor-pointer"
            onClick={() => {
              if (item.num !== undefined) handleNumberClick(item.num);
              if (item.action === "clear") handleClear();
              if (item.action === "delete") handleDelete();
            }}
          >
            {item.num !== undefined ? (
              <>
                <span>{item.num}</span>
                <span className="text-[9px] text-gray-300">{item.text}</span>
              </>
            ) : (
              item.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SecurityKeyPad;
