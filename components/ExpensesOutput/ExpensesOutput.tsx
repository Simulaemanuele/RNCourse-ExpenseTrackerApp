import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ExpensesObjectType} from '../../screens/AllExpenses';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
}: {
  expenses: ExpensesObjectType[];
  expensesPeriod: string;
}) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
