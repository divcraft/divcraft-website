import { Menu } from 'components';
import PropTypes from 'prop-types';
import React from 'react';

const MainLayout = ({children}) => ( 
      <>
      <header>
         <Menu />
      </header>
      <main>
         {children}
      </main>
      <footer>
         footer
      </footer>
         </>
    )

MainLayout.propTypes = {
   children: PropTypes.instanceOf(Object),
}

export default MainLayout;