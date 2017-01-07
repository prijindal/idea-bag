import { createRouter } from '@exponent/ex-navigation';

import Home from '../containers/Home';
import Category from '../containers/Category';

const Router = createRouter(() => ({
  home: () => Home,
  category: () => Category,
}));

export default Router;
