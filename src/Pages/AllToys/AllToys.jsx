import React, { useEffect, useState } from 'react';
import TableRow from '../TableRow/TableRow';
import useLegoTitle from '../../hooks/useLegoTitle';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllToys = () => {
  useLegoTitle('All Toys')
  const [toys, setToys,] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('all');
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchToys(sort);
  }, [sort]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });
  const fetchToys = async sort => {
    try {
      setLoading(true);

      const response = await fetch(`https://go-lego-server-rjk-jami.vercel.app/allToys?sort=${sort}`);
      const data = await response.json();
      setToys(data);
      setLoading(false);
      if (sort !== "all") {
        toast.success(`sort by ${sort}`)
      }
    } catch (error) {
      console.error('Error fetching toys:', error);
    }
  };


  const handleSort = sortType => {
    setSort(sortType);
  };
  const handleSearch = () => {
    fetch(`https://go-lego-server-rjk-jami.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  return (
    <div data-aos="fade-up" className="overflow-x-auto w-full">
      <div className="container mx-auto flex justify-between items-center py-2" >
        <h2 className="text-2xl font-semibold">Showing toys: ({toys.length})</h2>
        <div className="">
          <div className="form-control">
            <div className="input-group">

             
      
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className='btn btn-square' onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
            
          </div>
        </div>
      </div>

      <div className="dropdown-left dropdown dropdown-hover">
        <label tabIndex={0} className="btn btn-sm btn-secondary"> Filter by price: </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button onClick={() => handleSort('asc')} className={`btn btn-sm btn-primary ${sort === 'asc' ? 'active' : ''}`}>
            Ascending
          </button></li>
          <li><button onClick={() => handleSort('desc')} className={`btn btn-sm btn-secondary ${sort === 'desc' ? 'active' : ''}`}>
            Descending
          </button></li>
        </ul>
      </div>

    </div>
      {
    loading && (
      <div className="flex justify-center"><progress className="progress w-full container"></progress>
      </div>
    )
  }
  <table className="table w-full container mx-auto">
    <thead>
      <tr>
        <th>Toy</th>
        <th>Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
      </tr>
    </thead>

    {
      toys.map(toy => <TableRow key={toy._id} toy={toy} />)
    }


  </table>
    </div >
  );
};

export default AllToys;
