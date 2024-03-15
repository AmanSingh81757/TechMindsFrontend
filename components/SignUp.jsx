import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-cover bg-fixed bg-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
