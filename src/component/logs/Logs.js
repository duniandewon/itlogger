import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** Actions */
import { getLogs } from '../../actions/logActions';

/** Components */
import LogItem from './LogItem';

/** Layouts */
import Preloader from '../layout/PreLoader';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //   eslint-disable-next-line
  }, []);

  if (loading || logs === null) return <Preloader />;

  return (
    <Fragment>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map(log => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </Fragment>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
