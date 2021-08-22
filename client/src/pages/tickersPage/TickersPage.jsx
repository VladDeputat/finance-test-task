import ConnectionButton from '../../components/connectionBar/ConnectionButton';
import Container from '../../components/container/Container';
import RecommendsList from '../../components/recommendsList/RecommendsList';
import SearchBar from '../../components/searchBar/SearchBar';
import TickersList from '../../components/tickersList/TickersList';
import TimeSelect from '../../components/timeSelect/TimeSelect';
import { aside } from './TickersPage.module.scss';

const TickersPage = () => {
  return (
    <>
      <SearchBar />
      <Container>
        <div className={aside}>
          <TimeSelect />
          <ConnectionButton />
          <RecommendsList />
        </div>
        <TickersList />
      </Container>
    </>
  );
};

export default TickersPage;
