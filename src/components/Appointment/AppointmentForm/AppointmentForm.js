import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { GiCrossMark } from 'react-icons/gi';
import "./AppointmentForm.css"


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, bookDate}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        closeModal();
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="text-brand">
                    <GiCrossMark style={{fontSize:"25px"}} onClick={closeModal}/>
                </div>
                <h3 className="text-brand text-center">{appointmentOn}</h3>
                <p className="text-brand2 text-center">
                    <strong>{bookDate.toDateString()}</strong>
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" name="name" {...register("name", { required: true })} placeholder="Your Name" /> <br />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" name="phone" {...register("phone", { required: true })} placeholder="Your Phone Number" /> <br />
                        {errors.phone && <span className="text-danger">Phone number is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" {...register("email", { required: false })} placeholder="Your Email"/> <br />
                    </div>
                    <div className="row form-group2">
                        <div className="col-4">
                            <select name="gender" id=""{...register("gender", { required: true })}>
                                <option value="Not Set" disabled={true}>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not Set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">Gender is required</span>}
                        </div>
                        <div className="form-group2 col-4">
                            <input type="number" name="age" {...register("age", { required: true })} placeholder="Age" /> <br />
                            {errors.age && <span className="text-danger">Age required</span>}
                        </div>
                        <div className="form-group2 col-4">
                            <input type="number" name="Weight" {...register("Weight", { required: true })} placeholder="Weight" /> <br/>
                            {errors.Weight && <span className="text-danger">Weight required</span>}
                        </div>
                    </div>
                    
                    <div className="form-group d-flex justify-content-end">
                        <button type="submit" className="btn sendBtn btnStyle">SEND</button>
                    </div>  
                </form>
                
            </Modal>
        </div>
    );
};

export default AppointmentForm;