import './App.css';
import Register from './components/Register';
import MarkdownEditor from './components/MarkdownEditor';
import Logo from './components/Logo';
import SignIn from './components/SignIn';
import AskQuestionWithMath from './components/AskQuestionWithMath';
import BlogWritingPage from './components/BlogWritingPage';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Pyq from './components/Pyq';

function App() {
  return (
    <div>
      <Logo/>
      <MarkdownEditor /> 
      <FAQ/>
      <SignIn/>
      <Register/>
      <AskQuestionWithMath/>
      <BlogWritingPage/>
      <Pyq/>
      <Footer/>
    </div>
  );
}

export default App;
