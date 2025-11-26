import JobCard from '../common/JobCard';

const JobListings = () => {
  return (
    <>
      <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
          <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobCard
              type="Full-Time"
              role="Senior React Developer"
              desc="We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript..."
              salary="$70 - $80K"
              place="Boston, MA"
            />
            <JobCard
              type="Remote"
              role="Front-End Engineer (React)"
              desc="Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion..."
              salary="$70 - $80K"
              place="Miami, FL"
            />
            <JobCard
              type="Remote"
              role="React.js Developer"
              desc="Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference..."
              salary="$70 - $80K"
              place="Brooklyn, NY"
            />
          </div>
        </div>
      </section>

      <section class="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default JobListings;
