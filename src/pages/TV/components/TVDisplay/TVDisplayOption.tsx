import { useState } from "react";
import styled from "styled-components";
import ConfirmDialog from "../../../../components/dialog/ConfirmDialog";
import { useConfirmDialog } from "../../../../hooks/useConfirmDialog";

const TVDisplayOption = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const confirm = useConfirmDialog();

  const handleToggle = () => {
    if (isChecked) {
      confirm.showDialog({
        title: "Turn off display?",
        description: "Are you sure you want to power off the display?",
        confirmText: "Turn Off",
        cancelText: "Cancel",
        onConfirm: () => setIsChecked(false),
      });
    } else {
      setIsChecked(true);
    }
  };

  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider" />
      </label>

      <ConfirmDialog
        isOpen={confirm.isOpen}
        options={confirm.options}
        onClose={confirm.closeDialog}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  /* The switch - the box around the slider */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    border: 2px solid #383838;
    border-radius: 50px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 0 20px rgba(241, 9, 9, 0.8);
    border: 2px solid #e70404;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    left: 0.2em;
    bottom: 0.2em;
    background-color: rgb(233, 0, 0);
    border-radius: inherit;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .switch input:checked + .slider {
    box-shadow: 0 0 20px rgba(9, 241, 79, 0.8);
    border: 2px solid #04e763;
  }

  .switch input:checked + .slider:before {
    background-color: rgb(0, 233, 116);
  }

  .switch input:checked + .slider:before {
    transform: translateX(1.5em);
  }
`;

export default TVDisplayOption;
