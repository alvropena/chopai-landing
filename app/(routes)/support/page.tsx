export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Support</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <div className="space-y-4">
            {/* Add FAQ items */}
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <form className="space-y-4">
            {/* Add form fields */}
          </form>
        </div>
      </div>
    </div>
  );
}
