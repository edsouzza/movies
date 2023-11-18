import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner image="home"/>
      <Container>
        <h2>Geografia</h2>
        lista de videos
      </Container>
      <Footer />
    </>
  );
}

export default App;