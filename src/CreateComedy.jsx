import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Loader from './Loader'; // Import the Loader component
import { useNavigate } from 'react-router-dom';
import Header from './Header'

const CreateComedy = () => {
  const [formData, setFormData] = useState({
    theme: '',
    audience: '',
    duration: '',
    characters: '',
    prompt: '',
    humorStyle: ''
  });

  const navigate = useNavigate();
  const [selected, setSelected] = useState({
    theme: '',
    audience: '',
    duration: '',
    humorStyle: ''
  });

  const [loading, setLoading] = useState(false); // State to manage loading

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleButtonClick = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    setSelected({
      ...selected,
      [field]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the loader

    try {
      const scriptResponse = await fetch('http://localhost:5001/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (!scriptResponse.ok) throw new Error('Error generating comedy script');
  
      const scriptData = await scriptResponse.json();
      const { script } = scriptData;
  
      const videoResponse = await fetch('http://localhost:5001/create-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script })
      });
  
      if (!videoResponse.ok) throw new Error('Error creating video');
  
      const videoData = await videoResponse.json();
      const { vid_id } = videoData;
  
      await new Promise(resolve => setTimeout(resolve, 300000)); // Delay for 30 seconds
  
      const getVideoResponse = await fetch(`http://localhost:5001/get-video/${vid_id}`);
  
      if (!getVideoResponse.ok) throw new Error('Error retrieving video');
  
      const getVideoData = await getVideoResponse.json();
      const { vid_url } = getVideoData;
  
      await addDoc(collection(db, 'comedy'), { vid_url });
      console.log('Video saved to Firestore');

      navigate("/home")
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Hide the loader
    }
  };

  return (
    <><div className='flex flex-col bg-[#1a1a2e] text-white' 
    ><Header /></div><main className="flex justify-center items-center min-h-screen bg-[#1a1a2e] p-6 relative">
      {loading && <Loader />} {/* Conditionally render the loader bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 transform scale-110 rotate-12 opacity-50"></div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Create a Comedy Show</h1>
        <p className="text-gray-600 mb-6 text-center">
          Customize your comedy show and let Comedy Genie work its magic!
        </p>

        {/* Theme */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Theme</label>
          <div className="flex flex-wrap gap-2">
            {['Standup', 'Sketch', 'Roast', 'Musical'].map(theme => (
              <button
                key={theme}
                type="button"
                className={`py-2 px-4 rounded-full text-white shadow-md transform transition-transform duration-300 ${selected.theme === theme ? 'bg-blue-600 scale-105' : 'bg-gray-500 hover:bg-gray-600'}`}
                onClick={() => handleButtonClick('theme', theme)}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        {/* Targeted Audience */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Targeted Audience</label>
          <div className="flex flex-wrap gap-2">
            {['Everyone', 'Kids', 'Teens', 'Adults', 'Seniors'].map(audience => (
              <button
                key={audience}
                type="button"
                className={`py-2 px-4 rounded-full text-gray-800 shadow-md transform transition-transform duration-300 ${selected.audience === audience ? 'bg-yellow-500 scale-105' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => handleButtonClick('audience', audience)}
              >
                {audience}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Duration</label>
          <div className="flex flex-wrap gap-2">
            {['3 minutes', '5 minutes', '10 minutes', '15 minutes', '30 minutes'].map(duration => (
              <button
                key={duration}
                type="button"
                className={`py-2 px-4 rounded-full text-gray-800 shadow-md transform transition-transform duration-300 ${selected.duration === duration ? 'bg-green-500 scale-105' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => handleButtonClick('duration', duration)}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>

        {/* Characters */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Characters</label>
          <input
            type="text"
            name="characters"
            placeholder="E.g., A talking cat, a grumpy grandpa, a clumsy superhero!"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 bg-white focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            onChange={handleInputChange} />
        </div>

        {/* Prompt */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Prompt</label>
          <textarea
            name="prompt"
            placeholder="Write a short prompt to guide the show"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 bg-white focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            rows="4"
            onChange={handleInputChange} />
        </div>

        {/* Humor Style */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Humor Style</label>
          <div className="flex flex-wrap gap-2">
            {['Wholesome', 'Silly', 'Dry', 'Dark'].map(style => (
              <button
                key={style}
                type="button"
                className={`py-2 px-4 rounded-full text-gray-800 shadow-md transform transition-transform duration-300 ${selected.humorStyle === style ? 'bg-red-500 scale-105' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={() => handleButtonClick('humorStyle', style)}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <button type="submit" className="py-3 px-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300">
            Generate Show
          </button>
        </div>
      </form>
    </main></>
  );
};

export default CreateComedy;
