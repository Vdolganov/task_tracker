import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ChartPage from 'pages/ChartPage';
import DragAndDrop from './pages/DragAndDrop';
import OneTaskPage from './pages/OneTask';

import './App.css';

const linkStyle = {
  color: '#000',
  padding: '2px 5px',
  border: '1px solid lightgray',
  textDecoration: 'none',

};

const HeaderComponent = () => (
  <header style={{ marginBottom: '10px', boxShadow: '1px 1px 6px lightgray', padding: '10px' }}>
    <Link to="/" style={linkStyle}>Board</Link>
    <Link to="/chart" style={linkStyle}>Chart</Link>
  </header>
);

const MainComponent = () => (
  <main>
    <Switch>
      <Route exact path="/" component={DragAndDrop} />
      <Route path="/task/:id" component={OneTaskPage} />
      <Route path="/chart" component={ChartPage} />
    </Switch>
  </main>
);

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
    </div>
  );
}

export default App;
