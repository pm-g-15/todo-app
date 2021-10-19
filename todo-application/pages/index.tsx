import { FilterBar, Layout, Searchbar, ToDoItems } from '@components/common';

const Home = (): JSX.Element => {
  return (
    <>
      <Searchbar />

      <ToDoItems />

      <FilterBar />
    </>
  );
};

Home.Layout = Layout;

export default Home;
