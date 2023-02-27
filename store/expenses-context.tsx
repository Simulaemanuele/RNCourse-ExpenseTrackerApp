import * as React from 'react';

export type ExpensesObjectType = {
  id?: string;
  description?: string;
  amount?: number;
  date?: Date;
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
  addExpense: (expensesData: State) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expensesData: State) => void;
};

export const ExpensesContext = React.createContext<ContextType>({
  expenses: [],
  addExpense: (expensesData: State) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, expensesData: State) => {},
});

enum ActionKind {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

interface ActionType {
  type: ActionKind;
  payload: {
    id?: string;
    data?: ExpensesObjectType[];
  };
}

interface State {
  data: ExpensesObjectType[];
}

function expensesReducer(state: State, action: ActionType) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      // state.data.push({...action.payload.data, id: id,}, ...state.data)
      return [{...action.payload.data, id: id}, ...state.data];
    case 'UPDATE':
      const updatableExpenseIndex = state.data.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state.data[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state.data];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      const filteredState = state.data.filter(
        expense => expense.id !== action.payload.id,
      );
      return filteredState;
    default:
      return state;
  }
}

const initialStateReducer: State = {
  data: DUMMY_EXPENSES,
};

const ExpensesContextProvider = ({children}: {children: React.ReactNode}) => {
  const [expensesState, dispatch] = React.useReducer<
    (state: State, action: ActionType) => State | ExpensesObjectType[]
  >(expensesReducer, initialStateReducer as never);

  const addExpense = (expenseData: State) => {
    dispatch({type: 'ADD' as ActionKind, payload: {data: expenseData.data}});
  };

  const deleteExpense = (id: string) => {
    dispatch({type: 'DELETE' as ActionKind, payload: {id: id}});
  };

  const updateExpense = (id: string, expenseData: State) => {
    dispatch({
      type: 'UPDATE' as ActionKind,
      payload: {
        id: id,
        data: expenseData.data,
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
