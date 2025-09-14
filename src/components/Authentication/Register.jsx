import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateProfileInfo } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());
    console.log(email, password, rest.name);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileInfo(user, {
          displayName: rest.name,
          photoURL: rest.photo,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Register Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name"
              />

              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo url"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>
              All Ready Have an Account ?
              <Link to="/login">
                <span className="text-blue-800 font-bold"> Please Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
