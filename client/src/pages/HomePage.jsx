import Container from "../components/container/Container";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import TickersList from "../components/ticersList/TickersList";

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <SearchBar />
      <Container>
        <TickersList />
      </Container>
    </>
  );
};

export default HomePage;
