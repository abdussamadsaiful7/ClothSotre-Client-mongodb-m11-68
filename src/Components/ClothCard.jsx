import React from 'react';
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClothCard = ({ cloth, cloths, setCloths }) => {
    const { _id, name, model, type, price, producer, release, photo } = cloth;

    const handleDelete = (_id) => {
       // console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cloth/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cloths.filter(clo => clo._id !== _id);
                            setCloths(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className=' shadow-xl mx-52 mt-8 mb-10'>
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img className='w-64 h-64' src={photo} alt="" />
                    </div>
                    <div className='ml-14'>
                        <p>Name: {name}</p>
                        <p>Model: {model}</p>
                        <p>Type: {type}</p>
                        <p>Price: {price}</p>
                        <p>Producer: {producer}</p>
                        <p>Release Date: {release}</p>
                    </div>
                </div>
                <div className='ml-14'>
                    <div className="btn-group btn-group-vertical space-y-6">
                        <button className="btn btn-sx bg-orange-300"><HiEye /></button>
                        <Link to={`/updateCloth/${_id}`}>
                            <button className="btn  btn-sx"><HiPencil /></button>
                        </Link>
                        <button onClick={()=> handleDelete(_id)} className="btn  btn-sx bg-red-500"><HiTrash /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClothCard;