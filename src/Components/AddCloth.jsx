import React from 'react';
import Swal from 'sweetalert2';

const AddCloth = () => {
    const handleAddCloth = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const model = form.model.value;
        const type = form.type.value;
        const price = form.price.value;
        const producer = form.producer.value;
        const release = form.release.value;
        const photo = form.photo.value;
        const newCloth = {name, model, type, price, producer, release, photo};
        console.log(newCloth);

        //send to the server;
        fetch('http://localhost:5000/cloth',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCloth)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleAddCloth} className="form-control px-20 py-20 bg-orange-100">
                <h1 className='text-center font-extrabold text-4xl'>Add Cloth</h1>

                 {/* name, model section */}
                <div className='flex items-center justify-center space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Model</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Model" name="model" className="input input-bordered" />
                        </label>
                    </div>
                </div>

                 {/* class, price section */}
                <div className='flex items-center justify-center space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Type" name="type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                        </label>
                    </div>
                </div>

                 {/* producer, release section */}
                <div className='flex items-center justify-center space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Producer</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Producer" name="producer" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Cloth Release</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Release Date" name="release" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* photo section */}
                <div className=' mx-auto ml-72 w-full'>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full max-w-md" />
                        </label>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <input className="btn btn-wide" type="submit" value="Add Cloth" />
                </div>
            </form>
        </div>
    );
};

export default AddCloth;