export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <h2 className="container pt-2 text-center">Hello Student</h2>
        
        {children}
      </section>
    )
  }