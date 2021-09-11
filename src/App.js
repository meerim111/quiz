import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Layout from "./HOC/Layout/Layout";
import Quiz from "./containers/quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import Auth from "./containers/auth/Auth";


function App() {
  return (
    <Layout>
 <Switch>
   <Route path='/' exact component={QuizList} />
   <Route path='/quiz-creator' exact component={QuizCreator} />
   <Route path='/quiz/:id' exact component={Quiz} />
   <Route path='/auth' exact component={Auth} />
 </Switch>
    </Layout>
  );
}

export default App;
