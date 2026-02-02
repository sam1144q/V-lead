import React from 'react';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 relative">

        {/* Left Section: Hero Content */}
        <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-gray-800 bg-gradient-to-br from-white to-blue-50">
          <div className="absolute top-8 left-8 text-3xl font-extrabold text-blue-700">V-LEAD</div>
          <div className="mt-16 lg:mt-0">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
              Shape Your Future With Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Dream Big, <br />Grow Here.
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Unlock your potential at V-Lead. Join a community of innovators, sharpen your skills
              with cutting-edge programs, and be recognized for your achievements.
              Your journey to a fulfilling career starts now.
            </p>
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl mt-8">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                src="https://via.placeholder.com/800x600/EEF2F6/1F2937?text=Professional+Team+Collaboration"
                alt="Professional team collaborating in a modern office"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-6 left-6 text-white text-lg font-semibold">
                Innovation through Collaboration
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Application Form */}
        <div className="p-8 sm:p-12 lg:p-16 bg-blue-50/70 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Ready to Join Our Team?
          </h2>
          <p className="text-md text-gray-600 mb-8 text-center">
            Share your details below and we'll reach out to discuss your future with V-LEAD.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sr-only">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="First Name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email Address"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="mobile-no" className="block text-sm font-medium text-gray-700 sr-only">
                Mobile No.
              </label>
              <input
                type="tel"
                name="mobile-no"
                id="mobile-no"
                autoComplete="tel"
                placeholder="Mobile Number"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="position-applied" className="block text-sm font-medium text-gray-700 sr-only">
                Position Applied For
              </label>
              <select
                id="position-applied"
                name="position-applied"
                className="mt-1 block w-full pl-4 pr-10 py-3 text-base border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                defaultValue=""
              >
                <option value="" disabled>Select Position</option>
                <option>Software Engineer</option>
                <option>Product Manager</option>
                <option>UI/UX Designer</option>
                <option>Data Scientist</option>
                <option>Marketing Specialist</option>
              </select>
            </div>
            <div>
              <label htmlFor="resume-upload" className="block text-sm font-medium text-gray-700 sr-only">
                Upload Resume
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-blue-200 rounded-lg hover:border-blue-400 transition-colors duration-200">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-blue-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-4V20m0 0v-4l-4-4m-4 4h8"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Choose a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag it here</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOCX, JPG, PNG up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 sr-only">
                Remarks
              </label>
              <textarea
                id="remarks"
                name="remarks"
                rows={4}
                placeholder="Tell us a bit about yourself or your aspirations..."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;