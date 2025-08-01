import React from 'react';
import { useForm } from 'react-hook-form';
import createtweet from '../endpoints/tweetapi/createtweet';

function TweetPage() {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    const formdata = new FormData();
    formdata.append('content', data.content);
    if (data.media.length > 0) formdata.append('media', data.media[0]);
    await createtweet(formdata);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-blue-100 bg-opacity-50 backdrop-blur-md pt-24">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md border border-blue-200"
      >
        <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Post a Tweet</h2>

        <textarea
          {...register('content', { required: true })}
          placeholder="What's happening?"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
        />

        <input
          {...register('media')}
          type="file"
          className="w-full mb-4 text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-lg file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetPage;
