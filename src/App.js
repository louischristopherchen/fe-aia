import { useState, useEffect, useCallback } from 'react';
import { Gallery, SearchInput, Pagination } from './components';
import axios from 'axios';
import styles from './index.module.css';

const App = () => {
  const {
    main,
    container,
    top
  } = styles
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(10);
  const perPage = 10;
  const [totalQuestion, setTotalQuestion] = useState(0);

  const getDetail = useCallback(async (tags) => {
    try {
      const { REACT_APP_API_URL } = process.env;
      const response = await axios.get(`${REACT_APP_API_URL}/flickr/${tags}`);
      // const { items } = response?.data?.value

      const tempData = [];
      for (var i = 0; i < response?.data?.value?.items.length / perPage; i++) {
        tempData.push(
          response?.data?.value?.items.slice(i * perPage, ((i + 1) * perPage))
        )
      }

      setList(tempData || []);
      setTotalQuestion(response?.data?.value?.items?.length || 0)
    } catch (err) {
      console.log(err.message)
    }
  }, [setList])


  useEffect(() => {
    getDetail()
  }, [getDetail])

  return (
    <div className={main}>
      <div className={container}>
        <div className={top}>
          <SearchInput
            value={search}
            onChange={(value) => { setSearch(value) }}
            onClick={() => getDetail(search)}
          />
          <Pagination
            onChange={setPage}
            page={page}
            totalPage={Math.ceil(totalQuestion / perPage)}
          />
        </div>
        <Gallery list={list[page - 1]||[]} />
      </div>
    </div>
  );
}

export default App;
