import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmploymentForm = () => {
    const app_number=localStorage.getItem("app_number");
    const name = localStorage.getItem("name");
    const navigate = useNavigate();
    /*-----------------------PRESENT EMPLOYEMENT-----------------------------------------------------*/
    const [presentData, setPresentData] = useState({
        app_number: app_number,
        present_position: "",
        organization: "",
        status: "",
        date_join: "",
        date_leave: "",
        duration: "",
        area_special:"",
        current_area:"",
    });
    const handleInputChangePresentEmp = (e) => {
        const { name, value } = e.target;
        setPresentData({ ...presentData, [name]: value });
    };
    const handleSubmitPresentEmp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/employment/createEmployment", presentData);
            localStorage.setItem("emp_id", response.data.emp_id); // Store emp_id in local storage
        } catch (error) {
            console.error("Error submitting present employement form:", error);
        }
    };
    /*-------------------------------------EMPLOYEMENT HISTORY---------------------------------------------- */
    const empId = parseInt(localStorage.getItem("emp_id"), 10);
    const [employmentHistory, setEmploymentHistory] = useState({
        empHistoryDetails: [
            {
                emp_id: empId, 
                position: "",
                organization: "",
                date_join: "",
                date_leave: "",
                duration: "",
            }
        ]
    });
    const handleInputChangeEmpHistory = (e, index) => {
        const { name, value } = e.target;
        const updatedData1 = [...employmentHistory.empHistoryDetails]
        updatedData1[index][name] = value;
        setEmploymentHistory({ ...employmentHistory, empHistoryDetails: updatedData1 });
    };
    const handleAddMore1 = () => {
        setEmploymentHistory({
            ...employmentHistory,
            empHistoryDetails: [
                ...employmentHistory.empHistoryDetails,
                {
                    emp_id: empId, 
                    position: "",
                    organization: "",
                    date_join: "",
                    date_leave: "",
                    duration: "",
                }
            ]
        });
    };
    const handleSubmitEmpHistory = async () => {
        try {
            // Iterate over each row in additionalDetails array
            for (let i = 0; i < employmentHistory.empHistoryDetails.length; i++) {
                const row = employmentHistory.empHistoryDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/employment/addEmpHistory", row);
                console.log(response.data);
            }
        } catch (error) {
            console.error("Error submitting employment history details details:", error);
        }
    };
    /* ---------------------------------TEACHING DETAILS---------------------------------------------------*/
    const [teachingDetails, setTeachingDetails] = useState({
        teachingDetails: [
            {
                emp_id: empId, 
                position: "",
                employer: "",
                course_taught: "",
                ug_pg: "",
                stud_number: "",
                date_join: "",
                date_leave: "",
                duration: "",
            }
        ]
    });
    const handleInputChangeTeachingDetails = (e, index) => {
        const { name, value } = e.target;
        const updatedData2 = [...teachingDetails.teachingDetails]
        updatedData2[index][name] = value;
        setTeachingDetails({ ...teachingDetails, teachingDetails: updatedData2 });
    };
    const handleAddMore2 = () => {
        setTeachingDetails({
            ...teachingDetails,
            teachingDetails: [
                ...teachingDetails.teachingDetails,
                {
                    emp_id: empId, 
                    position: "",
                    employer: "",
                    course_taught: "",
                    ug_pg: "",
                    stud_number: "",
                    date_join: "",
                    date_leave: "",
                    duration: "",
                }
            ]
        });
    };
    const handleSubmitTeaching = async (e) => {
        e.preventDefault();
        try {
            for (let i = 0; i < teachingDetails.teachingDetails.length; i++) {
                const row = teachingDetails.teachingDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/employment/addTeachExp", row);
                console.log(response.data);
            }
        } catch (error) {
            console.error("Error submitting teaching experience form:", error);
        }
    };
   /*----------------------------------------RESEARCH EXPERIENCE---------------------------------- */
        const [ResearchExperience, setResearchExperience] = useState({
            researchDetails: [
                {
                    emp_id: empId, 
                    position: "",
                    institute:"",
                    supervisor:"",
                    date_join: "",
                    date_leave: "",
                    duration: ""
                }
            ]
        });
        const handleInputChangeResearchExp = (e, index) => {
            const { name, value } = e.target;
            const updatedData3 = [...ResearchExperience.researchDetails]
            updatedData3[index][name] = value;
            setResearchExperience({ ...ResearchExperience, researchDetails: updatedData3 });
        };
        const handleAddMore3 = () => {
            setResearchExperience({
                ...ResearchExperience,
                researchDetails: [
                    ...ResearchExperience.researchDetails,
                    {
                        emp_id: empId, 
                        position: "",
                        institute:"",
                        supervisor:"",
                        date_join: "",
                        date_leave: "",
                        duration: ""
                    }
                ]
            });
        };
        const handleSubmitResearch = async (e) => {
            e.preventDefault();
            try {
                for (let i = 0; i < ResearchExperience.researchDetails.length; i++) {
                    const row = ResearchExperience.researchDetails[i];
                    // Send a POST request for each row
                    const response = await axios.post("http://localhost:3000/api/employement/addResearchExp", row);
                    console.log(response.data);
                }
            } catch (error) {
                console.error("Error submitting research experience form:", error);
            }
        };    
        /*-------------------------------INDUSTRIAL EXPERIENCE----------------------------------------------------------- */
    const [IndustrialExperience, setIndustrialExperience] = useState({
        industryDetails: [
            {
                emp_id: empId, 
                organisation: "",
                work_profile:"",
                date_join: "",
                date_leave: "",
                duration: ""
            }
        ]
    });
    const handleInputChangeIndustryExp = (e, index) => {
        const { name, value } = e.target;
        const updatedData4 = [...IndustrialExperience.industryDetails]
        updatedData4[index][name] = value;
        setIndustrialExperience({ ...IndustrialExperience, industryDetails: updatedData4 });
    };
    const handleAddMore4 = () => {
        setIndustrialExperience({
            ...IndustrialExperience,
            industryDetails: [
                ...IndustrialExperience.industryDetails,
                {
                    emp_id: empId, 
                    organisation: "",
                    work_profile:"",
                    date_join: "",
                    date_leave: "",
                    duration: ""
                }
            ]
        });
    };
     const handleSubmitIndustry = async (e) => {
        e.preventDefault();
        try {
            for (let i = 0; i < IndustrialExperience.industryDetails.length; i++) {
                const row = IndustrialExperience.industryDetails[i];
                // Send a POST request for each row
                const response = await axios.post("http://localhost:3000/api/employement/addIndustryExp", row);
                console.log(response.data);
                navigate('/Publication');
            }
        } catch (error) {
            console.error("Error submitting industry experience form:", error);
        }
        
    };
    const handleLogout = async (e) => {
        navigate('/Login_Page');
    }
