"use client";
import { AuthContextProvider } from "@/context/use-auth-context";

type Props = {
  children: React.ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <form className="h-full">
        <div className="flex flex-col justify-between gap-3 h-full">
          {children}
        </div>
      </form>
    </AuthContextProvider>
  );
};
