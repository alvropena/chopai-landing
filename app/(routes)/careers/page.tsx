interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
}

export default function CareersPage() {
  const jobPostings: JobPosting[] = [];  // Empty array since there are no jobs currently

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <div className="space-y-6">
        {jobPostings.length > 0 ? (
          jobPostings.map((job) => (
            <div key={job.id} className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600">{job.department} · {job.location}</p>
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-medium text-gray-900 mb-2">No Open Positions</h2>
            <p className="text-gray-600">
              We currently don't have any open positions. Please check back later for new opportunities.
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Still interested in joining our team?</h2>
        <p className="text-gray-600">
          Send your resume to{' '}
          <a href="mailto:me@alvropena.com" className="text-blue-600 hover:text-blue-800 underline">
            me@alvropena.com
          </a>
          {' '}and we'll reach out when a position matching your profile becomes available.
        </p>
      </div>
    </div>
  );
}
