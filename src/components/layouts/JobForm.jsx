import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ClipLoader } from 'react-spinners';
import useFetchJob from '../../hooks/useFetchJob';

const JobForm = ({ addJob, editJob, toEdit }) => {
  // States for each field
  const [jobType, setJobType] = useState('Full-Time');
  const [jobName, setJobName] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobSalary, setJobSalary] = useState('Under $50K');
  const [jobLocation, setJobLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDesc, setCompanyDesc] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');

  // Obtain specific job to edit
  const { id } = useParams();
  const { job, isFetching } = useFetchJob(id);

  const navigate = useNavigate();

  // Put form in editable mode
  useEffect(() => {
    if (toEdit && job.id) {
      setJobType(job.type);
      setJobName(job.title);
      setJobDesc(job.description);
      setJobSalary(job.salary);
      setJobLocation(job.location);
      setCompanyName(job.company?.name);
      setCompanyDesc(job.company?.description);
      setCompanyEmail(job.company?.contactEmail);
      setCompanyPhone(job.company?.contactPhone);
    }
  }, [job]);

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add New Job
    if (!toEdit) {
      const newJob = {
        title: jobName,
        type: jobType,
        description: jobDesc,
        location: jobLocation,
        salary: jobSalary,
        company: {
          name: companyName,
          description: companyDesc,
          contactEmail: companyEmail,
          contactPhone: companyPhone,
        },
      };

      // POST request
      await addJob(newJob);

      navigate('/jobs');
    }

    // Update Current Job
    else {
      const updatedJob = {
        id: id,
        title: jobName,
        type: jobType,
        description: jobDesc,
        location: jobLocation,
        salary: jobSalary,
        company: {
          name: companyName,
          description: companyDesc,
          contactEmail: companyEmail,
          contactPhone: companyPhone,
        },
      };

      // PATCH request
      await editJob(updatedJob, id);

      navigate(`/jobs/${id}`);
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          {isFetching ? (
            <ClipLoader
              color="indigo"
              loading={isFetching}
              size={75}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                {toEdit ? 'Edit Job' : 'Add Job'}
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Ex: Senior React Developer"
                  value={jobName}
                  onChange={(e) => setJobName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={jobDesc}
                  onChange={(e) => setJobDesc(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  value={jobSalary}
                  onChange={(e) => setJobSalary(e.target.value)}
                  required
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - $60K">$50K - $60K</option>
                  <option value="$60K - $70K">$60K - $70K</option>
                  <option value="$70K - $80K">$70K - $80K</option>
                  <option value="$80K - $90K">$80K - $90K</option>
                  <option value="$90K - $100K">$90K - $100K</option>
                  <option value="$100K - $125K">$100K - $125K</option>
                  <option value="$125K - $150K">$125K - $150K</option>
                  <option value="$150K - $175K">$150K - $175K</option>
                  <option value="$175K - $200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                  required
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={companyDesc}
                  onChange={(e) => setCompanyDesc(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={companyPhone}
                  onChange={(e) => setCompanyPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  className={` ${
                    toEdit
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-indigo-500 hover:bg-indigo-600'
                  }  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline hover:cursor-pointer`}
                  type="submit"
                >
                  {toEdit ? 'Update Job' : 'Add Job'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobForm;
