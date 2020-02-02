import React, { useState } from 'react';

/** Materialize CSS and JS */
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
  const [Message, setMessage] = useState('');
  const [Tech, setTech] = useState('');
  const [Attention, setAttention] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (Message === '' || Tech === '') {
      M.toast({ html: 'Pleas enter a message and select a tech' });
    } else {
      console.log(Message, Tech, Attention);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              name='message'
              value={Message}
              onChange={e => setMessage(e.target.value)}
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
              value={Tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
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
                  checked={Attention}
                  value={Attention}
                  onChange={e => setAttention(!Attention)}
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

export default AddLogModal;
