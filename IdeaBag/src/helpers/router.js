import { createRouter } from '@exponent/ex-navigation';

import Home from '../containers/Home';

const Router = createRouter(() => ({
  home: () => Home,
}));

export default Router;
