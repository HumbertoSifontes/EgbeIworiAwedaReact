import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const Appoinment = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    language: '',
    appointmentType: '',
    appointmentMode: '',
    description: '',
    date: '',
    hour: '',
    minutes: '',
  });

  // Fetch paises
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const sortedCountries = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);
        console.log('Countries fetched:', sortedCountries);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  // Fetch states data when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      const countryCode = selectedCountry.toUpperCase();
      const statesApiUrl = `http://api.geonames.org/searchJSON?country=${countryCode}&featureCode=ADM1&maxRows=1000&username=demo`;
      console.log('Fetching states for country:', selectedCountry);
      console.log('States API URL:', statesApiUrl);  // Log the API URL
      
      axios.get(statesApiUrl)
        .then(response => {
          console.log('API Response:', response);  // Log the full response
          if (response.data.geonames) {
            setStates(response.data.geonames);
            console.log('States fetched:', response.data.geonames);
          } else {
            setStates([]);
            console.log('No states found for country:', selectedCountry);
          }
          setCities([]); // Reset cities when a new country is selected
        })
        .catch(error => {
          console.error('Error fetching states:', error);
          setStates([]);
        });
    }
  }, [selectedCountry]);
  
  

  // Fetch cities data when a state is selected
  useEffect(() => {
    if (selectedState) {
      const citiesApiUrl = `http://api.geonames.org/searchJSON?adminCode1=${selectedState}&country=${selectedCountry}&featureCode=PPLA&maxRows=1000&username=demo`;
      console.log('Fetching cities for state:', selectedState);
      console.log('Cities API URL:', citiesApiUrl);  // Log the API URL
      
      axios.get(citiesApiUrl)
        .then(response => {
          console.log('API Response:', response);  // Log the full response
          if (response.data.geonames) {
            setCities(response.data.geonames);
            console.log('Cities fetched:', response.data.geonames);
          } else {
            setCities([]);
            console.log('No cities found for state:', selectedState);
          }
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
          setCities([]);
        });
    }
  }, [selectedState, selectedCountry]);
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="contact section-padding" id="contact">
        <div className="container mb-5 miniSectionServices">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header pb-5">
                <h2 className='text-center pb-5'>Contactanos</h2>
                <p className='text-left'>Egbe Iwori Aweda es un templo de Ifá tradicional ubicado en Puerto Píritu – Venezuela
                  y Bogotá – Colombia. <br /> Ofrecemos consultas, ceremonias y otros servicios espirituales 
                  para ayudar a las personas a encontrar su camino en la vida.<br /><br /> Creemos que todos tenemos 
                  un propósito en la vida, y que Ifá puede ayudarnos a descubrir ese propósito.<br /> A través 
                  de la adivinación, los babalawos pueden proporcionar orientación y consejo, y ayudar a 
                  las personas a tomar decisiones acertadas. <br /><br />
                  Si estás buscando ayuda espiritual, o si quieres aprender más sobre la religión yoruba 
                  tradicional, Egbe Iwori Aweda es el lugar perfecto para ti.<br /><br />
                  Agenda tu cita hoy mismo de forma virtual por video llamada o presencial en 
                  Puerto Píritu – Venezuela y Bogotá – Colombia y descubre lo que Ifá tiene reservado para ti.<br /><br />
                  Además de nuestros servicios regulares, también ofrecemos festivales y ceremonias especiales. 
                  En estos eventos, puedes aprender más sobre la cultura yoruba y la religión de Ifá.<br /><br />
                  Las fechas de nuestros festivales están disponibles en nuestro calendario de festivales, si 
                  te gustaría participar puedes agendar una cita en esta sección y nos pondremos en contacto contigo.
                  </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form className="form-container" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Nombre y Apellido:</label>
                  <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Correo:</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Teléfono:</label>
                  <PhoneInput
                    country={'us'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    enableSearch
                    containerClass="form-control p-0"
                  />
                </div>
                <div className="mb-3">
                  <label>País:</label>
                  <select name="country" className="form-control" value={formData.country} onChange={(e) => { handleChange(e); setSelectedCountry(e.target.value); }}>
                    <option value="">Seleccione un país</option>
                    {countries.map((country) => (
                      <option key={country.cca2} value={country.cca2}>{country.name.common}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label>Estado/Provincia:</label>
                  <select name="state" className="form-control" value={formData.state} onChange={(e) => { handleChange(e); setSelectedState(e.target.value); }}>
                    <option value="">Seleccione un estado/provincia</option>
                    {states.map((state) => (
                      <option key={state.adminCode1} value={state.adminCode1}>{state.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label>Ciudad:</label>
                  <select name="city" className="form-control" value={formData.city} onChange={handleChange}>
                    <option value="">Seleccione una ciudad</option>
                    {cities.map((city) => (
                      <option key={city.geonameId} value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label>Idioma:</label>
                  <input type="text" name="language" className="form-control" value={formData.language} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Seleccione una cita:</label>
                  <select name="appointmentType" className="form-control" value={formData.appointmentType} onChange={handleChange}>
                    <option value="">Seleccione una cita</option>
                    <option value="aprendizajes">Aprendizajes</option>
                    <option value="ceremonias">Ceremonias</option>
                    <option value="consultas">Consultas</option>
                    <option value="servicio_idafa">Servicio Idafá</option>
                    <option value="servicio_adimu">Servicio Adimú</option>
                    <option value="servicio_akose">Servicio Akose</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Tipo de cita:</label>
                  <select name="appointmentMode" className="form-control" value={formData.appointmentMode} onChange={handleChange}>
                    <option value="">Seleccione el tipo de cita</option>
                    <option value="virtual">Virtual</option>
                    <option value="presencial">Presencial</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label>Descripción:</label>
                  <textarea name="description" className="form-control" value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                  <label>Fecha:</label>
                  <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label>Hora:</label>
                  <select name="hour" className="form-control" value={formData.hour} onChange={handleChange}>
                    {Array.from({ length: 14 }, (_, i) => i + 8).map(hour => (
                      <option key={hour} value={hour}>{hour}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label>Minutos:</label>
                  <select name="minutes" className="form-control" value={formData.minutes} onChange={handleChange}>
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success d-grid gap-2 col-6 mx-auto text-white">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  </>
  );
};

export default Appoinment;
