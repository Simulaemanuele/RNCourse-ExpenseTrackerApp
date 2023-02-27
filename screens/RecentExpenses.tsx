import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext, ExpensesObjectType} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = React.useContext(ExpensesContext);

  console.log(expensesCtx);

  let recentExpenses: ExpensesObjectType[] = [];

  if (expensesCtx !== undefined) {
    recentExpenses = expensesCtx.expenses.filter(
      (expense: ExpensesObjectType) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        if (expense.date !== undefined) {
          return expense.date >= date7DaysAgo && expense.date <= today;
        }
      },
    );
    return recentExpenses;
  }

  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses} />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
