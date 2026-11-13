import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 rounded-full">
          404 Error
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
          The page or project case study you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <Button
          href="/"
          variant="primary"
          size="md"
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
