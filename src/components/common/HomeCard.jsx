const HomeCard = (props) => {
  const { label } = props;

  return (
    <>
      <div
        className={`${
          label == 'developer' ? 'bg-gray-100' : 'bg-indigo-100'
        } p-6 rounded-lg shadow-md`}
      >
        <h2 className="text-2xl font-bold">
          {label == 'developer' ? 'For Developers' : 'For Employers'}
        </h2>
        <p className="mt-2 mb-4">
          {label == 'developer'
            ? 'Browse our React jobs and start your career today'
            : 'List your job to find the perfect developer for the role'}
        </p>
        <a
          href="/jobs.html"
          className={`inline-block text-white rounded-lg px-4 py-2 ${
            label == 'developer'
              ? 'hover:bg-gray-700 bg-black'
              : 'bg-indigo-500 hover:bg-indigo-600'
          }`}
        >
          {label == 'developer' ? 'Browse Jobs' : 'Add Job'}
        </a>
      </div>
    </>
  );
};

export default HomeCard;
