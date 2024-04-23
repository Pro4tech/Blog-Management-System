import { Routes,Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login';
import Register from './pages/Register';
import MenuBoard from './pages/MenuBoard';
import BlogsPage from './pages/BlogsPage';
import AddBlog from './pages/AddBlog';
import SearchBlog from './pages/SearchBlog';
import AddCategory from './pages/AddCategory';
import EditBlog from './pages/EditBlog';
import ShowCategories from './pages/ShowCategory';
import EditCategory from './pages/EditCategory';
import BlogsPageSpecific from './pages/BlogsPageSpecific';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<MenuBoard />}></Route>
        <Route path='/blogs' element={<BlogsPage />}></Route>
        <Route path='/addBlog' element={<AddBlog />}></Route>
        <Route path='/search' element={<SearchBlog />}></Route>
        <Route path='/addCat' element={<AddCategory />}></Route>
        <Route path='/editBlog' element={<EditBlog />}></Route>
        <Route path='/editCat' element={<EditCategory />}></Route>
        <Route path='/Category' element={<ShowCategories />}></Route>
        <Route path='/blogsuser' element={<BlogsPageSpecific />}></Route>


        BlogsPageSpecific
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
