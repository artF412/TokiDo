import ThemeToggle from '@/components/ThemeToggle'
import { Link } from 'react-router-dom'
function Login() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          {/* Background layers */}
          <ThemeToggle />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-indigo-600 dark:to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          
          <div className="relative px-4 py-10 bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">TokiDo</h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">Manage your time, master your tasks</p>
              </div>
  
              <div className="mt-8 space-y-6">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full py-2 px-4 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-md transition duration-200">
                  Login
                </button>
                <div className="text-center">
                    <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        Don't have an account? Sign up
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login