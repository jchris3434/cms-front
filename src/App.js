import logo from './logo.svg';
import './App.css';
import HeaderButton from './shared/components/HeaderButton';

const darkmode = true;

function App() {
  return (<>
    <HeaderButton darkmode={darkmode.toString()} icon='bi-tools' text='text' redirect='https://fondespierre.com/'/>
  </>);
}

export default App;
