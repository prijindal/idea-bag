import AppShell from '../components/AppShell';
import TaxCalculator from './TaxCalculator';

const mapCatToApp = {
  Numbers: {
    2: TaxCalculator,
  },
};

export const getSubApp = (item, category) => {
  const itemMap = mapCatToApp[category.categoryLbl];
  if (itemMap) {
    const app = mapCatToApp[category.categoryLbl][item.id];
    if (app) {
      // const app = require(`./${appName}`); // eslint-disable-line global-require
      return app;
    }
  }
  return AppShell;
};

export default {};
