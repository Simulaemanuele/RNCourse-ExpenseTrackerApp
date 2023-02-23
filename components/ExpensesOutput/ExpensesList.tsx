import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {ExpensesObjectType} from '../../screens/AllExpenses';
import ExpenseItem from './ExpenseItem';
import ExpensesSummary from './ExpensesSummary';

const renderExpenseItem = (itemData: {item: ExpensesObjectType}) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({expenses}: {expenses: ExpensesObjectType[]}) => {
  return (
    <>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
