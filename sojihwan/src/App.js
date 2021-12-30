import Body from './Body/Body';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import JiwanBody from './Body/JiwanBody';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Route path="/"component={Body} exact/>
      <Route path="/BY_JIWAN" component={JiwanBody}/>
    </div>
  );
}

export default App;
