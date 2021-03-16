import React from 'react';

import Header from './Header';
import ItemHeader from './ItemHeader';
import Item from './Item';
import BetSlip from './BetSlip';

import data from '../../assets/data.json';

import '../styles/styles.scss';

const App = () => (
  <main>
    <Header eventsCount={Object.values(data.Events).length} />
    {Object.values(data.Events).map((match, index) => (
      <div>
        <ItemHeader
          key={match.C}
          index={index}
          date={match.D}
          day={match.DAY}
          leagueName={match.N}
        />
        <Item
          key={match.C}
          id={match.C}
          clock={match.T}
          name={match.N}
          mbs={Object.values(match.OCG).map((ocg) => ocg.MBS)[0]}
          rates={match.OCG}
        />
      </div>
    ))}
    <BetSlip />
  </main>
);

export default App;
