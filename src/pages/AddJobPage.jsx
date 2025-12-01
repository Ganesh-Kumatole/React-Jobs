import JobForm from '../components/layouts/JobForm';

const AddJobPage = ({ addJob }) => {
  return (
    <>
      <JobForm addJob={addJob} />
    </>
  );
};

export default AddJobPage;
