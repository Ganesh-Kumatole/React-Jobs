import JobForm from '../components/layouts/JobForm';

const AddJobPage = ({ addJob, editJob }) => {
  return (
    <>
      <JobForm addJob={addJob} toEdit={false} editJob={editJob} />
    </>
  );
};

export default AddJobPage;
