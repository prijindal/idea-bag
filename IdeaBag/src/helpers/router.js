import { createRouter } from '@exponent/ex-navigation';

import Home from '../containers/Home';
import Category from '../containers/Category';
import Item from '../containers/Item';

const Router = createRouter(() => ({
  home: () => Home,
  category: () => Category,
  item: () => Item,
}));

export default Router;
