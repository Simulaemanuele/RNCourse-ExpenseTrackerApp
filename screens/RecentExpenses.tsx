import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext, ExpensesObjectType} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = React.useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter(
    (expense: ExpensesObjectType) => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);

      return expense.date > date7DaysAgo;
    },
  );
  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses} />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
