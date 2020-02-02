import React, { useEffect, Fragment } from 'react';

/** layout */
import SearchBar from './component/layout/SearchBar';
import AddBtn from './component/layout/AddBtn';

/** component */
import Logs from './component/logs/Logs';
import AddLogModal from './component/logs/AddLogModal';
import EditLogModal from './component/logs/EditLogModal';

/** Materialize CSS and JS */
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    /** Initialize materialize JS */
    M.AutoInit();
  }, []);
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
