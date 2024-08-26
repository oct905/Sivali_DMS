export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <div className="text-green-500 flex items-center">
              <span className="mr-2">✓</span>
              Verified
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="dashboard-card buy-credit-card">
              <svg
                className="w-12 h-12 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="text-lg font-semibold">Buy Credit</h3>
            </div>
            <div className="dashboard-card history-transaction-card">
              <svg
                className="w-12 h-12 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-semibold">History Transaction</h3>
            </div>
            <div className="dashboard-card list-candidate-card">
              <svg
                className="w-12 h-12 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <h3 className="text-lg font-semibold">List Candidate</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">
                Upcoming Interview Schedules
              </h3>
              <div className="text-center py-8">
                <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium">
                  Not yet schedules interview
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Find your candidates now
                </p>
                <button className="find-candidates-button">
                  Find Candidates
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Balance Credit</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Full Time</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>Job Posting</span>
                    <span>: -</span>
                    <span>Find Talent</span>
                    <span>: -</span>
                    <span>Expired Quota</span>
                    <span>: -</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Part Time</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>Credit</span>
                    <span>: Rp. 251.140.000</span>
                  </div>
                </div>
                <button className="buy-packaged-button">Buy Packaged</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
