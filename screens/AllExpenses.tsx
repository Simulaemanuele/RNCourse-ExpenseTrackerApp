import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

export type ExpensesObjectType = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

export const DUMMY_EXPENSES: ExpensesObjectType[] = [
  {
    id: 'e1',
    description: 'A pair of shoes!',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers!',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas!',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book!',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book!',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

const AllExpenses = () => {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
