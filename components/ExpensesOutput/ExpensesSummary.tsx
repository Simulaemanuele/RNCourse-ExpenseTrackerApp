import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {ExpensesObjectType} from '../../screens/AllExpenses';

const ExpensesSummary = ({
  expenses,
  periodName,
}: {
  expenses: ExpensesObjectType[];
  periodName: string;
}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({});
