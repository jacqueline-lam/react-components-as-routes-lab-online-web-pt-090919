import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => (
        <div key={i}>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
