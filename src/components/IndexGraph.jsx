import React from 'react';
import '../assets/styles/IndexGraph.scss';

const IndexGraph = () => {
  return (
    <section className='index--graph'>
      <div className='graph--date_filter'>
        Dates
      </div>
      <div className='graph--current_value'>
        Current Value
      </div>
      <div className='graph--history'>
        Graph
      </div>
    </section>
  );
};

export default IndexGraph;
