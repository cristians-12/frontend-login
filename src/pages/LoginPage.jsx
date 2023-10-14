import { useForm } from "react-hook-form";
import { AuthContext, AuthProvider, useAuth } from "../context/AuthContext";
import { Link,useNavigate } from "react-router-dom";

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

useEffect(()=>{
   if(isAuthentificated) navigate('/tasks');
},[isAuthentificated,navigate])

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-[20px] mb-3">LOGIN</h1>
      {errores.map((error, i) => {
        return (
          <div key={i} className="bg-red-700 w-[50%] text-center font-bold p-2">
            <p>{error}</p>
          </div>
        );
      })}
      <form
        onSubmit={onSubmit}
        className="flex flex-col mx-auto md:w-2/6 gap-3 justify-center mt-[5%] sm:w-[80%]"
      >
        <input
          type="email"
          name="email"
          // id=""
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none "
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
          Iniciar sesión
        </button>
      </form>
      <p className="mt-3 text-center">
        ¿Aún no tienes una cuenta?{" "}
        <Link to="/register" className="text-orange-400">
          ¡Unete!
        </Link>
      </p>
    </main>
  );
};

export default LoginPage;
