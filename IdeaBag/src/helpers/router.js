import { createRouter } from '@exponent/ex-navigation';

import Home from '../containers/Home';
import Category from '../containers/Category';
import Item from '../containers/Item';
import Bookmarks from '../containers/Bookmarks';

const Router = createRouter(() => ({
  home: () => Home,
  category: () => Category,
  item: () => Item,
  bookmarks: () => Bookmarks,
}));

export default Router;
