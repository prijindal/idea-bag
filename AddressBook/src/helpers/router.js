import { createRouter } from '@exponent/ex-navigation';

import Home from '../containers/Home';
import ContactPage from '../containers/ContactPage';

const Router = createRouter(() => ({
  home: () => Home,
  contact: () => ContactPage,
}));

export default Router;
