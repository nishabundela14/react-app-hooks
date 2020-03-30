import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import List from './components/List';
import Pagination from './components/Pagination';
import Search from './components/Search';

const App = () => {
    let [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit] = useState(20);
    const [terms, setTerms] = useState(null);
    const [sort, setSort] = useState('asc');

    const inputRef = useRef();

    useEffect(() => {
        const getPosts = async() => {
          setLoading(true);
          const res = await axios.get("http://localhost:3000/shipments");
          const arrs = res.data
          const p = arrs.sort((a,b) => {
            const aid = a.id.substring(1);
            const bid = b.id.substring(1);
            return bid - aid;
          });
          setPosts(p);
          setLoading(false);
         }
        getPosts();
    }, []);


    const handleSearch = (e,terms) => {
      e.preventDefault();
      const term = terms.current.value;
      setTerms(term);
        if (term) {
          setLoading(true);
          let pp = posts.filter(p => p.id === term);
          setPosts(pp);
          setLoading(false);
        }
    }

    const paginate = (page) => setPage(page);

    const sortByNum = (f) => {
      let data;
      let sorT;
        data = posts.sort((a,b) => {
          const aid = a.id.substring(1);
          const bid = b.id.substring(1);
          if (sort === 'asc') {
            sorT = 'desc';
            return aid - bid;
          } else {
            sorT = 'asc';
            return bid - aid;
          }
        });
      setPosts(data);
      setSort(sorT);
    }

    const sortByText = (f) => {
      let data;
      let sorT;
        data = posts.sort((a,b) => {
          const aid = a.id.substring(1);
          const bid = b.id.substring(1);
          if (sort === 'asc') {
            sorT = 'desc';
            return a['name'].localeCompare(b['name']);
          } else {
            sorT = 'asc';
            return b['name'].localeCompare(a['name']);
          }
        });
      setPosts(data);
      setSort(sorT);
    }

    const endIndex = page * limit;
    const startIndex = endIndex - limit;
    let currentPosts = posts.slice(startIndex, endIndex);


    return (
        <div>
          <h1>List of Shipments</h1>
            <Search handleSearch={handleSearch} inputRef={inputRef}/>
            <List posts={currentPosts} loading={loading} sortByText={sortByText} sortByNum={sortByNum}/>
            <Pagination limit={limit} totalPage={posts.length} paginate={paginate}/>
        </div>
    )
}

export default App
