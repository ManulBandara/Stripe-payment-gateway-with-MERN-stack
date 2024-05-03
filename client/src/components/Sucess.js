import React from 'react';

const Success = () => {
  // Sample transaction details
  const transactionId = 'ABC123XYZ';
  const transactionInfo = 'Two Medium Size Tshirts and One Large Size Tshirt';

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.95 7.636a.737.737 0 011.047 1.047l-8.05 8.05a.737.737 0 01-1.047 0l-3.45-3.45a.737.737 0 111.047-1.047l2.703 2.703 7.303-7.303a.737.737 0 011.047 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>Payment Successful!</h2>
        <p style={styles.message}>Thank you for your payment. Your transaction was successful.</p>
        <p style={styles.info}><strong>Transaction ID:</strong> {transactionId}</p>
        <p style={styles.info}><strong>Transaction Info:</strong> {transactionInfo}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  iconContainer: {
    marginBottom: '20px',
  },
  textContainer: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  message: {
    fontSize: '18px',
  },
  info: {
    fontSize: '16px',
    marginTop: '10px',
  },
};

export default Success;
