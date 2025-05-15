import { useState, useEffect } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [donationData, setDonationData] = useState({
    itemType: '',
    photo: null,
    deliveryMethod: '',
    dropOffDate: '',
    dropOffTime: '',
    dropOffArea: '',
    address: '',
    contact: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDonationData(prev => ({ ...prev, [name]: value }));
  }

  function handlePhotoUpload(e) {
    setDonationData(prev => ({ ...prev, photo: e.target.files[0] }));
  }

  function next() {
    if (step < 8) setStep(step + 1);
  }

  function prev() {
    if (step > 1) setStep(step - 1);
  }

  // Skip step 5 if deliveryMethod is Drop Off
  useEffect(() => {
    if (step === 5 && donationData.deliveryMethod === "Drop Off") {
      next();
    }
  }, [step, donationData.deliveryMethod]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Step 1 */}
        {step === 1 && (
          <>
            <h2 style={styles.title}>Welcome to CharityCart!</h2>
            <p style={styles.text}>Donate your old shoes, books, clothes, or any usable item easily.</p>
            <button style={styles.primaryButton} onClick={next}>Start Donating</button>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <h2 style={styles.title}>What do you want to donate?</h2>
            <select
              name="itemType"
              value={donationData.itemType}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="">Select an item</option>
              <option value="Shoes">Shoes</option>
              <option value="Books">Books</option>
              <option value="Clothes">Clothes</option>
              <option value="Other">Other</option>
            </select>
            <div style={styles.navButtons}>
              <button style={styles.secondaryButton} onClick={prev}>Back</button>
              <button
                style={donationData.itemType ? styles.primaryButton : styles.disabledButton}
                onClick={next}
                disabled={!donationData.itemType}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <h2 style={styles.title}>Upload a photo of your item</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={styles.fileInput}
            />
            {donationData.photo && (
              <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#555' }}>
                Photo selected: {donationData.photo.name}
              </p>
            )}
            <div style={styles.navButtons}>
              <button style={styles.secondaryButton} onClick={prev}>Back</button>
              <button
                style={donationData.photo ? styles.primaryButton : styles.disabledButton}
                onClick={next}
                disabled={!donationData.photo}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <>
            <h2 style={styles.title}>Select delivery method</h2>
            <select
              name="deliveryMethod"
              value={donationData.deliveryMethod}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="">Select method</option>
              <option value="Drop Off">Drop Off</option>
              <option value="Pick Up">Pick Up</option>
            </select>

            {/* If Drop Off selected, show date, time, area */}
            {donationData.deliveryMethod === "Drop Off" && (
              <>
                <label style={{ marginTop: '1rem', display: 'block', fontWeight: '600', color: '#333' }}>
                  Date you will come to donate
                </label>
                <input
                  type="date"
                  name="dropOffDate"
                  value={donationData.dropOffDate}
                  onChange={handleChange}
                  style={styles.input}
                />

                <label style={{ marginTop: '1rem', display: 'block', fontWeight: '600', color: '#333' }}>
                  Time you will come to donate
                </label>
                <input
                  type="time"
                  name="dropOffTime"
                  value={donationData.dropOffTime}
                  onChange={handleChange}
                  style={styles.input}
                />

                <label style={{ marginTop: '1rem', display: 'block', fontWeight: '600', color: '#333' }}>
                  Area
                </label>
                <input
                  type="text"
                  name="dropOffArea"
                  placeholder="Your area or locality"
                  value={donationData.dropOffArea}
                  onChange={handleChange}
                  style={styles.input}
                />
              </>
            )}

            <div style={styles.navButtons}>
              <button style={styles.secondaryButton} onClick={prev}>Back</button>

              {/* Enable next only if deliveryMethod selected and required fields filled */}
              <button
                style={
                  donationData.deliveryMethod === "Drop Off"
                    ? (donationData.dropOffDate && donationData.dropOffTime && donationData.dropOffArea
                        ? styles.primaryButton
                        : styles.disabledButton)
                    : donationData.deliveryMethod === "Pick Up"
                    ? styles.primaryButton
                    : styles.disabledButton
                }
                onClick={next}
                disabled={
                  donationData.deliveryMethod === "Drop Off"
                    ? !(donationData.dropOffDate && donationData.dropOffTime && donationData.dropOffArea)
                    : donationData.deliveryMethod === "Pick Up"
                    ? false
                    : true
                }
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 5 (only if Pick Up) */}
        {step === 5 && donationData.deliveryMethod === "Pick Up" && (
          <>
            <h2 style={styles.title}>Enter your address</h2>
            <textarea
              name="address"
              value={donationData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Your address here"
              style={styles.textarea}
            />
            <div style={styles.navButtons}>
              <button style={styles.secondaryButton} onClick={prev}>Back</button>
              <button
                style={donationData.address.trim() ? styles.primaryButton : styles.disabledButton}
                onClick={next}
                disabled={!donationData.address.trim()}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 6 */}
        {step === 6 && (
          <>
            <h2 style={styles.title}>Your contact info</h2>
            <input
              type="text"
              name="contact"
              placeholder="Phone or email"
              value={donationData.contact}
              onChange={handleChange}
              style={styles.input}
            />
            <div style={styles.navButtons}>
              <button style={styles.secondaryButton} onClick={prev}>Back</button>
              <button
                style={donationData.contact.trim() ? styles.primaryButton : styles.disabledButton}
                onClick={next}
                disabled={!donationData.contact.trim()}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 7 */}
        {step === 7 && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={styles.title}>Donation in Progress...</h2>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
            <p style={{ color: '#2E7D32', fontWeight: 'bold', marginTop: '1rem' }}>
              🎉 Your donation has been delivered successfully!
            </p>
            <button style={styles.primaryButton} onClick={next}>Finish</button>
          </div>
        )}

        {/* Step 8 */}
        {step === 8 && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={styles.title}>Thank You! 💖</h2>
            <p style={styles.text}>We appreciate your generous donation. You’ve made someone’s day brighter!</p>
            <button
              style={styles.primaryButton}
              onClick={() => {
                setStep(1);
                setDonationData({
                  itemType: '',
                  photo: null,
                  deliveryMethod: '',
                  dropOffDate: '',
                  dropOffTime: '',
                  dropOffArea: '',
                  address: '',
                  contact: '',
                });
              }}
            >
              Donate Again
            </button>
          </div>
        )}
      </div>

      {/* Animation style */}
      <style>{`
        @keyframes progressAnim {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '3rem auto',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  card: {
    minHeight: '350px',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#444',
  },
  select: {
    width: '100%',
    fontSize: '1rem',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  fileInput: {
    fontSize: '1rem',
  },
  navButtons: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  primaryButton: {
    backgroundColor: '#2E7D32',
    color: '#fff',
    padding: '0.7rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: '#ddd',
    color: '#333',
    padding: '0.7rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  disabledButton: {
    backgroundColor: '#bbb',
    color: '#666',
    padding: '0.7rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'not-allowed',
  },
  progressBar: {
    width: '100%',
    height: '12px',
    backgroundColor: '#c8e6c9',
    borderRadius: '6px',
    overflow: 'hidden',
    marginTop: '2rem',
  },
  progressFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2E7D32',
    animation: 'progressAnim 3s linear forwards',
  },
};

export default App;
