import { LoginForm } from "../components/LoginForm";
import loginBg from "../assets/login_bg.jpeg";


export const LoginPage = () => {
  return (
    <section className="bg-cover w-full" style={{backgroundImage: `url(${loginBg})` }}>
      <div className="h-[100vh] w-full p-4 grid place-items-center inset-0 bg-black/30">
      <LoginForm userName={""} password={""} />
    </div>
    </section>
  )
}
