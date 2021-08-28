import { Link } from 'gatsby';
import React from 'react';

const Banner = () => {
  return (
    <section>
      <div>
        <h1>Pomagamy młodym biznesom rozwinąć się w sieci</h1>
        <h2>
          Stwórzmy razem stronę internetową, która nada nowy wymiar twojej
          firmie
        </h2>
        <Link to="/portfolio">Zobacz portfolio</Link>
      </div>
    </section>
  );
};

export default Banner;
