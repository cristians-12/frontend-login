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
      <h1 className="text-center font-bold text-3xl">Register</h1>
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
        className="flex flex-col mx-auto w-2/6 gap-3 justify-center mt-[5%]"
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
          className="bg-orange-400 p-2 rounded hover:bg-orange-600 font-bold"
        >
          Registrarse
        </button>
      </form>
      <p className="mt-3 text-center">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-orange-400">
          ¡Inicia sesión!
        </Link>
      </p>
    </main>
  );
};

export default RegisterPage;
