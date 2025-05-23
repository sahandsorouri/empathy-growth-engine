
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100">
      <div className="text-center max-w-md p-6">
        <div className="w-24 h-24 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-brand-600">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It might have been moved or deleted.
        </p>
        <Button asChild className="bg-brand-600 hover:bg-brand-700">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
