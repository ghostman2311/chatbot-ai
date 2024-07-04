"use client";

type Props = {
  children: React.ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  return (
    <form className="h-full">
      <div className="flex flex-col justify-between gap-3 h-full">
        {children}
      </div>
    </form>
  );
};
