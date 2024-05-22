import React, { useEffect } from 'react';

const GooglePayButton = () => {
  useEffect(() => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({ environment: 'TEST' });

    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'UPI',
        parameters: {
          supportedNetworks: ['UPI']
        }
      }],
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '10.00',
        currencyCode: 'INR'
      },
      merchantInfo: {
        merchantId: 'rudransh.2904@okhdfcbank',
        merchantName: 'Example Merchant'
      }
    };

    const button = paymentsClient.createButton({
      onClick: () => {
        paymentsClient.loadPaymentData(paymentDataRequest)
          .then(paymentData => {
            // Handle the response here
            console.log('Payment Success', paymentData);
          })
          .catch(err => {
            // Handle the error here
            console.error('Payment Failed', err);
          });
      }
    });

    document.getElementById('google-pay-button-container').appendChild(button);
  }, []);

  return (
    <React.Fragment>
    <div id="google-pay-button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    </div>
    </React.Fragment>
  );
};

export default GooglePayButton;
