'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const rewards = [
  { id: 1, name: 'Coins', amount: 100, icon: '🪙' },
  { id: 2, name: 'Gem', amount: 5, icon: '💎' },
  { id: 3, name: 'Energy', amount: 50, icon: '⚡' },
];

export default function RewardsPage() {
  const [claimedRewards, setClaimedRewards] = useState<number[]>([]);

  const handleClaimReward = (id: number) => {
    if (!claimedRewards.includes(id)) {
      setClaimedRewards([...claimedRewards, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-violet-900">
      <Navbar />
      {/* <section id="rewards" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-indigo-900"> */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center mt-10">Daily Rewards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rewards.map((reward) => (
              <motion.div
                key={reward.id}
                className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4">{reward.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{reward.name}</h3>
                  <p className="text-purple-300 text-2xl font-bold mb-4">{reward.amount}</p>
                  <AnimatePresence>
                    {!claimedRewards.includes(reward.id) ? (
                      <motion.button
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleClaimReward(reward.id)}
                        className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition duration-300"
                      >
                        Claim Reward
                      </motion.button>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-400 font-semibold"
                      >
                        Claimed! ✅
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      {/* </section> */}
    </div>    
  );
}

