import useCounterStore from '../store/counterStore';
import useDataStore from '../store/dataStore';
import { useNavigate } from 'react-router-dom';
const friendsListing = () => {
  const navigate = useNavigate();
  const { count } = useCounterStore();
  const { fetchData } = useDataStore();
  const handleClick = () => {
    fetchData();
    navigate('/');
  };
  return (
    <div>
      <h1>Pesquisar amigos</h1>
      <p className="text-center">{count}</p>

      <button className="btn btn-primary" onClick={handleClick}>
        Buscar dados
      </button>
    </div>
  );
};

export default friendsListing;
