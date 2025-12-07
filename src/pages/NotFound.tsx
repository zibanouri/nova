import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen linear-gradient-to-br from-emerald-50/30 to-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-2">
      
          <h1 className="text-3xl font-semibold text-slate-800 inline-flex items-center justify-center">
            Not found — but you’re safe here.
          </h1>
          <p className="text-4xl font-mono font-bold text-emerald-700 tracking-tight">404</p>
        </div>

        <div className="space-y-3">
          <p className="text-slate-800 leading-relaxed"> 
            It whispered: <span className="italic">“Route not defined… yet.”</span>
          </p>
          <p className="text-slate-700 text-sm">
            (Error type: <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">Error</code>)
          </p>
        </div>

        <div className="pt-2">
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <div className="w-12 h-0.5 bg-emerald-300 mx-auto rounded-full"></div>
          <p className="mt-4 text-xs text-slate-400 font-mono">
            NotFound
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;