export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50 px-2"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('/assets/images/bg/top-view-table-full-food.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        boxSizing: 'border-box',
      }}
    >
      <div className="w-full max-w-sm px-5 py-8 sm:px-8 rounded-lg shadow-md bg-white">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <h2>First Bite</h2>
        </div>
        {/* Title */}
        <h2 className="mb-4 text-center text-2xl font-bold text-green-700">
          Login
        </h2>
        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">
              Mobile Number
            </label>
            <input
              id="email"
              type="number"
              required
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="xxx-xxx-xxxx"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-700">
              OTP
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full p-3 rounded border border-gray-200 focus:border-green-700 focus:outline-none text-gray-700 placeholder-gray-400"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-green-600 p-3 font-medium text-white transition hover:bg-green-700 pointer"
          >
            Request OTP
          </button>
        </form>
        {/* Links */}
        <div className="mt-4 flex justify-between text-xs">
          <a href="#" className="text-green-600 hover:underline">Resend OTP?</a>
          {/* <a href="#" className="text-green-600 hover:underline">Create account</a> */}
        </div>
      </div>
    </div>
  );
}
