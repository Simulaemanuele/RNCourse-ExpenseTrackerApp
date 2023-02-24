import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import {ExpensesObjectType} from '../../store/expenses-context';
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
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
