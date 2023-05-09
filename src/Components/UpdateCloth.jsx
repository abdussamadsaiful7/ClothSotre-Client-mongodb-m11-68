import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCloth = () => {
    const cloth = useLoaderData();
    const { _id, name, model, type, price, producer, release, photo } = cloth;

    const handleUpdatedCloth = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const model = form.model.value;
        const type = form.type.value;
        const price = form.price.value;
        const producer = form.producer.value;
        const release = form.release.value;
        const photo = form.photo.value;
        const updatedCloth = {name, model, type, price, producer, release, photo};
        console.log(updatedCloth);

        fetch(`http://localhost:5000/cloth/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updatedCloth)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee product Updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })
    }
    return (
        <div>
            <form onSubmit={ handleUpdatedCloth} className="form-control px-20 py-20 bg-orange-100">
                <h1 className='text-center font-extrabold text-4xl'>Add Update</h1>
                <div className='flex items-center justify-center space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Name" name="name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Model</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Model" name="model" defaultValue={model}  className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Type" name="type" defaultValue={type}   className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" name="price" defaultValue={price}   className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Producer</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Producer" name="producer" defaultValue={producer}   className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Release</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Release Date" name="release" defaultValue={release}   className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className=' mx-auto ml-72 w-full'>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="">
                            {/* <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" /> */}
                            <input type="text" placeholder="Photo URL" name="photo" defaultValue={photo}   className="input input-bordered w-full max-w-md" />
                        </label>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <input className="btn btn-wide" type="submit" value="Update Cloth" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCloth;