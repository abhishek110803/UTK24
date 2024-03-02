import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import QRPopup from '../QRCode';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Helper/axiosInstance';

function AccomodationRegistrationForm() {
    const navigate = useNavigate();
    const { planId } = useParams();
    const [accomodationType, setAccomodationType] = useState("");
    const [fee, setFee] = useState(0);
    const [formData, setFormData] = useState({
        accommodationType: "",
        college: '',
        paymentReferenceNumber: '',
        numberOfPersons: 1,
        checkInDate: '',
        persons: [{ participantName: '', participantEmail: '', participantPhone: '' }],
    });
    const [formErrors, setFormErrors] = useState({});
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        if (planId === "1") { setAccomodationType("ONE DAY PACK"); setFee(400); }
        if (planId === "2") { setAccomodationType("TWO DAY PACK"); setFee(650); }
        if (planId === "3") { setAccomodationType("THREE DAY PACK"); setFee(900); }
        setFormData(prevState => ({
            ...prevState,
            accommodationType: planId,
        }));
    }, [planId]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            if (name.startsWith('participant')) {
                return {
                    ...prevFormData,
                    persons: prevFormData.persons.map((participant, i) =>
                        i === index ? { ...participant, [name]: value } : participant
                    )
                };
            } else {
                return { ...prevFormData, [name]: value };
            }
        });
    };

    const addMember = () => {
        if (formData.persons.length < formData.numberOfPersons) {
            setFormData(prevState => ({
                ...prevState,
                persons: [...prevState.persons, { participantName: '', participantEmail: '', participantPhone: '' }],
            }));
        } else {
            toast.error(`You have selected only  (${formData.numberOfPersons}) Persons. To add more, please increase the selection.`);
        }
    };

    const deleteLastMember = () => {
        if (formData.persons.length > 1) {
            const newParticipants = [...formData.persons];
            newParticipants.pop();
            setFormData(prevState => ({ ...prevState, persons: newParticipants }));
        } else {
            toast.error(`You need at least one participant.`);
        }
    };

    const registerAccommodation = async () => {
        const errors = {};
        if (formData.persons.length !== parseInt(formData.numberOfPersons)) {
            toast.error(`Enter the details of all  (${formData.numberOfPersons}) members.`);
            return;
        }
        for (const key in formData) {
            if (typeof formData[key] === 'string' && !formData[key].trim()) {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        }
        formData.persons.forEach((member, index) => {
            for (const key in member) {
                if (!(member[key].trim())) {
                    errors[`${key}${index}`] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            }
        });
        if (Object.keys(errors).length === 0) {
            try {
                const url = `accommodation/registerAccommodation`;
                const response = await axiosInstance.post(url, formData);
                if (response?.data.success) {
                    setFormData({
                        college: '',
                        paymentReferenceNumber: '',
                        numberOfPersons: 1,
                        checkInDate:'',
                        persons: [{ participantName: '', participantEmail: '', participantPhone: '' }],
                    });
                    toast.success('Request Submitted.')
                    navigate(`/accomodationPage`);
                    setFormErrors({});
                } else {
                    toast.error(response?.data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Failed to submit form');
            }
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '100px', minHeight: '90vh' }}>
            <div className="row">
                <div className="col-sm-8 col-md-9 col-lg-12 mx-auto">
                    <div className="card card-signin my-5" id="user_container">
                        <div className="card-body">
                            <h1 className="card-title text-center" id="titleForEvent">Accomodation Plan: {accomodationType}</h1>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="college" className="form-label">College Name/Address</label>
                                        <input type="text" className={`form-control ${formErrors.college ? 'is-invalid' : ''}`} id="college" name="college" value={formData.college} onChange={handleChange} required />
                                        {formErrors.college && <div className="invalid-feedback">{formErrors.college}</div>}
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="numberOfPersons" className="form-label">Number of Members</label>
                                        <input
                                            type="number"
                                            className={`form-control ${formErrors.numberOfPersons ? 'is-invalid' : ''}`}
                                            id="numberOfPersons"
                                            name="numberOfPersons"
                                            value={formData.numberOfPersons}
                                            onChange={handleChange}
                                            required
                                            min="1"
                                        />
                                        {formErrors.numberOfPersons && <div className="invalid-feedback">{formErrors.numberOfPersons}</div>}
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="checkInDate" className="form-label">Check In Date</label>
                                        <input
                                            type="date"
                                            className={`form-control ${formErrors.checkInDate ? 'is-invalid' : ''}`}
                                            id="checkInDate"
                                            name="checkInDate"
                                            value={formData.checkInDate}
                                            style={{ backgroundColor: 'gray', color: 'white', WebkitAppearance: 'none' }}
                                            onChange={handleChange}
                                            onClick={(e) => e.target.focus()}
                                            required
                                        />
                                        {formErrors.checkInDate && <div className="invalid-feedback">{formErrors.checkInDate}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {popup && <QRPopup setPopup={setPopup} amount={fee * formData.numberOfPersons} />}

                        <div className="card-body">
                            {formData.persons.map((member, index) => (
                                <div key={index} className="mb-4">
                                    <h3 style={{ color: 'grey', textAlign: 'center', marginBottom: '1rem', color: 'black' }}>Details of Member {index + 1}</h3>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor={`participantName${index}`} className="form-label">Full Name</label>
                                            <input type="text" className={`form-control ${formErrors.participantName ? 'is-invalid' : ''}`} id={`participantName${index}`} name="participantName" value={member.participantName} onChange={(e) => handleChange(e, index)} required />
                                            {formErrors.participantName && <div className="invalid-feedback">{formErrors.participantName}</div>}
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor={`participantEmail${index}`} className="form-label">Email</label>
                                            <input type="email" className={`form-control ${formErrors.participantEmail ? 'is-invalid' : ''}`} id={`participantEmail${index}`} name="participantEmail" value={member.participantEmail} onChange={(e) => handleChange(e, index)} required />
                                            {formErrors.participantEmail && <div className="invalid-feedback">{formErrors.participantEmail}</div>}
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor={`participantPhone${index}`} className="form-label">Mobile Number</label>
                                            <input type="text" className={`form-control ${formErrors.participantPhone ? 'is-invalid' : ''}`} id={`participantPhone${index}`} name="participantPhone" value={member.participantPhone} onChange={(e) => handleChange(e, index)} required />
                                            {formErrors.participantPhone && <div className="invalid-feedback">{formErrors.participantPhone}</div>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="row justify-content-center">
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn w-100 mb-2" type="button" onClick={addMember}>Add Member</button>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn-danger w-100 mb-2" type="button" onClick={deleteLastMember} disabled={formData.persons.length <= 1}>Delete Last Member</button>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn-primary w-100  mb-3" type="button" onClick={() => setPopup(true)} style={{ zIndex: '0' }}>Make Payment</button>
                                </div>
                                <label htmlFor="paymentReferenceNumber" className="form-label">Enter Payment Ref. No./UTR No </label>
                                <input type="text" style={{ width: '94%', marginBottom: '15px' }} className={`form-control ${formErrors.paymentReferenceNumber ? 'is-invalid' : ''}`} id="paymentReferenceNumber" name="paymentReferenceNumber" value={formData.paymentReferenceNumber} onChange={handleChange} required />
                                <div className="col-md-4 mb-3">
                                    <button className="btn btn-success w-100" type="button" onClick={registerAccommodation}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccomodationRegistrationForm;
