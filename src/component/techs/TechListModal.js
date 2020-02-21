import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Tech actions */
import { getTechs } from '../../actions/techActions';

/** comoponents */
import TechItem from './TechItem';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //   eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
          <h4>Technicians List</h4>
          <ul className='collection'>
            {!loading &&
              techs !== null &&
              techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
