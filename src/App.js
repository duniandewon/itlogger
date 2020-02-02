import React, { useEffect, Fragment } from 'react';

/** redux */
import { Provider } from 'react-redux';
import store from './sotre';

/** layout */
import SearchBar from './component/layout/SearchBar';
import AddBtn from './component/layout/AddBtn';

/** logs component */
import Logs from './component/logs/Logs';
import AddLogModal from './component/logs/AddLogModal';
import EditLogModal from './component/logs/EditLogModal';

/** techs component */
import TechListModal from './component/techs/TechListModal';
import AddTechModal from './component/techs/AddTechModal';

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
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <TechListModal />
          <AddTechModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
