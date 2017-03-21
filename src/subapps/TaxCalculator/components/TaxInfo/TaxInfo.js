import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';

import theme from '../../../../themes/base-theme';

const INCOME_SLABS = [
  250000,
  500000,
  1000000,
];

const SURCHARGE_THRESHOLD = 10000000;

const styles = {
  text: {
    color: theme.whiteText,
  },
};

class TaxInfo extends Component {
  static propTypes = {
    amount: PropTypes.number.isRequired,
  }

  getTax() {
    return this.getTotalSlabs() + this.getSurcharge() + this.getCess();
  }

  getPercentage = () => {
    const { amount } = this.props;
    const tax = this.getTax();
    const percentage = (tax / amount) * 100;
    return percentage.toFixed(4);
  }

  getSlab1 = () => {
    const { amount } = this.props;
    const per = 0.1;
    if (amount < INCOME_SLABS[0]) {
      return 0;
    } else if (amount < INCOME_SLABS[1]) {
      return per * (amount - INCOME_SLABS[0]);
    }
    return per * (INCOME_SLABS[1] - INCOME_SLABS[0]);
  }

  getSlab2 = () => {
    const { amount } = this.props;
    const per = 0.2;
    if (amount < INCOME_SLABS[1]) {
      return 0;
    } else if (amount < INCOME_SLABS[2]) {
      return per * (amount - INCOME_SLABS[1]);
    }
    return per * (INCOME_SLABS[2] - INCOME_SLABS[1]);
  }

  getSlab3 = () => {
    const { amount } = this.props;
    const per = 0.3;
    if (amount < INCOME_SLABS[2]) {
      return 0;
    }
    return per * (amount - INCOME_SLABS[2]);
  }

  getTotalSlabs() {
    return this.getSlab1() + this.getSlab2() + this.getSlab3();
  }

  getSurcharge = () => {
    const { amount } = this.props;
    if (amount < SURCHARGE_THRESHOLD) {
      return 0;
    }
    return 0.12 * this.getTotalSlabs();
  }

  getCess() {
    return 0.03 * (this.getTotalSlabs() + this.getSurcharge());
  }

  render() {
    const { amount } = this.props;
    return (
      <View>
        <Text style={styles.text}>Total Money: {amount.toFixed(2)} rs</Text>
        <Text style={styles.text}>Slab 1: {this.getSlab1().toFixed(2)} rs</Text>
        <Text style={styles.text}>Slab 2: {this.getSlab2().toFixed(2)} rs</Text>
        <Text style={styles.text}>Slab 3: {this.getSlab3().toFixed(2)} rs</Text>
        <Text style={styles.text}>Total Slab: {this.getTotalSlabs().toFixed(2)} rs</Text>
        <Text style={styles.text}>Surcharge: {this.getSurcharge().toFixed(2)} rs</Text>
        <Text style={styles.text}>Cess: {this.getCess().toFixed(2)} rs</Text>
        <Text style={styles.text}>Total Tax: {this.getTax().toFixed(2)} rs</Text>
        <Text style={styles.text}>{this.getPercentage()} %</Text>
      </View>
    );
  }
}

export default TaxInfo;
