import ConnectionButton from '../components/connectionBar/ConnectionButton';
import Container from '../components/container/Container';
import Header from '../components/header/Header';
import SearchBar from '../components/searchBar/SearchBar';
import TickersList from '../components/tickersList/TickersList';
import TimeScale from '../components/timeScale/TimeScale';

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <SearchBar />
      <Container>
        <TimeScale />
        <ConnectionButton />
        <TickersList />
      </Container>
    </>
  );
};

export default HomePage;
