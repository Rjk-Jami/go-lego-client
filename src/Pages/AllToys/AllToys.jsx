import React, { useEffect, useState } from 'react';
import TableRow from '../TableRow/TableRow';

const AllToys = () => {
  const [toys, setToys, ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('all');

  useEffect(() => {
    fetchToys(sort);
  }, [sort]);

  const fetchToys = async sort => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:5000/allToys?sort=${sort}`);
      const data = await response.json();
      setToys(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching toys:', error);
    }
  };

  const handleSort = sortType => {
    setSort(sortType);
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="container mx-auto flex justify-between items-center py-2" >
        <h2 className="text-2xl font-semibold">Showing toys: ({toys.length})</h2>

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
      {loading && (
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
    </div>
  );
};

export default AllToys;
