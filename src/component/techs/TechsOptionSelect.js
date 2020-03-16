import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Tech actions */
import { getTechs } from '../../actions/techActions';

const TechsOptionSelect = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();

    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {!loading &&
        techs !== null &&
        techs.map(tech => (
          <option value={`${tech.firstName} ${tech.lastName}`} key={tech.id}>
            {tech.firstName} {tech.lastName}
          </option>
        ))}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  tech: state.tech
});

TechsOptionSelect.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getTechs })(TechsOptionSelect);
