import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Actions */
import { addTech } from '../../actions/techActions';

/** Materialize CSS and JS */
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [Techs, setTechs] = useState({
    firstName: '',
    lastName: ''
  });

  const { firstName, lastName } = Techs;

  const handleChange = e =>
    setTechs({ ...Techs, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Pleas enter the firs and last name' });
    } else {
      addTech(Techs);
    }

    setTechs({
      firsName: '',
      lastName: ''
    });
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              name='firstName'
              defaultValue={firstName}
              onChange={handleChange}
              type='text'
            />
            <label htmlFor='firsName' className='active'>
              Fisrt Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              name='lastName'
              value={lastName}
              onChange={handleChange}
              type='text'
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
};

export default connect(null, { addTech })(AddTechModal);
