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
      <h1 className="text-center font-bold text-3xl text-orange-500">
        Register
      </h1>
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
        className="flex flex-col mx-auto md:w-3/6 gap-3 justify-center mt-[2%] w-[80%] rounded-lg z-10"
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
      <p className="mt-3 text-center z-10">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-orange-500 font-bold">
          ¡Inicia sesión!
        </Link>
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
      className="md:block md:mt-[20%] absolute bottom-0 z-0">
        <path
          fill="#ff5500"
          d="M0,256L40,266.7C80,277,160,299,240,282.7C320,267,400,213,480,186.7C560,160,640,160,720,176C800,192,880,224,960,250.7C1040,277,1120,299,1200,288C1280,277,1360,235,1400,213.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
};

export default RegisterPage;
