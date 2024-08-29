import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Calculator from './pages/Calculator';
import SearchUser from './pages/SearchUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const route = 
<BrowserRouter>
  <Routes>
    <Route path='/search-user' element={<SearchUser />} />
  </Routes>
</BrowserRouter>;

root.render(route);
