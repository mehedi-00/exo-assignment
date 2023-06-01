import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import petals from "../../assets/petals.png";
import logo from '../../assets/logo.png';
import "./Login.css";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-7">
      <div className="exoBackground rounded-[20px] flex flex-col h-[300px] md:h-full justify-center pl-5 relative order-2 md:order-1">
        <img className="absolute top-4 left-4 w-16 h-5" src={logo} alt="" />
        <div className="space-y-3">
          <h3 className="text-white text-[38px] font-semibold">100% Uptime😎</h3>
          <p className="text-[#BFBFBF]">
            Zero Infrastructure <br /> Management
          </p>
        </div>
      </div>
      <div className="px-12 order-1 md:order-2">
        <div className="text-center">
          <img className="w-[61px] h-[49px] mx-auto" src={petals} alt="" />
          <h3 className="text-[#020100] font-medium text-4xl">
            Welcome <span className="text-[#08A593]">back!</span>
          </h3>
          <p className="text-[#667085]">Glad to see you, Again!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
          <input
            className="text-[#66708] py-4 px-5 border border-[#464660] rounded-[10px] w-full"
            type="email"
            {...register("email", { required: true })}
            id=""
            placeholder="Enter your email"
            />
            {errors?.email && <span className="text-red-600 mt-0">Email is required</span>}
          <div className="relative mt-5">
            <input
              className="text-[#66708] py-4 px-5 border border-[#464660] rounded-[10px] w-full"
              type="password"
              {...register("password", { required: true })}
              id=""
              placeholder="Enter your password"
            />
            {errors?.password && <span className="text-red-600 mt-0">Password is required</span>}
            <span className="absolute top-1/3 right-4 w-5 h-3">
              <FaEye></FaEye>
            </span>
          </div>
          <div className="text-right mt-[6px]">
            <button className="text-xs text-[#667085] mb-9">
              Forgot Password?
            </button>
          </div>
          <input
            className="font-semibold text-lg text-white py-4 px-auto w-full bg-[#020100] rounded-[10px] login-shadow"
            type="submit"
            value="Log In"
          />
        </form>
        <p className="text-[#667085] mt-16 text-sm text-center">
          Don’t have an account yet?{" "}
          <Link className="text-[#08A593]">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
