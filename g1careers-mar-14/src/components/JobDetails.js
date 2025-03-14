import React from 'react';
import Subscribe from './Subscribe';
const JobDetails = () => {
  return (
    <section className="job-details pt-28 pb-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
         
          <div className="lg:w-1/3 w-full">
            <div className="job-sidebar mr-0 lg:mr-10">
              <div className="info-widget bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <ul className="space-y-4">
                  <li>
                    <h5 className="font-bold text-gray-700">Location</h5>
                    <p className="text-gray-600">San Fransisco, Californ</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-gray-700">Website</h5>
                    <p><a href="#" className="text-blue-600 hover:underline">http://www.example.com</a></p>
                  </li>
                  <li>
                    <h5 className="font-bold text-gray-700">Salary</h5>
                    <p className="text-gray-600">$200 - $300 Per Month</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-gray-700">Experience Need</h5>
                    <p className="text-gray-600">2-3 Yrs</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-gray-700">Apply Within</h5>
                    <p className="text-gray-600">25th March, 2025</p>
                  </li>
                </ul>
              </div>
              <div className="requirements-widget bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex"><span className="font-semibold min-w-20 text-gray-700">Age :</span> <span className="text-gray-600">25th March, 2025</span></li>
                  <li className="flex"><span className="font-semibold min-w-20 text-gray-700">Sex :</span> <span className="text-gray-600">Male/ Female</span></li>
                  <li className="flex"><span className="font-semibold min-w-20 text-gray-700">Education :</span> <span className="text-gray-600">CSE enginear</span></li>
                  <li className="flex"><span className="font-semibold min-w-20 text-gray-700">Experience :</span> <span className="text-gray-600">1-3 Yrs</span></li>
                  <li className="flex"><span className="font-semibold min-w-20 text-gray-700">Skills :</span> <span className="text-gray-600">Something Related this Job</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-2/3 w-full mt-8 lg:mt-0">
            <div className="job-details-content">
              <div className="text-box mb-16">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Job Description</h3>
                <p className="mb-4 text-gray-600">A Software Engineer is a professional who applies engineering principles to the design, development, maintenance, testing, and evaluation of software and systems that make computers or devices function effectively.</p>
                <p className="text-gray-600">Software Engineers are proficient in various programming languages and tools, and they continuously update their skills to keep pace with the ever-evolving technology landscape.</p>
              </div>

              <div className="text-box mb-14">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Collaborate with stakeholders to understand the requirements</li>
                  <li>Design the overall structure of the software system, including system</li>
                  <li>Choose appropriate technologies and frameworks to meet project requirements.</li>
                  <li>Review code written by peers to ensure quality and adherence to standards.</li>
                  <li>Participate in project planning, including estimating timelines and resources needed.</li>
                  <li>Optimize software for performance, scalability, and efficiency.</li>
                </ul>
              </div>

              <div className="text-box mb-16">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Advantages</h3>
                <p className="mb-4 text-gray-600">A Software Engineer is a professional who applies engineering principles to the design, development, maintenance, testing, and evaluation of software and systems that make computers or devices function effectively.</p>
                <p className="text-gray-600">Software Engineers are proficient in various programming languages and tools, and they continuously update their skills to keep pace with the ever-evolving technology landscape.</p>
              </div>

              <div className="share-box">
                <ul className="flex items-center flex-wrap">
                  <li className="mr-4 mb-2"><h5 className="font-bold text-gray-700">Share On:</h5></li>
                  <li className="mr-3 mb-2"><a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full p-2"><svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></a></li>
                  <li className="mr-3 mb-2"><a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full p-2"><svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></a></li>
                  <li className="mr-3 mb-2"><a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full p-2"><svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/></svg></a></li>
                  <li className="mb-2"><a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 rounded-full p-2"><svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </section>
  );
};

export default JobDetails;