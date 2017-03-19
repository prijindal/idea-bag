/* @flow */
import { StackNavigator } from 'react-navigation';

import Home from '../Home';
import Category from '../Category';
import Item from '../Item';
import Bookmarks from '../Bookmarks';

const Routes = StackNavigator({
  home: { screen: Home },
  category: { screen: Category },
  item: { screen: Item },
  bookmarks: { screen: Bookmarks },
}, {
  headerMode: 'none',
});

export default Routes;
