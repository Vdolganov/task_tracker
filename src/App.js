import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChartPage from 'pages/ChartPage';
import DragAndDrop from './pages/DragAndDrop';
import OneTaskPage from './pages/OneTask';
import { SideNavigation, ModalsLayout } from './components';
import './App.css';

const MainComponent = () => (
  <main style={{ width: '100%' }}>
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
      <ModalsLayout />
      <SideNavigation />
      <MainComponent />
    </div>
  );
}

export default App;
