import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';

const User = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setUser(name);
    navigate('/');
  };

  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text">Qual o seu nome</span>
        </label>
        <input
          type="text"
          placeholder="Seu nome"
          id="name"
          name="name"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <button className="btn btn-outline btn-primary">Fazer Login</button>
      </form>
    </div>
  );
};

export default User;
