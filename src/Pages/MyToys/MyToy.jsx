import React from 'react';
import { FaStar, FaTrashAlt, FaCogs } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyToy = ({ toy ,handleDeleteMyToy}) => {
    const { _id, sellerName, rating, price, name, message, imgLink, email, category, availableQuantity, applyDate } = toy










    return (
        <>
        <tbody className='overflow-x-scroll'>

            <tr >
                <th>
                <div className="tooltip tooltip-error" data-tip="Delete">
                    <button onClick={()=>handleDeleteMyToy(_id)} className="btn btn-error  btn-xs"><FaTrashAlt></FaTrashAlt></button>
                
                </div>
                </th>

                <td >
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle  w-6 md:w-32">
                                <img src={imgLink} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>

                        </div>
                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-semibold"><p>{category}</p></div>

                    </div>
                </td>

                <td>
                    <div className="font-bold">
                        <p>{price}<span className='font-normal'> TK</span></p>
                    </div>
                </td>
                <td className={availableQuantity >= 4 ? 'text-success font-bold' : availableQuantity <= 3 ? 'text-error font-bold' : ''}>
                    {availableQuantity}
                </td>
                <td>
                    <div className="">
                        <p>{applyDate}</p>
                    </div>
                </td>
                <td>
                    <div className="">
                        <p className='flex items-center'> {rating}<FaStar className='text-yellow-400'></FaStar></p>
                    </div>
                </td>
                <td>
                    <div className=" ">
                        <p>{message.slice(0, 20)}...</p>
                    </div>
                </td>
                <th>
                    <div className="tooltip tooltip-accent" data-tip="Update"> 
                    <Link to={`/updateToys/${_id}`}><button className='btn btn-info btn-xs'><FaCogs> </FaCogs></button></Link>
            
                    </div>

                </th>
            </tr>


        </tbody>
        
        </>
    );
};

export default MyToy;