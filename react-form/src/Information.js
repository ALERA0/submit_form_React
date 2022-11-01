const Information = ({ form }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="mx-auto sm:w-full sm:max-w-md">
        <div className="mx-auto sm:w-full sm:max-w-d ">
          <h2 className="font-mono text-3xl  font-medium  mx-auto h-20 w-auto text-yellow-100 mb-5 flex justify-center mt-5">
            INFORMATIONS OF <br /> {form.name}
          </h2>
        </div>
        <div className="bg-[#06113E] py-8 px-6 shadow rounded-lg sm:px-10 ">
          <div className=" my-8 rounded-lg flex-row text-white">
            <div className="bg-[#1C2927]">
              <h1 className="flex justify-center">Email </h1>
              <h2 className="mb-3">{form.email}</h2>
            </div>
            <div className="bg-[#1C2927]">
              <h1 className="flex justify-center">Password </h1>
              <h2 className="mb-3">{form.password}</h2>
            </div>
            <div className="bg-[#1C2927]">
              <h1 className="flex justify-center">City </h1>
              <h2 className="mb-3">{form.city}</h2>
            </div>
            <div className="bg-[#1C2927]">
              <h1 className="flex justify-center">Address </h1>
              <h2 className="mb-3">{form.address}</h2>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
