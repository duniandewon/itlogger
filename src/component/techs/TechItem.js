import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** Actions */
import { deleteTech } from '../../actions/techActions';

/** Initialize Materialize */
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({ html: 'Tech deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default connect(null, { deleteTech })(TechItem);
