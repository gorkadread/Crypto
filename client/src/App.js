import './App.css';
// import Axios from "axios";
import { useEffect/*, useState*/ } from 'react';
// import Organisation from './Organisation';

export default function App() {
  // const [data, setData] = useState(null);

  useEffect(() => {
    /*Axios.get("https://date.nager.at/api/v2/publicholidays/2020/US").then(
      (resp) => {
        setData(resp.data);
      }
    );*/
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          The Collector
      </header>
      <div>
        
      </div>
    </div>
  );
}