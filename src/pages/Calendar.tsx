
import PageLayout from "@/components/layout/PageLayout";

const Calendar = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Calendar</h1>
          <p className="text-muted-foreground mt-1">
            Plan and schedule your Instagram content
          </p>
        </div>

        {/* Placeholder for future calendar features */}
        <div className="bg-muted rounded-lg p-12 text-center">
          <h3 className="text-xl font-medium mb-2">Content Calendar Coming Soon</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Soon you'll be able to plan, create, and schedule posts with AI-powered optimal timing suggestions.
          </p>
          <div className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Coming in Next Update
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Calendar;
