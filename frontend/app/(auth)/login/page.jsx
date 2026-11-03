import LoginForm from "@/app/components/auth/LoginForm";
import LoginImage from "@/app/components/auth/LoginImage";

export default function Login() {
  return (
    <div className=" min-h-screen flex bg-white dark:bg-dark-blue overflow-hidden">
      <LoginForm />
      <LoginImage />
    </div>
  );
}
