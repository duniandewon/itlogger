import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**Actions */
import { addLogs } from '../../actions/logActions';

/** Components */
import TechsOptionSelect from '../techs/TechsOptionSelect';

/** Materialize CSS and JS */
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLogs }) => {
  const [Logs, setLogs] = useState({
    message: '',
    tech: '',
    attention: false
  });

  const { message, tech, attention } = Logs;

  const handleChange = e =>
    setLogs({ ...Logs, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (message === '' || tech === '') {
      M.toast({ html: 'Pleas enter a message and select a tech' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

      addLogs(newLog);

      M.toast({ html: `Log added by  ${tech}` });
    }

    setLogs({
      message: '',
      tech: '',
      attention: false
    });
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              name='message'
              value={message}
              onChange={handleChange}
              type='text'
            />
            <label htmlFor='message' className='active'>
              Log message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={handleChange}
            >
              <option value='' disabled>
                Select technician
              </option>
              <TechsOptionSelect />
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setLogs({ ...Logs, attention: !attention })}
                />
                <span>Needs tttention</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%'
};

AddLogModal.propTypes = {
  addLogs: PropTypes.func.isRequired
};

export default connect(null, { addLogs })(AddLogModal);
