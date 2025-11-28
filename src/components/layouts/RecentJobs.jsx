import JobCard from '../common/JobCard';
import jobsJSON from '../../jobs.json';

const RecentJobs = () => {
  const recentJobs = jobsJSON.jobs.slice(0, 3);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Recent Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map(
              ({ id, type, title, description, salary, location }) => (
                <JobCard
                  key={id}
                  type={type}
                  role={title}
                  desc={description}
                  salary={salary}
                  place={location}
                />
              )
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default RecentJobs;
