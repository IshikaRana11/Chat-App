import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";
const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(Username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center sm:h-[300px] md:h-auto md:w-[400px]">
      <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-indigo-900">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="label ">
              <span className="text-base label-text text-indigo-900">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={"/Signup"}
            className="text-sm text-gray-800 hover:underline hover:text-blue-800 mt-2 inline-block"
          >
            {"dont't"}have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span
                  className="loading loading-spinner
              "
                ></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

//starter code for this file
// import React from "react";
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//             <label className="label ">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             {"dont't"}have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">LOGIN</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Login;
