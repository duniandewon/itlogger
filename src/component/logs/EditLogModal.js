import React, { useState } from 'react';

/** Materialize CSS and JS */
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
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
      console.log(message, tech, attention);
    }

    setLogs({
      message: '',
      tech: '',
      attention: false
    });
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
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
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sarah Cornor'>Sarah Cornor</option>
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

export default EditLogModal;
