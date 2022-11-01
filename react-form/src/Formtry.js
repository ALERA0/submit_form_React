import React from "react";
import { Link } from "react-router-dom";

const Formtry = ({ form, handleChange }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 ">
      <div className="mx-auto sm:w-full sm:max-w-d ">
        <img
          src="https://img.icons8.com/ios/50/000000/username.png"
          className="mx-auto h-20 w-auto mb-5 "
          alt=""
        />
      </div>
      <div className="mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-[#20354b] py-8 px-6 shadow rounded-3xl sm:px-10  ">
          <form className="mb-0 space-y-8 ">
            <div className="mt-1 ">
              <label className="block text-sm font-medium text-yellow-50">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="border-2 rounded-lg border-blue-600 w-full "
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-1 ">
              <label className="block text-sm font-medium text-yellow-50">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="border-2 rounded-lg border-blue-600  w-full "
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-1 ">
              <label className="block text-sm font-medium text-yellow-50">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="border-2 rounded-lg border-blue-600 w-full"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mt-1 ">
              <label className="block text-sm font-medium text-yellow-50">
                City
              </label>
              <select
                name="city"
                className="border-2 rounded-lg border-blue-600 text-center w-full "
                value={form.city}
                onChange={handleChange}
              >
                <option value="">Select your city</option>
                <option value="Istanbul">Istanbul</option>
                <option value="Konya">Konya</option>
                <option value="Izmir">Izmir</option>
                <option value="Ankara">Ankara</option>
              </select>
              <div className="mt-1 ">
                <label className="block text-sm font-medium text-yellow-50  mt-8">
                  Address
                </label>
                <textarea
                  className="sm:w-full sm:h-full  text-black  border-2 border-blue-600 rounded-lg "
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mt-1">
                <Link to="/information">
                <button class="bg-blue-500  text-white font-bold py-2 px-4 rounded w-full mt-5 ">
                  Send and Show
                </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formtry;
