import React from 'react';
import { useForm } from 'react-hook-form';
import CreateCommunity from '../endpoints/community/create';
import { useNavigate } from 'react-router-dom';

function CommunityForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const handle = async (data) => {
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('bio', data.bio);
    formdata.append('picture', data.picture[0]);

    try {
      await CreateCommunity(formdata);
      alert('Community created successfully!');
      reset();
      navigate(-1);
    } catch (error) {
      console.error('Creation failed:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Create a New Community
      </h2>
      <form onSubmit={handleSubmit(handle)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Community Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="Enter community name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Bio Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
          <input
            {...register('bio')}
            type="text"
            placeholder="Short description or bio"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Picture Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Community Picture</label>
          <input
            {...register('picture')}
            type="file"
            className="w-full bg-white border border-gray-300 rounded-lg p-2 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
        >
          Create Community
        </button>
      </form>
    </div>
  );
}

export default CommunityForm;
