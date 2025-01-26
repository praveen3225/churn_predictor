import React, { useState } from "react";
import axios from "axios";

function InputForm()
{
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        tenureUsage: '',
        frequency: '',
        supportCalls: '',
        paymentDelay: '',
        subscriptionType: 'Basic',
        contractLength: 'Monthly',
        totalSpend: '',
        lastInteraction: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleWheel = (event) => {
        event.preventDefault();
      };
    
      const handleGenderChange = (e) => {
        setFormData({
          ...formData,
          gender: e.target.value, // Set gender to either 'Male' or 'Female'
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        let prediction=0;
        await axios.post('http://127.0.0.1:5000/submit', formData)
          .then((response) => {
            console.log(response.data.message);
            prediction = response.data.prediction
            if(prediction==1.0)
            {
              alert("The given data seems that the user will be churned away")
            }
            else{
              alert("The given data seems that the user will not be churned away")
            }
          })
          .catch((error) => {
            console.error('There was an error submitting the form!', error);
            alert('Failed to submit the form.');
          });
      };
      

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>User Information Form</h2>
                
                <label>
                    Age: (in years)
                    <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="no-spin"
                    />
                </label>
                
                <label>
                    Gender:
                    <div style={{display:'flex',justifyContent:"space-around",flexDirection:"row-reverse"}}>
                      <div>
                        <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleGenderChange}
                        />  
                      </div>
                      <div>
                        Male
                      </div>
                    </div>
                    <div style={{display:'flex',justifyContent:"space-around",flexDirection:"row-reverse"}}>
                      <div>
                        <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleGenderChange}
                        /> 
                      </div>
                      <div>
                        Female
                      </div>
                    </div>
                    
                </label>

                <label>
                    Tenure Usage:
                    <input
                    type="text"
                    name="tenureUsage"
                    value={formData.tenureUsage}
                    onChange={handleChange}
                    required
                    className="no-spin"
                    />
                </label>

                <label>
                    Frequency:
                    <input
                    type="text"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                    className="no-spin"
                    />
                </label>

                <label>
                    Support Calls:
                    <input
                    type="text"
                    name="supportCalls"
                    value={formData.supportCalls}
                    onChange={handleChange}
                    className="no-spin"
                    required
                    />
                </label>

                <label>
                    Payment Delay:
                    <input
                    type="text"
                    name="paymentDelay"
                    value={formData.paymentDelay}
                    onChange={handleChange}
                    required
                    className="no-spin"
                    />
                </label>

                <label>
                    Subscription Type:
                    <select
                    name="subscriptionType"
                    value={formData.subscriptionType}
                    onChange={handleChange}
                    >
                    <option value="Basic">Basic</option>
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                    </select>
                </label>

                <label>
                    Contract Length:
                    <select
                    name="contractLength"
                    value={formData.contractLength}
                    onChange={handleChange}
                    >
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Annual">Annual</option>
                    </select>
                </label>

                <label>
                    Total Spend:
                    <input
                    type="text"
                    name="totalSpend"
                    value={formData.totalSpend}
                    onChange={handleChange}
                    required
                    className="no-spin"
                    />
                </label>

                <label>
                    Last Interaction:
                    <input
                    type="text"
                    name="lastInteraction"
                    value={formData.lastInteraction}
                    onChange={handleChange}
                    required
                    onWheel={handleWheel}
                    className="no-spin"
                    />
                </label>

                <button type="submit">Submit</button>
            </form>            
        </>
    );
}

export default InputForm;