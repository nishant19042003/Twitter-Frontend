import React from 'react'
//upar upload page
//niche tweets jisme like and comment and retweet
import getAllTweets from '../endpoints/tweetapi/getalltweet';
import Tweetpage from '../components/Tweetpage';
import ProfileCard from '../components/ProfileCard';
function Home() {
  const [tweets, setTweets] = React.useState([]);
  React.useEffect(() => {
    const fetchTweets = async () => {
      try {
        const tweets = await getAllTweets();
        console.log(tweets);
      } catch (error) {
        console.error("Failed to fetch tweets:", error);
      }
    };

    fetchTweets();
  }, []);
  React.useEffect(() => {
    const fetchTweets = async () => { 
      try {
        const tweets = await getAllTweets();
        setTweets(tweets.data);
        console.log(tweets.data);
      } catch (error) {
        console.error("Failed to fetch tweets:", error);
      }
    };

    fetchTweets();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <ProfileCard/>
      <Tweetpage tweets={tweets} />
    </div>
  )
}

export default Home
