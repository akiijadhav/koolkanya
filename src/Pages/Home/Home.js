import React from 'react';
//Import form from Components / FormHome
import FormHome from '../../Components/FormHome/FormHome';
//styles for Home
import  './Home.scss';

const Home = () => {
    return (
            <div className="registerationForm">
                <div className="registerationFormContainer">
                    <h2 className="formTitle">Registeration Form</h2>
                </div>
                <FormHome />
               
            </div>
    )
}

export default Home;
