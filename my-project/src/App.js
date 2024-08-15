import './App.css';
// import Register from './components/Register';
// import MarkdownEditor from './components/MarkdownEditor';
// import Logo from './components/Logo';
import SignIn from './components/SignIn';
// import AskQuestionWithMath from './components/AskQuestionWithMath';
// import BlogWritingPage from './components/BlogWritingPage';
// import Footer from './components/Footer';
// import FAQ from './components/FAQ';
// import Pyq from './components/Pyq';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className='flex justify-center'>
      <Navbar/>
      <SignIn/>
      </div>
      

      {/* <Logo/>
      <MarkdownEditor /> 
      <FAQ/>
      <SignIn/>
      <Register/>
      <AskQuestionWithMath/>
      <BlogWritingPage/>
      <Pyq/>
      <Navbar/>
      <Footer/> */}
    </div>
  );
}

export default App;
