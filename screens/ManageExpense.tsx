import {NavigationProp, RouteProp} from '@react-navigation/native';
import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

const ManageExpense = ({
  route,
  navigation,
}: {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
}) => {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return <Text>Manage Expense!</Text>;
};

export default ManageExpense;

const styles = StyleSheet.create({});
