import * as React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ExpensesObjectType } from '../../screens/AllExpenses';
import ExpensesSummary from './ExpensesSummary';


const ExpensesList = ({data}: {data: ExpensesObjectType[]}) => {
    return (
        <FlatList data={data} renderItem={(item) => }
    );
}

export default ExpensesList;

const styles= StyleSheet.create({

})