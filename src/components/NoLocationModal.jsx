import React from "react";
import TextReminderContainer from "../containers/TextReminderContainer";
import EmailReminderContainer from "../containers/EmailReminderContainer";

import {
  modal,
  modalHeader,
  closeButton,
  closeButtonWrapper,
} from "../styles/javascript/modalStyles";
import { DARK_GRAY } from "../styles/javascript/colors";

const NoLocationModal = ({ reminderType, isActive, onClose, onSubmit }) => {
  const visibleStyle = { display: "block" };
  const hiddenStyle = { display: "none" };

  const modalStyle = isActive ? modal : hiddenStyle;
  const modalIsTextType = reminderType === "text";
  const modalText = modalIsTextType
    ? "Get a text reminder."
    : "Get an email reminder.";
  const modalForm = modalIsTextType ? (
    <TextReminderContainer visible={true} isCompleted={false} />
  ) : (
    <EmailReminderContainer visible={true} isCompleted={false} />
  );

  return (
    <div style={modalStyle}>
      <div className="modal-wrapper">
        <div
          style={closeButtonWrapper}
          onClick={() => {
            onClose();
          }}
        >
          <span style={closeButton}>&times;</span>
        </div>

        <h4 style={modalHeader}>{modalText}</h4>
        <p style={{ color: DARK_GRAY, lineHeight: "28px", maxWidth: 350 }}>
          You'll receive a note on Take Back Day reminding you to clear your
          cabinets.
        </p>
        {modalForm}
      </div>
    </div>
  );
};

export default NoLocationModal;
