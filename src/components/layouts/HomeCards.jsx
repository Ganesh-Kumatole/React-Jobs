import HomeCard from '../common/HomeCard';

const HomeCards = () => {
  return (
    <>
      <section class="py-4">
        <div class="container-xl lg:container m-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <HomeCard label="developer" />
            <HomeCard label="employer" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