/*------------------------------------------------------------------------------------------------------------------- */
    return (
        <div className="Present_Employment" style={{ marginTop: '12rem', marginLeft: '7rem', marginRight: '7rem', marginBottom: '4rem', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ animation: 'blinker 1s linear infinite', textAlign: 'center', color: '#d15f75' }}>Apply For Faculty Position</h2>
        <h7> Welcome {name}!!</h7>  <button onClick={handleLogout}> Logout </button>
        {/* Present Employment Form */}
        <form onSubmit={handleSubmitPresentEmp} id="PresentEmpForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>
                Employment Details
                </legend>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '45%', fontWeight: 'bold' }}>
                    <label htmlFor="present_position">Position: </label>
                    <input type="text" id="present_position" name="present_position" onChange={handleInputChangePresentEmp} value={presentData.present_position} required /><br /><br />
                    <label htmlFor="organization">Organization/Institution: </label>
                    <input type="text" id="organization" name="organization" onChange={handleInputChangePresentEmp} value={presentData.organization} required /><br /><br />
                    <label htmlFor="status">Status: </label>
                    <input type="text" id="status" name="status" onChange={handleInputChangePresentEmp} value={presentData.status} required /><br /><br />
                    </div>
                    <div style={{ width: '45%', fontWeight: 'bold' }}>
                    <label htmlFor="date_join">Date of Joining: </label>
                    <input type="text" id="date_join" name="date_join" onChange={handleInputChangePresentEmp} value={presentData.date_join} required /><br /><br />
                    <label htmlFor="date_leave">Date of Leaving: </label>
                    <input type="text" id="date_leave" name="date_leave" onChange={handleInputChangePresentEmp} value={presentData.date_leave} required /><br /><br />
                    <label htmlFor="duration">Duration (in years & months): </label>
                    <input type="text" id="duration" name="duration" onChange={handleInputChangePresentEmp} value={presentData.duration} required /><br /><br />
                    </div>
        `       </div>
                <label htmlFor="current_area" style={{ fontWeight: 'bold' }}>Current Area: </label>
                <textarea id="current_area" name="current_area" onChange={handleInputChangePresentEmp} value={presentData.current_area} rows="4" cols="50" required></textarea><br /><br />
                <label htmlFor="area_special" style={{ fontWeight: 'bold' }}>Area of Specialization: </label>
                <textarea id="area_special" name="area_special" onChange={handleInputChangePresentEmp} value={presentData.area_special} rows="4" cols="50" required></textarea><br /><br />
                <button type="button" onClick={handleSubmitPresentEmp}>Save</button>
                </fieldset>
        </form>
        {/* Employment History Form */}
        <form onSubmit={handleSubmitEmpHistory} id="EmpHistoryForm">
                <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
                <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Employement History</legend>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Position</th>
                        <th>Organization/Institution</th>
                        <th>Date Of Joining</th>
                        <th>Date Of Leaving</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                {employmentHistory.empHistoryDetails.map((row, index) => (
                    <tr key = {index}>
                        <td>{index+1}.</td>
                        <td><input type="text" name="Position" onChange={(e) => handleInputChangeEmpHistory(e, index)} value={row.present_position} required /></td>
                        <td><input type="text" name="organization" onChange={(e) => handleInputChangeEmpHistory(e, index)} value={row.organization} required /></td>
                        <td><input type="text" name="date_join" onChange={(e) => handleInputChangeEmpHistory(e, index)} value={row.date_join} required /></td>
                        <td><input type="text" name="date_leave" onChange={(e) => handleInputChangeEmpHistory(e, index)} value={row.date_leave} required /></td>
                        <td><input type="text" name="duration" onChange={(e) => handleInputChangeEmpHistory(e, index)} value={row.duration} required /></td>
                    </tr>
                ))}
                </tbody>
                </table>
                <button onClick={handleAddMore1}>Add More</button>
                <button type="button" onClick={handleSubmitEmpHistory}>Save </button>
                </fieldset>
        </form>
        {/* Teaching Experience Form */}
        <form onSubmit={handleSubmitTeaching} id="TeachingDetailsForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
            <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Teaching Experience</legend>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Position</th>
                    <th>Employer</th>
                    <th>Course Taught</th>
                    <th>UG/PG</th>
                    <th>No. Of Students</th>
                    <th>Date Of Joining</th>
                    <th>Date Of Leaving</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
            {teachingDetails.teachingDetails.map((row, index) => (
                    <tr key = {index}>
                        <td>{index+1}.</td>
                        <td><input type="text" style={{ width: '100%' }} name="Position" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.present_position} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="employer" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.employer} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="course Taught" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.course_taught} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="UgPg" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.ug_pg} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="NoOfStud" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.stud_number} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.date_join} required /></td>
                        <td><input type="text" style={{ width: '100%' }}name="date_leave" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.date_leave} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="duration" onChange={(e) =>handleInputChangeTeachingDetails(e, index)} value={row.duration} required /></td>
                    </tr>
                ))}
            </tbody>
            </table>
            <button onClick={handleAddMore2}>Add More</button>
            <button type="button" onClick={handleSubmitTeaching}>Save </button>
            </fieldset>
        </form>
        {/* Research Experience Form */}
        <form onSubmit={handleSubmitResearch} id="ResearchDetailsForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
            <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Research Experience</legend>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Position</th>
                    <th>Organization/Institution</th>
                    <th>Supervisor</th>
                    <th>Date Of Joining</th>
                    <th>Date Of Leaving</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
            {ResearchExperience.researchDetails.map((row, index) => (
                    <tr key = {index}>
                        <td>{index+1}.</td>
                        <td><input type="text" style={{ width: '100%' }} name="Position" onChange={(e) =>handleInputChangeResearchExp(e, index)} value={row.position} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="organization" onChange={(e) =>handleInputChangeResearchExp(e, index)} value={row.institute} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="supervisor" onChange={(e) =>handleInputChangeResearchExp(e, index)} value={row.supervisor} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={(e) =>handleInputChangeResearchExp(e, index)} value={row.date_join} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="date_leave" onChange={(e) =>handleInputChangeResearchExp(e, index)} value={row.date_leave} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="duration" onChange={(e) =>handleInputChangeResearchExp(e, index)} value={row.duration} required /></td>            
                    </tr>
                ))}
            </tbody>
            </table>
            <button onClick={handleAddMore3}>Add More</button>
            <button type="button" onClick={handleSubmitResearch}>Save </button>
            </fieldset>
        </form>
        {/* Industrial Experience Form */}
        <form onSubmit={handleSubmitIndustry} id="industryDetailsForm">
            <fieldset style={{ padding: '1rem', marginBottom: '0.5rem' }}>
            <legend style={{ backgroundColor: '#e1f0d8', color: '#54773c', padding: '0.5rem', borderRadius: '0.5rem', width: '100%', fontWeight: 'bold' }}>Industrial Experience</legend>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Organization/Institution</th>
                    <th>Work Profile</th>
                    <th>Date Of Joining</th>
                    <th>Date Of Leaving</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
            {IndustrialExperience.industryDetails.map((row, index) => (
                    <tr key = {index}>
                        <td>{index+1}.</td>
                        <td><input type="text" style={{ width: '100%' }} name="organization" onChange={(e) =>handleInputChangeIndustryExp(e, index)} value={row.organization} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="supervisor" onChange={(e) =>handleInputChangeIndustryExp(e, index)} value={row.work_profile} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="date_join" onChange={(e) =>handleInputChangeIndustryExp(e, index)} value={row.date_join} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="date_leave" onChange={(e) =>handleInputChangeIndustryExp(e, index)} value={row.date_leave} required /></td>
                        <td><input type="text" style={{ width: '100%' }} name="duration" onChange={(e) =>handleInputChangeIndustryExp(e, index)} value={row.duration} required /></td>
                    </tr>
                ))}
            </tbody>
            </table>
            <button onClick={handleAddMore4}>Add More</button>
            <button type="button" onClick={handleSubmitIndustry}>Save </button>
            </fieldset>
            </form>
        </div>
    );
}

export default EmploymentForm;
