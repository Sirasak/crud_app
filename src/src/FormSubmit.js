import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import './FormSubmit.css';

const FormSubmit = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const usersState = useSelector(state => state);
    
    const onSubmit = users => {
        const userWithId = {
            id: Math.random(),
            ...users
        }

        console.log(usersState);
        console.log(users);

        dispatch({type: 'SUBMIT', payload: userWithId})
    }

    console.log(errors);
  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="form-fullname-container">
                <div>
                    <label>Title:</label>
                    <select className="form-input-title"
                        name="title" 
                        ref={register({ required: true })}
                        >
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                    </select>
                </div>
                <div>
                    <label>First Name:</label>
                    <input 
                        type="text"
                        className="form-input-firstname"
                        placeholder="First Name" 
                        name="firstname" 
                        ref={register({required: true, maxLength: 80})} 
                        />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        className="form-input-lastname"
                        placeholder="Last Name" 
                        name="lastname" 
                        ref={register({required: true, maxLength: 80})} 
                        />
                </div>
            </div>
            <div                     className="form-input-birthday">
                <label>Birthday:</label>
                <input 
                    type="date" 
                    placeholder="Birthday" 
                    name="birthday" 
                    ref={register({required: true})} 
                    />
            </div>
            <div className="form-input-nationality">
                <label>Nationality:</label>
                <select 
                    name="nationality" 
                    ref={register({ required: true })}
                    >
                    <option value="Thai">Thai</option>
                    <option value="American">American</option>
                    <option value="Laos">Laos</option>
                    <option value="Chinese">Chinese</option>
                </select>    
            </div>
            <div className="form-citizen-container">
                <label>Citizen ID:</label>
                <input
                    type="text"
                    className="form-input-citizen-1" 
                    name="citizen1" 
                    ref={register({required: true})} 
                />-
                <input
                    type="text"
                    className="form-input-citizen-2" 
                    name="citizen2" 
                    ref={register({required: true})} 
                />-
                <input
                    type="text"
                    className="form-input-citizen-3" 
                    name="citizen3" 
                    ref={register({required: true})} 
                />-
                <input
                    type="text"
                    className="form-input-citizen-4" 
                    name="citizen4" 
                    ref={register({required: true})} 
                />-
                <input
                    type="text"
                    className="form-input-citizen-5" 
                    name="citizen5" 
                    ref={register({required: true})} 
                />                                                   
            </div>
            <div className="form-gender-container">
                <label>Gender:</label>
                <input 
                    name="gender"
                    className="form-input-gender" 
                    type="radio" 
                    value="Male" 
                    ref={register({ required: true })}
                    />
                    Male
                <input 
                    name="gender" 
                    type="radio" 
                    value="Female" 
                    ref={register({ required: true })}
                    />
                    Female
                <input 
                    name="gender" 
                    type="radio" 
                    value="Female" 
                    ref={register({ required: true })}
                    />
                    Unisex
            </div>
            <div className="form-input-mobile">
                <label>Mobile Phone:</label>
                <input 
                    type="tel"
                    placeholder="Mobile number" 
                    name="mobile" 
                    ref={register({required: true, minLength: 6, maxLength: 12})} 
                    />
            </div>
            <div className="form-input-passport">
                <label>Passport No:</label>
                <input 
                    type="text"
                    placeholder="Passport No" 
                    name="passport" 
                    ref={register({required: true, minLength: 6, maxLength: 12})} 
                    />
            </div>
            <div className="form-input-salary">
                <label>Expected Salary:</label>
                <input 
                    type="text"
                    placeholder="Expected Salary" 
                    name="salary" 
                    ref={register({required: true, minLength: 6, maxLength: 12})} 
                    />THB
            </div>
            <div className="form-submit-button-wrap">
                <input 
                type="submit"
                className="form-submit-button" />
            </div>
        </form>
    );
}

export default FormSubmit;