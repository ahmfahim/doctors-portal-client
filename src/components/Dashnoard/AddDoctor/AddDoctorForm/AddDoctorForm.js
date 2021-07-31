import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddDoctorForm = () => {
        const [imageUrl, setImageUrl] = useState(null);
        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => {
            const eventData = {
                name: data.name,
                email:data.email,
                imageURL: imageUrl
            };
            console.log(eventData)
            const url = `http://localhost:5000/addADoctor`;
            fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(eventData)
            })
                .then(res => console.log(res))

        };

        const handleImageValueUpload = (event) => {
            console.log(event.target.files[0]);
            const imageData = new FormData();
            imageData.set('key', '6199732338060ba54b2363cc1bae4a89');
            imageData.append('image', event.target.files[0]);

            axios.post('https://api.imgbb.com/1/upload', imageData)
                .then(function (response) {
                    setImageUrl(response.data.data.display_url);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        return (
            <div className=" container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="name"  className="form-group" type="text"{...register("name")} />
                    <br />
                    <input defaultValue="email" className="form-group" type="text" {...register("email")} />
                    <br />
                    <input type="file" onChange={handleImageValueUpload} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button className="btn btnStyle mt-3" type="submit">Add Doctor</button>
                </form>
            </div>
        );
};

export default AddDoctorForm;