import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Header from './Header';
import { db } from './firebaseConfig'; // Ensure Firestore is set up
import { collection, addDoc, getDoc, doc } from 'firebase/firestore'; // For Firestore operations
import { getAuth } from 'firebase/auth'; // To get the user ID
import useWindowSize from 'react-use/lib/useWindowSize';

// Define subscription plans
const plans = [
  {
    name: 'Basic',
    price: 299,
    color: '#ffc107',
    features: ['2 free comedy shows', 'Basic sound effects', 'Access to basic scripts', '500 MB cloud storage'],
  },
  {
    name: 'Creator',
    price: 899,
    color: '#28a745',
    features: ['5 free comedy shows', 'Advanced sound effects', 'Premium scripts', '2 GB cloud storage'],
  },
  {
    name: 'Pro',
    price: 2400,
    color: '#007bff',
    features: ['Unlimited comedy shows', 'Studio-level sound effects', 'Custom scripts', '10 GB cloud storage'],
  },
];
const Subscription = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const { width, height } = useWindowSize(); // For confetti animation
  const [userSubscription, setUserSubscription] = useState(null); // Store user subscription plan
  const auth = getAuth(); // Firebase Auth instance
  const currentUser = auth.currentUser; // Get current user

  // Fetch the subscription for the current user from Firestore
  useEffect(() => {
    if (currentUser) {
      const fetchUserSubscription = async () => {
        const docRef = doc(db, 'subscriptions', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserSubscription(docSnap.data().plan);
          console.log(docSnap.data().plan); // Set user subscription
        }
      };
      fetchUserSubscription();
    }
  }, [currentUser]);

  // Handle payment processing
  const handlePayment = async (plan) => {
    if (plan.price === 0) {
      // Free plan, no payment needed
      await storeSubscription(plan.name, 0);
      return;
    }

    const options = {
      key: 'rzp_test_GkajTwSfONYREd', // Replace with your Razorpay key
      amount: plan.price * 100, // Razorpay accepts amount in paise (INR * 100)
      currency: 'INR',
      name: 'Interdimensional Comedy Subscription',
      description: `Subscription for ${plan.name} plan`,
      handler: async function (response) {
        // On successful payment
        await storeSubscription(plan.name, plan.price);
        setIsPaymentSuccessful(true); // Trigger confetti
        setTimeout(() => setIsPaymentSuccessful(false), 5000); // Stop confetti after 5 seconds
      },
      prefill: {
        email: currentUser?.email || 'user_email@example.com', // Get user email
        contact: '8250498365', // Replace with actual user contact
      },
      theme: {
        color: '#f48d25',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  // Store subscription data in Firestore
  const storeSubscription = async (planName, price) => {
    try {
      // Store the subscription with the user's ID
      await addDoc(collection(db, 'subscriptions'), {
        userId: currentUser.uid,
        plan: planName,
        amount: price,
        credits: planName === 'Pro' ? 100 : planName === 'Creator' ? 50 : 10, // Customize credits
        createdAt: new Date(),
      });
      alert('Subscription successful and stored in Firestore!');
    } catch (error) {
      console.error('Error storing subscription: ', error);
      alert('Failed to store subscription. Please try again.');
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#1a1a2e] overflow-x-hidden"
      style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Confetti animation */}
        {isPaymentSuccessful && <Confetti width={width} height={height} />}

        <Header />

        <div className="px-40 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="text-center mb-10">
              <h1 className="text-[#f48d25] text-[36px] font-extrabold leading-tight">
                Create Comedy Shows in Seconds🚀
              </h1>
              <p className="text-[#f48d25] text-lg">
                Choose a plan that best fits your needs.
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-6">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative group flex flex-col gap-4 rounded-2xl border border-solid border-[#e8dbce] bg-white p-8 shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${
                    userSubscription === plan.name ? 'border-[#f48d25] border-4' : ''
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#1c140d] text-xl font-extrabold">{plan.name}</h2>
                      {plan.name === 'Creator' && (
                        <span className="text-xs bg-[#f48d25] text-white py-1 px-3 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <p className="text-[#1c140d] text-4xl font-black leading-tight">
                      ₹{plan.price}
                      <span className="text-lg font-medium">/mo</span>
                    </p>
                  </div>
                  <button
                    onClick={() => handlePayment(plan)}
                    className="w-full rounded-full bg-[#f48d25] text-white py-3 font-semibold hover:bg-[#e07a13] transition-colors duration-300"
                  >
                    {plan.name === 'Free' ? 'Start Free' : 'Upgrade'}
                  </button>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#1c140d] text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="mr-2 text-[#f48d25]">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
