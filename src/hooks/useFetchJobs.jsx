import { useState, useEffect } from 'react';

function useFetchJobs() {
  // State to store response from JSON server
  const [jobsList, setJobsList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  // Side effect of data fetching from JSON server
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3000/jobs');
        if (!response.ok) throw new Error('Network Request Failed...');
        const data = await response.json();
        setJobsList(data);
        setIsFetching(false);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchJobs();
  }, []);

  return { jobsList, isFetching };
}

export default useFetchJobs;
