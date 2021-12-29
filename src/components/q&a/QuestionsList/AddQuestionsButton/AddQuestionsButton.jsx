import React from 'react';
import PropTypes from 'prop-types';
import { VscAdd } from 'react-icons/vsc';

const AddQuestionsButton = function ({ setOpenModal }) {
  const handleAdd = () => {
    setOpenModal({
      state: true,
      type: 'question',
    });
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      data-testid="add-question"
      onClick={handleAdd}
    >
      <VscAdd />
      &nbsp;ADD A QUESTION
    </button>
  );
};

export default AddQuestionsButton;

AddQuestionsButton.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
