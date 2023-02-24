import * as React from 'react';

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
    date: new Date('2023-01-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers!',
    amount: 89.29,
    date: new Date('2023-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas!',
    amount: 5.99,
    date: new Date('2023-01-04'),
  },
  {
    id: 'e4',
    description: 'A book!',
    amount: 14.99,
    date: new Date('2023-02-20'),
  },
  {
    id: 'e5',
    description: 'Another book!',
    amount: 18.59,
    date: new Date('2023-02-18'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes!',
    amount: 59.99,
    date: new Date('2023-02-19'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers!',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e8',
    description: 'Some bananas!',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e9',
    description: 'A book!',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e10',
    description: 'Another book!',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
];

type ContextType = {
  expenses: ExpensesObjectType[];
  addExpense: ({
    description,
    amount,
    date,
  }: {
    description: string;
    amount: number;
    date: string;
  }) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (
    id: string,
    {
      description,
      amount,
      date,
    }: {description: string; amount: number; date: string},
  ) => void;
};

export const ExpensesContext = React.createContext<ContextType>({
  expenses: [],
  addExpense: ({
    description,
    amount,
    date,
  }: {
    description: string;
    amount: number;
    date: string;
  }) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    {
      description,
      amount,
      date,
    }: {description: string; amount: number; date: string},
  ) => {},
});

const expensesReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense: any) => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatableExpense;
    case 'DELETE':
      return state.filter((expense: any) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({children}: {children: React.ReactNode}) => {
  const [expensesState, dispatch] = React.useReducer(
    expensesReducer,
    DUMMY_EXPENSES,
  );

  const addExpense = (expenseData: any) => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = (id: any) => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id: any, expenseData: any) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        id: id,
        data: expenseData,
      },
    });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
