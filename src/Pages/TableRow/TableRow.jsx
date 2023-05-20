import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({toy}) => {
    const {_id,sellerName,rating,price,name,message,imgLink,email,category ,availableQuantity,applyDate} =toy
    return (
        <tbody className=''>
           
            <tr >

                <td >
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-32">
                                <img src={imgLink} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <div className="font-semibold">{category}</div>

                    </div>
                </td>
                <td>
                   <div className="font-bold">
                    {price}<span className='font-normal'> TK</span>
                   </div>
                </td>
                <td className={availableQuantity >= 4 ? 'text-success font-bold' : availableQuantity <= 3 ? 'text-error font-bold' : ''}>
  {availableQuantity}
</td>
                <th>
                    <Link to={`/allToys/${_id}`}><button className="btn btn-info btn-xs">details</button></Link>
                </th>
            </tr>


        </tbody>
    );
};

export default TableRow;