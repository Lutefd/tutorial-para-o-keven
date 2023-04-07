import { create } from 'zustand';

const useDataStore = create((set) => ({
  data: [],
  setData: (data) => set({ data }),
  fetchData: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    set({ data });
    if (response.status == 200) {
      console.log('Chamada com sucesso');
      console.log(data);
    }
  },
  clearData: () => set({ data: [] }),
}));

export default useDataStore;
