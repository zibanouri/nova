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
import { Eye, EyeClosed, Leaf, User, Mail, Lock, UserPlus, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen linear-gradient-to-br from-slate-50 to-emerald-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="pl-2 mb-8">
          <h1 className="text-2xl font-bold text-emerald-700 flex items-center">
            Welcome to my panel!
            <Leaf className="ml-2 h-5 w-5 text-emerald-600" />
          </h1>
          <h2 className="text-lg text-slate-600 mt-1">
            Create your account to begin
          </h2>
        </div>

        <Card className="w-full max-w-sm border-emerald-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">
              Create your account
            </CardTitle>
            <CardDescription className="text-slate-600">
              Fill in the details below to get started
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700 flex items-center">
                    First Name
                    <User className="ml-1.5 h-4 w-4 text-slate-500" />
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="..."
                    required
                    className="border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-700 flex items-center">
                    Last Name
                    <User className="ml-1.5 h-4 w-4 text-slate-500" />
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="..."
                    required
                    className="border-slate-300 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 flex items-center">
                  <Mail className="ml-2 h-4 w-4 text-slate-500" />
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
                  <Label htmlFor="password" className="text-slate-700 flex items-center">
                   
                    <Lock className="ml-1.5 h-4 w-4 text-slate-500" />
                   Password</Label>
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
                <UserPlus className="mr-2 h-4 w-4" />
                Sign up
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-400"
                onClick={() => navigate('/')}
              >
                <Globe className="mr-2 h-4 w-4" />
                Sign up with Google
              </Button>
              <Button
                type="button"
                variant="link"
                className="px-0 font-normal text-sm text-emerald-600 hover:text-emerald-500"
                onClick={() => navigate('/login')}
              >
                Already have an account? Log in
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;