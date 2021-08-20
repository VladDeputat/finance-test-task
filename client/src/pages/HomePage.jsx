import ConnectionButton from '../components/connectionBar/ConnectionButton';
import Container from '../components/container/Container';
import SearchBar from '../components/searchBar/SearchBar';
import TickersList from '../components/tickersList/TickersList';
import TimeScale from '../components/timeScale/TimeScale';

const HomePage = () => {
  return (
    <>
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
