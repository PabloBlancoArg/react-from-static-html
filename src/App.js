import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SectionAbout from './components/SectionAbout'
import Main from './components/Main'
import SectionContact from './components/SectionContact'
import SectionBlog from './components/SectionBlog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionAbout/>
      <Main/>
      <SectionContact/>
      <SectionBlog/>
      <Footer/>
    </div>
  );
}

export default App;
