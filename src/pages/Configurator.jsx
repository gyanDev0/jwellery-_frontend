import React, { useState } from "react";
import './configurator.css'


function Configurator() {
  const [gemstoneEnabled, setGemstoneEnabled] = useState(false);
  const [customDesign, setCustomDesign] = useState(false);
const [formData, setFormData] = useState({
    customer_name: '',
    contact_number: '',
    gold_weight_grams: '',
    gold_carat: '',
    jewelry_type: '',
    has_gemstone: false,
    gemstone_type: '',
    gemstone_carat: '',
    custom_design_required: false,
    design_image: '' // This will hold the image string
  });
  // 2. Handle standard input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  // 3. Convert uploaded image to Base64 string so we can send it as JSON
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          design_image: reader.result // the base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  // 4. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Luxury Jewelry Request submitted successfully! 💎');
        // Reset form (optional)
        setFormData({
          customer_name: '', contact_number: '', gold_weight_grams: '',
          gold_carat: '', jewelry_type: '', has_gemstone: false,
          gemstone_type: '', gemstone_carat: '', custom_design_required: false, design_image: ''
        });
      } else {
        const errorData = await response.json();
        alert(`Failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('Could not connect to the backend server.');
    }
  };



  return (
   <div className="form-container">
      <h1>💎 Luxury Jewelry Order Form</h1>
      <p className="subtitle">Design Your Dream Jewelry</p>
      <form onSubmit={handleSubmit}>
        {/* Customer Details */}
        <div className="form-group">
          <label>Customer Name</label>
          <input 
            type="text" 
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            placeholder="Enter your full name" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            maxLength="10"
            required
          />
        </div>
        {/* Gold Details */}
        <div className="form-group">
          <label>Gold Weight (Grams)</label>
          <input 
            type="number" 
            name="gold_weight_grams"
            value={formData.gold_weight_grams}
            onChange={handleChange}
            placeholder="Enter gold weight" 
            required
          />
        </div>
        <div className="form-group">
          <label>Gold Carat</label>
          <select name="gold_carat" value={formData.gold_carat} onChange={handleChange} required>
            <option value="">Select Gold Carat</option>
            <option value="24K">24K</option>
            <option value="22K">22K</option>
            <option value="18K">18K</option>
            <option value="14K">14K</option>
          </select>
        </div>
        {/* Jewelry Type */}
        <div className="form-group">
          <label>Jewelry Type</label>
          <select name="jewelry_type" value={formData.jewelry_type} onChange={handleChange} required>
            <option value="">Select Jewelry Type</option>
            <option value="Ring">Ring</option>
            <option value="Necklace">Necklace</option>
            <option value="Pendant">Pendant</option>
            <option value="Bangle">Bangle</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Earrings">Earrings</option>
            <option value="Anklet">Anklet</option>
          </select>
        </div>
        {/* Gemstone Toggle */}
        <div className="switch-row">
          <span>Gemstone Ornament</span>
          <label className="switch">
            <input
              type="checkbox"
              name="has_gemstone"
              checked={formData.has_gemstone}
              onChange={handleChange}
            />
            <span className="slider"></span>
          </label>
        </div>
        {formData.has_gemstone && (
          <>
            <div className="form-group">
              <label>Gemstone Type</label>
              <select name="gemstone_type" value={formData.gemstone_type} onChange={handleChange} required>
                <option value="">Select Gemstone</option>
                <option value="Diamond">Diamond</option>
                <option value="Ruby">Ruby</option>
                <option value="Emerald">Emerald</option>
                <option value="Sapphire">Sapphire</option>
                <option value="Pearl">Pearl</option>
                <option value="Topaz">Topaz</option>
                <option value="Opal">Opal</option>
              </select>
            </div>
            <div className="form-group">
              <label>Gemstone Carat</label>
              <input
                type="number"
                name="gemstone_carat"
                step="0.01"
                value={formData.gemstone_carat}
                onChange={handleChange}
                placeholder="Enter gemstone carat"
                required
              />
            </div>
          </>
        )}
        {/* Custom Design Toggle */}
        <div className="switch-row">
          <span>Custom Design Required</span>
          <label className="switch">
            <input
              type="checkbox"
              name="custom_design_required"
              checked={formData.custom_design_required}
              onChange={handleChange}
            />
            <span className="slider"></span>
          </label>
        </div>
        {formData.custom_design_required && (
          <div className="form-group">
            <label>Upload Jewelry Design Image</label>
            <div className="upload-box">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                required 
              />
            </div>
          </div>
        )}
        <button type="submit">Submit Request</button>
      </form>
    </div> 
  );
}

export default Configurator;