import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import './Expenses.css';


function App() {
  const expenses = [
    {
      location: 'Shopping Mall',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { location: 'Tv Showroom', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      location: 'Car Showroom',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      location: 'x Furniture',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  return (
    <div>
      <NewExpense/>
      <div className="expenses">
      
        {/* <ExpenseItem title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location} />
      <ExpenseItem title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location} />
      <ExpenseItem title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location} />
      <ExpenseItem title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location} /> */}
        {
          expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              title={expense.title}
              amount={expense.amount}
              location={expense.location}
              date={expense.date}
            />

          ))
        }


      </div>
    </div>
  );
}

export default App;
