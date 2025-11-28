import jobsJSON from '../../jobs.json';
import JobCard from '../common/JobCard';

const AllJobs = () => {
  const allJobs = jobsJSON.jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse All Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allJobs.map(({ id, type, title, description, salary, location }) => (
            <JobCard
              key={id}
              type={type}
              role={title}
              desc={description}
              salary={salary}
              place={location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
