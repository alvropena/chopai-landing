import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.department} · {job.location}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="text-center bg-secondary">
            <CardHeader>
              <CardTitle>No Open Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We currently don't have any open positions. Please check back later for new opportunities.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Still interested in joining our team?</h2>
        <p className="text-muted-foreground">
          Send your resume to{' '}
          <a 
            href="mailto:me@alvropena.com" 
            className="text-primary underline hover:text-primary/80 transition-colors"
          >
            me@alvropena.com
          </a>
          {' '}and we'll reach out when a position matching your profile becomes available.
        </p>
      </div>
    </div>
  );
}
