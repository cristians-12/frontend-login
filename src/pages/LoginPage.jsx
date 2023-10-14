import { useForm } from "react-hook-form";
import { AuthContext, AuthProvider, useAuth } from "../context/AuthContext";
import { Link,useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, errores, isAuthenticated } = useAuth();
  const onSubmit = handleSubmit(async (valores) => {
    await signIn(valores);
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-[20px] mb-3 text-orange-500">LOGIN</h1>
      {errores.map((error, i) => {
        return (
          <div key={i} className="bg-red-700 w-[50%] text-center font-bold p-2">
            <p>{error}</p>
          </div>
        );
      })}
      <form
        onSubmit={onSubmit}
        className="flex flex-col mx-auto md:w-2/6 gap-3 justify-center mt-[5%] w-[80%] "
      >
        <input
          type="email"
          name="email"
          // id=""
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none dark:placeholder:text-white dark:bg-dark bg-dark placeholder:text-black"
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
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none dark:placeholder:text-white placeholder:text-black"
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
          Iniciar sesión
        </button>
      </form>
      <p className="mt-3 text-center">
        ¿Aún no tienes una cuenta?{" "}
        <Link to="/register" className="text-orange-400 font-bold">
          ¡Unete!
        </Link>
      </p>
      <div className="overflow-hidden w-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="md:block md:mt-[20%] absolute bottom-0 -z-1"
        >
          <path
            fill="#ff5500"
            // fill-opacity="1"
            d="M0,96L80,133.3C160,171,320,245,480,234.7C640,224,800,128,960,112C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default LoginPage;
