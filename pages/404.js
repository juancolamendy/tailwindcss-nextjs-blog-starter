import { Link } from '../components/Link';

const FourZeroFour = () => {
  return (
  <div className="flex flex-col items-center justify-center space-y-4 md:mt-24 md:flex-row md:space-x-6">
    <div className="pt-6 pb-8">
      <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-primary-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
        404
      </h1>
    </div>
    <div className="flex flex-col items-center justify-center max-w-md">
      <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
        Sorry we couldn't find this page.
      </p>
      <p className="mb-8 text-center">But dont worry, you can find plenty of other things on our homepage.</p>
      <Link href="/">
        <button 
          className="inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
          Back to homepage
        </button>
      </Link>
    </div>
  </div>
  )
};

export default FourZeroFour;
