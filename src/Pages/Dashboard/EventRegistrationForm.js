import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import QRPopup from '../QRCode';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addEventParticipants } from "../../Redux/participantsSlice";
// Require useHistory  from 'react-router-dom';


function EventRegistrationForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eventId = location.state.eventId;
    const [formData, setFormData] = useState({
        id: eventId,
        teamName: '',
        college: '',
        paymentReferenceNumber: 'NA',
        participants: [{ participantName: '', participantEmail: '', participantPhone: '' }],
        amount:0,
    });
    const [formErrors, setFormErrors] = useState({});
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (eventId) {
            setFormData(prevState => ({
                ...prevState,
                eventId
            }));
        }
    }, [eventId]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            if (name.startsWith('participant')) {
                return {
                    ...prevFormData,
                    participants: prevFormData.participants.map((participant, i) =>
                        i === index ? { ...participant, [name]: value } : participant
                    )
                };
            } else {
                return { ...prevFormData, [name]: value };
            }
        });
    };

    const addMember = () => {
        if (formData.participants.length < location.state.maxParticipants) {
            setFormData({
                ...formData,
                participants: [...formData.participants, { participantName: '', participantEmail: '', participantPhone: '' }],
            });
        } else {
            toast.error(`You have reached the maximum allowed participants (${location.state.maxParticipants}).`);
        }
    };

    const deleteLastMember = () => {
        if (formData.participants.length > location.state.minParticipants) {
            const newParticipants = [...formData.participants];
            newParticipants.pop();
            setFormData({ ...formData, participants: newParticipants });
        } else {
            toast.error(`You need at least ${location.state.minParticipants} participant(s).`);
        }
    };

    const registerToEvent = async () => {
        const errors = {};
        for (const key in formData) {
            if (typeof formData[key] === 'string' && !formData[key].trim()) {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        }
        formData.participants.forEach((member, index) => {
            for (const key in member) {
                if (!(member[key].trim())) {
                    errors[`${key}${index}`] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            }
        });
        if (Object.keys(errors).length === 0) {
            if (location.state.minParticipants > formData.participants.length) {
                toast.error('Add more participants.');
            } else if (location.state.maxParticipants < formData.participants.length) {
                toast.error('You have added more participants');
            } else {
                formData.amount = location.state.amount * ((location.state.perTeam) ? 1 : formData.participants.length);
                try {
                    const response = await dispatch(addEventParticipants(formData));
                    if (response.payload.success) {
                        setFormData({
                            teamName: '',
                            college: '',
                            // paymentReferenceNumber: '',
                            participants: [{ participantName: '', participantEmail: '', participantPhone: '' }],
                        });
                        setFormErrors({});
                        navigate(-1);
                    } else {
                        toast.error(response.data.message);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    toast.error('Failed to submit form');
                }
            }
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="container" style={{ minHeight: '90vh' }}>
            <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col-sm-8 col-md-9 col-lg-12 mx-auto">
                    <div className="card card-signin my-5" id="user_container">
                        <div className="card-body">
                            <h1 className="card-title text-center" id="titleForEvent">Event Name:{location.state.eventTitle}</h1>
                            {/* <h3 className="text-center" style={{color:'Black',font:'Times New Roman'}} id="">Registration is going to start Very Soon.....</h3> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="teamName" className="form-label">Team Name</label>
                                        <input type="text" className={`form-control ${formErrors.teamName ? 'is-invalid' : ''}`} id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} required />
                                        {formErrors.teamName && <div className="invalid-feedback">{formErrors.teamName}</div>}
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="college" className="form-label">College Name</label>
                                        <input type="text" className={`form-control ${formErrors.college ? 'is-invalid' : ''}`} id="college" name="college" value={formData.college} onChange={handleChange} required />
                                        {formErrors.college && <div className="invalid-feedback">{formErrors.college}</div>}
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="college" className="form-label">Minimum Members Required:{location.state.minParticipants}</label>
                                        <label htmlFor="college" className="form-label">Maximum Members Allowed:{location.state.maxParticipants < 100 ? location.state.maxParticipants : 'No Limit'}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {popup && <QRPopup setPopup={setPopup} amount={location.state.amount * ((location.state.perTeam) ? 1 : formData.participants.length)} />}
                        <div className="card-body">
                            {formData.participants.map((member, index) => (
                                <div key={index} className="mb-4">
                                    <h3 style={{ color: 'grey', textAlign: 'center', marginBottom: '1rem', color: 'black' }}>Details of Member {index + 1}</h3>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor={`participantName${index}`} className="form-label">Full Name</label>
                                            <input type="text" className={`form-control ${formErrors[`participantName${index}`] ? 'is-invalid' : ''}`} id={`participantName${index}`} name={`participantName`} value={member.participantName} onChange={(e) => handleChange(e, index)} required />
                                            {formErrors[`participantName${index}`] && <div className="invalid-feedback">{formErrors[`participantName${index}`]}</div>}
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor={`participantEmail${index}`} className="form-label">Email</label>
                                            <input type="email" className={`form-control ${formErrors[`participantEmail${index}`] ? 'is-invalid' : ''}`} id={`participantEmail${index}`} name={`participantEmail`} value={member.participantEmail} onChange={(e) => handleChange(e, index)} required />
                                            {formErrors[`participantEmail${index}`] && <div className="invalid-feedback">{formErrors[`participantEmail${index}`]}</div>}
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor={`participantPhone${index}`} className="form-label">Mobile Number</label>
                                            <input type="text" className={`form-control ${formErrors[`participantPhone${index}`] ? 'is-invalid' : ''}`} id={`participantPhone${index}`} name={`participantPhone`} value={member.participantPhone} onChange={(e) => handleChange(e, index)} required />
                                            {formErrors[`participantPhone${index}`] && <div className="invalid-feedback">{formErrors[`participantPhone${index}`]}</div>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="row justify-content-center">
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn- w-100 mb-2" type="button" onClick={addMember}>Add Member</button>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn-danger w-100 mb-2" type="button" onClick={deleteLastMember} disabled={formData.participants.length <= 1}>Delete Last Member</button>
                                </div>
                                {/* <div className="col-md-4 mb-3">
                                    <button className="btn btn-primary w-100 mb-2" type="button" onClick={() => setPopup(true)} style={{ zIndex: '0' }}>Make Payment</button>
                                </div>
                                <label htmlFor="paymentReferenceNumber" className="form-label">Enter Payment Ref. No./UTR No /(Nit Jalandhar Student Has To Fill Their Roll No..)</label>
                                <div className="input-group" style={{ width: '95%', margin: '10px', borderRadius: '10px' }}>
                                    <input style={{ borderRadius: '10px' }} type="text" className={`form-control ${formErrors.paymentReferenceNumber ? 'is-invalid' : ''}`} id="paymentReferenceNumber" name="paymentReferenceNumber" value={formData.paymentReferenceNumber} onChange={handleChange} required />
                                </div>
                                {formErrors.paymentReferenceNumber && <div className="invalid-feedback">{formErrors.paymentReferenceNumber}</div>} */}
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn-success w-100" type="button" onClick={registerToEvent}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventRegistrationForm;
