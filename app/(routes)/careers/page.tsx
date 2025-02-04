interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
}

export default function CareersPage() {
  const jobPostings: JobPosting[] = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "Remote",
    },
    // Add more job postings as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <div className="space-y-6">
        {jobPostings.map((job) => (
          <div key={job.id} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600">{job.department} · {job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
