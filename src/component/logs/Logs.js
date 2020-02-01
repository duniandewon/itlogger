import React, { useState, useEffect, Fragment } from 'react';

const Logs = () => {
  const [Logs, setLogs] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  useEffect(() => {
    getLogs();
    //   eslint-disable-next-line
  }, []);

  if (Loading) return <h4>Loading...</h4>;

  return (
    <Fragment>
      <ul className='collection-with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!Loading && Logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          Logs.map(log => <li>{log.message}</li>)
        )}
      </ul>
    </Fragment>
  );
};

export default Logs;
