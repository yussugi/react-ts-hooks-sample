import logo from './logo.svg';
import './App.css';
import CounterReducer from './components/CounterReducer';
import { Parent } from './components/Parent';
import { ParentUseCallback } from './components/ParentUseCallback';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { User } from './components/User';
import { UploadImage } from './components/UploadImage';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App Sample</h1>
        <User />
        <Clock />
        <Input />
        <CounterReducer initialValue={0} />
        <Parent />
        <ParentUseCallback />
        <UseMemoSample />
        <UploadImage />
      </header>
    </div>
  );
}

export default App;
