
import { useLocation } from 'react-router-dom';

const Donate = () => {
  const location = useLocation();
  const { name, email, amount } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 mt-4 dark:text-white">Donation Summary</h2>
          <div className="space-y-4 dark:text-white">
            <p><strong >Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Amount:</strong> ₹{amount}</p>
          </div>

          <h3 className="text-xl font-semibold dark:text-white mt-8">Choose Payment Method</h3>
          <div className="mt-4 space-y-4">
            {/* UPI Payment */}
            <div className="flex items-center gap-4">
              <img src="/image10.jpg" alt="UPI" className="h-10" />
              <button className="btn-primary dark:text-white w-full">Pay with UPI</button>
            </div>

            {/* Credit/Debit Card */}
            <div className="flex items-center gap-4">
              <img src="/image11.png" alt="Card" className="h-10" />
              <button className="btn-primary dark:text-white w-full">Pay with Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
