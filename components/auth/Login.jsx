import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-5">Login</h1>
        <form>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className={`appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray-300`}
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className={`appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray-300`}
              placeholder="Password"
            />
          </div>

          {/* Remember me + forgot */}
          <div className="mb-4 flex justify-between items-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span className="ml-2 text-gray-700">Remember Me</span>
            </label>
            <Link href="/auth/login/forgot-password" className="text-primary">
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-primary">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
