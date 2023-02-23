import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {DUMMY_EXPENSES} from './AllExpenses';

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={DUMMY_EXPENSES} />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
