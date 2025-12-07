import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeClosed, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen linear-gradient-to-br from-slate-50 to-emerald-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="pl-2 mb-8">
          <h1 className="text-2xl font-bold text-emerald-700">
            Glad to see you again!
          </h1>
        </div>

        <Card className="w-full max-w-sm border-emerald-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">
              Login to your account
            </CardTitle>
            <CardDescription className="text-slate-600">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-slate-700 flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4 text-slate-500" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-500 underline-offset-2 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    className="pr-10 border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute inset-y-0 right-0 flex h-full items-center px-3 text-slate-500 hover:text-emerald-600"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeClosed className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                Login
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-400"
                onClick={() => navigate('/')}
              >
                Login with Google
              </Button>
              <Button
                type="button"
                variant="link"
                className="px-0 font-normal text-sm text-emerald-600 hover:text-emerald-500"
                onClick={() => navigate('/register')}
              >
                Don’t have an account? Sign up
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
