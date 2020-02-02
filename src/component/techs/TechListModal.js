import React, { useState, useEffect, Fragment } from 'react';

/** comoponents */
import TechItem from './TechItem';

const TechListModal = () => {
  const [Techs, setTechs] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

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
            {!Loading &&
              Techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default TechListModal;
