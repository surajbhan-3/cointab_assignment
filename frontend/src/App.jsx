
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Post from './pages/Post/Post';
function App() {
  return (
     
<BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/post" element={<Post/>}/>
     </Routes>
</BrowserRouter>
  );
}

export default App;
