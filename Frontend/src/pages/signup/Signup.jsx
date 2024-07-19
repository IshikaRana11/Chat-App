import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";
const signup = () => {
  const [inputs, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup: Signingup } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInput((prevInputs) => ({
      ...prevInputs,
      gender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Signingup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center sm:h-[300px] md:h-auto md:w-[400px]">
      <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-800 label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Ishika Rana"
              className="w-full input input-bordered h-10"
              value={inputs.fullname}
              onChange={(e) =>
                setInput({ ...inputs, fullname: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-gray-800 label-text">
                UserName
              </span>
            </label>
            <input
              type="text"
              placeholder="Ishika-Rana"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInput({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base text-gray-800 label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInput({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base text-gray-800 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={
                (e) => setInput({ ...inputs, confirmPassword: e.target.value }) // Fixed typo here
              }
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to={"/Login"}
            className="text-sm text-gray-800 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            already have an account?
          </Link>
          {/**GENDER CHECK BOX GOES HERE==================> */}
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default signup;

//starter code for signup page------------------------------------------->>>>>>>>>>>>>>>>>
// import GenderCheckBox from "./GenderCheckBox";
// const signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-blue-100 bg-clip-padding backdrop-filter:backdrop-blur-lg  bg-opacity-30 border border-gray-200 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Ishika Rana"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">UserName</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Ishika-Rana"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2 ">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2 ">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             already have an account?
//           </a>
//           {/**GENDER CHECK BOX GOES HERE==================> */}
//           <GenderCheckBox />
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               SIGN UP
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default signup;
