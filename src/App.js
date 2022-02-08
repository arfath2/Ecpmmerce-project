import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Music from "./components/Layout/Body/Music";

function App() {
  const style = {
    'color': 'white',
    'backgroundColor': '#383e3e',
    'borderRadius': '5px',
    'border': 'none',
    'height': '34px',
    'width': '244px',
    'cursor': 'pointer',
    'alignItem': 'center',
    'marginLeft': '2%',
    'marginTop': '5%'
  }
  return (
    <div>
      <Header/>
      <Music/>
      <button style={style}>See The Cart</button>
      <Footer/>
    </div>
  );
}

export default App;
