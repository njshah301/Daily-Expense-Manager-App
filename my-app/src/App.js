import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/new Expense/NewExpense";
import Title from "./components/AppTitle/Title";
import Developer from "./components/Developer/Developer";
<<<<<<< HEAD
import React,{useState} from "react";
const dummy_expense = [
  // {
  //   id: "01",
  //   title: "dummy1",
  //   date: new Date(2021, 8, 22),
  //   amount: "2000",
  // },
  // {
  //   id: "02",
  //   title: "dummy2",
  //   date: new Date(2022, 9, 22),
  //   amount: "2000",
  // },
  // {
  //   id: "03",
  //   title: "dummy33",
  //   date: new Date(2001, 9, 22),
  //   amount: "2000",
  // },
  // {
  //   id: "04",
  //   title: "dummy4",
  //   date: new Date(2001, 9, 22),
  //   amount: "2000",
  // },
];
=======
import React,{useState,useEffect} from "react";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { firestore } from "./firebase_setup/firebase"


// const dummy_expense = [
//   {
//     id: "01",
//     title: "dummy1",
//     date: new Date(2021, 8, 22),
//     amount: "2000",
//   },
//   {
//     id: "02",
//     title: "dummy2",
//     date: new Date(2022, 9, 22),
//     amount: "2000",
//   },
//   {
//     id: "03",
//     title: "dummy33",
//     date: new Date(2001, 9, 22),
//     amount: "2000",
//   },
//   {
//     id: "04",
//     title: "dummy4",
//     date: new Date(2001, 9, 22),
//     amount: "2000",
//   },
// ];

>>>>>>> c0ba3e5826b84757214c04405dc6d3033a970ef6
function App() {

  const [dummy_expense,setTasks]=useState([]);
  useEffect(() => {
    const q = query(collection(firestore, "test_data"), orderBy('date', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.tile,
        date: doc.date,
        amount:doc.amount
      })))
    })
  },[])

  console.log(dummy_expense+"1")

  const [expense,setExpense]=useState(dummy_expense);
  const runExpenseHandler= (data) =>
  {
    
    setExpense((prevExpense) =>{
     return [data,...prevExpense];
    });

  };



 
  



  
  return (
         
          <div className="App">
          <div className="App-header">
          <Title />
          <NewExpense onExpenseClick={runExpenseHandler}></NewExpense>
          {console.log(expense)}
          <Expense expenses={expense}/>
          <Developer/>
          </div>
          </div>
          
  );
}

export default App;
