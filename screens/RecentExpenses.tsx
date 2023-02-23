import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
