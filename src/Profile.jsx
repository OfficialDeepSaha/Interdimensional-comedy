import React, { useEffect, useState } from 'react';
import Header from './Header';
import { db, auth } from './firebaseConfig'; // Adjust the path as needed
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Profile = () => {
  const [subscription, setSubscription] = useState({
    plan: 'FREE',
    videoCredits: { used: 0, total: 2 },
    renewalDate: 'N/A'
  });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log('No user is logged in');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchSubscriptionData = async () => {
      if (userId) {
        try {
          const subscriptionCollection = collection(db, 'subscriptions');
          const q = query(subscriptionCollection, where('userId', '==', userId));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const subscriptionData = querySnapshot.docs[0].data();
            let totalCredits = 0;
            let usedCredits = 0;

            // Set total and used credits based on the plan
            if (subscriptionData.plan === 'Creator') {
              totalCredits = 20;
            } else if (subscriptionData.plan === 'Pro') {
              totalCredits = 50;
            }

            // Reset used credits for both plans
            usedCredits = 0;

            // Calculate renewal date
            const createdAt = subscriptionData.createdAt ? new Date(subscriptionData.createdAt.toDate()) : new Date();
            const renewalDate = new Date(createdAt);
            renewalDate.setDate(renewalDate.getDate() + 30); // Add 30 days
            const formattedRenewalDate = renewalDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            });

            setSubscription({
              plan: subscriptionData.plan || 'FREE',
              videoCredits: {
                used: usedCredits,
                total: totalCredits
              },
              renewalDate: formattedRenewalDate
            });
          } else {
            console.log('No matching subscription document found');
          }
        } catch (error) {
          console.error('Error fetching subscription data:', error);
        }
      }
    };

    fetchSubscriptionData();
  }, [userId]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a2e] text-white">
      <Header />

      {/* Main Content at the top */}
      <div className="flex flex-col items-center justify-start w-full mt-10">
        {/* Main Container */}
        <div className="max-w-4xl w-full bg-[#1a1a2e] rounded-xl p-8"> {/* Increased max width */}
          {/* Header */}
          <h1 className="text-3xl font-bold mb-6 text-white">Settings</h1>
          <p className="text-sm text-gray-300 mb-8">
            Manage your account settings, view rate limits, and more.
          </p>

          {/* Subscription Plan */}
          <div className="bg-[#1a253b] p-8 rounded-lg w-full"> {/* Increased width and padding */}
            <h2 className="text-lg font-semibold text-white mb-4">Subscription Plan</h2>
            <p className="mb-4 text-lg">
              You are currently on the <span className="font-bold text-[#f48d25]">{subscription.plan}</span> plan
            </p>

            {/* Video Credits */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Video Credits</h3>
              <p className="mt-2 text-sm text-gray-300">
                You have used [ <span className="font-bold text-white">{subscription.videoCredits.used}</span> /{' '}
                <span className="font-bold text-white">{subscription.videoCredits.total}</span> ] credits
              </p>
            </div>

            {/* Plan Renewal */}
            <div className="mt-8 text-sm text-gray-400">
              <p>
                Your plan renews on{' '}
                <span className="font-bold text-red-500">{subscription.renewalDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
