import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    skills: 'Skills',
    experience: '',
    qualities: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div>
 <section class="page-title centred pt_110">
            <div class="auto-container">
                <div class="content-box">
                    <h1>Job Apply</h1>
                    
                </div>
            </div>
        </section>
   
    <section className="job-form-section dark-section pt-110 pb-90">
      <div className="auto-container">
        <div className="sec-title centred pb-70 sec-title-animation animation-style2">
          <span className="sub-title mb-10 title-animation">REQUEST NEEDED TALENT</span>
          <h2 className="title-animation">Talented Professionals Needed</h2>
          <p className="title-animation">
            We are on the lookout for talented professionals who are eager to contribute to our <br />
            innovative and dynamic team.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row clearfix">
            {/* Basic Information Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <div className="title-box">
                  <div className="icon-box"><i className="icon-39"></i></div>
                  <h3>Basic Information</h3>
                  <p>Please fill out your contact person details here.</p>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input 
                      type="text" 
                      name="fname" 
                      placeholder="First Name" 
                      required 
                      value={formData.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input 
                      type="text" 
                      name="lname" 
                      placeholder="Last Name" 
                      required 
                      value={formData.lname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input 
                      type="text" 
                      name="phone" 
                      placeholder="Phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input 
                      type="text" 
                      name="address" 
                      placeholder="Address" 
                      required 
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Qualification Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <div className="title-box">
                  <div className="icon-box"><i className="icon-40"></i></div>
                  <h3>Qualification</h3>
                  <p>Please fill out your contact person details here.</p>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input 
                      type="text" 
                      name="education" 
                      placeholder="Education" 
                      required 
                      value={formData.education}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="select-box">
                      <select 
                        className="wide" 
                        name="skills" 
                        value={formData.skills}
                        onChange={handleChange}
                      >
                         <option data-display="Skills">Skills</option>
                         <option value="Executive">Executive</option>
                         <option value="Training">Training</option>
                         <option value="Career">Career</option>
                         <option value="Payroll">Payroll</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input 
                      type="text" 
                      name="experience" 
                      placeholder="Experience" 
                      required 
                      value={formData.experience}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input 
                      type="text" 
                      name="qualities" 
                      placeholder="Qualities" 
                      required 
                      value={formData.qualities}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <div className="upload-box">
                      <div className="icon-box">
                        <img src="assets/images/icons/icon-24.png" alt="" />
                      </div>
                      <input 
                        name="files" 
                        id="filer_input" 
                        multiple 
                        type="file" 
                      />
                      <button type="button">Upload Photo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="col-lg-12 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <div className="form-group">
                  <textarea 
                    name="additionalInfo" 
                    placeholder="Additional Information..." 
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group message-btn centred">
                  <button type="submit" className="theme-btn btn-one">Apply For Job</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    </div>
  );
};

export default JobApplicationForm;