import React from 'react';

const TableRow = ({toy}) => {
    const {_id,sellerName,rating,price,name,message,imgLink,email,category ,availableQuantity,applyDate} =toy
    return (
        <tbody>
            {/* row 1 */}
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
                    <button className="btn btn-outline btn-xs bg-purple-200  hover:bg-purple-400">details</button>
                </th>
            </tr>


        </tbody>
    );
};

export default TableRow;