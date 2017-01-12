import { createRouter } from '@exponent/ex-navigation';

import Home from '../containers/Home';
import AddJournal from '../containers/AddJournal';
import EditJournal from '../containers/EditJournal';

const Router = createRouter(() => ({
  home: () => Home,
  new: () => AddJournal,
  edit: () => EditJournal,
}));

export default Router;
