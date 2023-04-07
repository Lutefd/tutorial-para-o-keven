import { useState, useEffect } from 'react';
import useCounterStore from '../store/counterStore';
import useDataStore from '../store/dataStore';
import useUserStore from '../store/userStore';

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { count, increment, decrement } = useCounterStore();
  const { data, clearData } = useDataStore();
  const { user } = useUserStore();

  useEffect(() => {
    const filter = data.slice(0, count);
    setFilteredData(filter);
  }, [count, data]);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-4xl">Olá {user}</h1>
      <p>Quantos amigos você tem?</p>
      <p className="text-2xl text-center">{count}</p>
      <div className="flex gap-2">
        <button
          className={count < 10 ? 'btn btn-primary' : 'hidden'}
          onClick={increment}
          disabled={count > 9 ? true : false}
        >
          {' '}
          {count} + 1{' '}
        </button>
        <button
          className={count > 0 ? 'btn btn-primary' : 'hidden'}
          onClick={decrement}
        >
          {' '}
          {count} - 1{' '}
        </button>
      </div>
      {filteredData.length > 0 && (
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-2xl">Lista de amigos</h2>
          <ul>
            {filteredData.map((item) => (
              <li className="text-center" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mx-auto " onClick={clearData}>
            Limpar Dados
          </button>
        </div>
      )}
    </div>
  );
};
export default Home;
