import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, user, isAuthenticated, errores } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  console.log(user);

  const onSubmit = handleSubmit(async (values) => {
    await signUp(values);
  });

  return (
    <main className="h-screen flex justify-center flex-col">
      <h1 className="text-center font-bold text-3xl text-orange-500">Register</h1>
      {errores.map((error, i) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div
            className="bg-red-700 w-[50%] self-center font-bold p-3 mt-[40px] rounded-lg"
            key={i}
          >
            <p>{error}</p>
          </div>
        );
      })}
      <form
        onSubmit={onSubmit}
        className="flex flex-col mx-auto md:w-3/6 gap-3 justify-center mt-[2%] w-[80%] rounded-lg"
      >
        <input
          type="text"
          name="username"
          {...register("username", { required: true })}
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none"
          placeholder="Usuario"
        />
        {errors.username && (
          <p className="text-red-700 text-[12px]">
            El nombre de usuario es requerido
          </p>
        )}
        <input
          type="email"
          name="email"
          // id=""
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-700 text-[12px]">
            El email de usuario es requerido
          </p>
        )}
        <input
          type="password"
          name="password"
          // id=""
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />
        {errors.password && (
          <p className="text-red-700 text-[12px]">
            La contraseña de usuario es requerido
          </p>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded hover:bg-orange-600 font-bold"
        >
          Registrarse
        </button>
      </form>
      <p className="mt-3 text-center">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-orange-500 font-bold">
          ¡Inicia sesión!
        </Link>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320 "
        className="md:block md:mt-[30%] absolute bottom-0 -z-1 md:bottom-[-20%]"
      >
        <path
          fill="#ff5500"
          d="M0,160L48,149.3C96,139,192,117,288,96C384,75,480,53,576,58.7C672,64,768,96,864,144C960,192,1056,256,1152,240C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
};

export default RegisterPage;
