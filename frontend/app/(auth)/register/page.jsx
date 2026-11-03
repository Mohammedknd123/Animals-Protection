import RegisterForm from "@/app/components/auth/RegisterForm";
import RegisterLeftSide from "@/app/components/auth/RegisterLeftSide";
import { ThemeToggle } from "@/app/components/ui/ThemeToggle";

export default function Register() {
  return (
    <div className="relative flex min-h-screen h-full items-center justify-center bg-light-blue-color/50 dark:bg-dark-blue py-10 overflow-hidden">
      <div className="absolute top-3 right-4 z-20">
        <ThemeToggle />
      </div>
      <div className="flex w-[90%] max-w-6xl flex-col overflow-hidden rounded-xl shadow-lg lg:flex-row">
        <RegisterLeftSide />
        <RegisterForm />
      </div>
    </div>
  );
}
