import React from "react";
import styled from "styled-components";
import SecurityKeyPad from "./SecurityKeyPad";

interface WrapperProps {
  status: "ready" | "success" | "wrong";
}

const PINKeyPadSection = ({
  setPassStatus,
}: {
  setPassStatus: React.Dispatch<React.SetStateAction<"keypad" | "zone">>;
}) => {
  const [status, setStatus] = React.useState<"ready" | "success" | "wrong">(
    "ready"
  );

  React.useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setPassStatus("zone");
      }, 2000);
    } else {
      setPassStatus("keypad");
    }
  }, [status]);

  return (
    <StyledWrapper status={status}>
      <div className="card h-full">
        <SecurityKeyPad setStatus={setStatus} />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<WrapperProps>`
  height: 100%;
  min-width: 30%;
  .card {
    position: relative;
    width: 100%;
    background: #6f6f6f7a;
    color: #81818144;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 40px 14px;
    border-radius: 8px;
    cursor: pointer;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -1%;
    margin: auto;
    width: 102%;
    height: 102.3%;
    border-radius: 10px;
    background-color: ${({ status }) =>
      status === "ready"
        ? "#ffffffb3"
        : status === "success"
        ? "#0080ff"
        : "#d80000"};
    transition: background-color 0.8s ease-in-out, transform 0.8s ease-in-out;
    z-index: -10;
    pointer-events: none;
    transition: all 0.8s cubic-bezier(0.175, 0.95, 0.9, 1.275);
    box-shadow: 0px 20px 30px hsla(0, 0%, 0%, 0.521);
  }

  .heading {
    text-transform: capitalize;
    font-weight: 900;
    color: white;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .card p:last-child {
    color: #fa0000;
    font-weight: 900;
  }

  .card:hover::after {
    transition: all 0.2s cubic-bezier(0.175, 0.285, 0.82, 1.275);
  }

  .card:hover::before {
    transform: scaleX(1.02) scaleY(1.02);
    box-shadow: ${({ status }) =>
      status === "ready"
        ? "0px 0px 30px 0px hsla(255, 255, 255, 0.5)"
        : status === "success"
        ? "0px 0px 30px 0px hsla(210, 100%, 50%, 0.5)"
        : "0px 0px 30px 0px hsla(0, 100%, 50%, 0.5)"};
  }
`;

export default PINKeyPadSection;
