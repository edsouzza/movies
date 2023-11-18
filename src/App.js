import Banner from "./components/Banner";
import Categoria from "./components/Categoria";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner image="home"/>
      <Container>
        <Categoria categoria="Geografia"/>
      </Container>
      <Footer />
    </>
  );
}

export default App;