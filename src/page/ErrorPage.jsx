import React from "react";
import {useNavigate} from "react-router-dom";

function ErrorPage() {
  const user = localStorage.getItem("user"); 
  const navigate = useNavigate();
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 ">
        <div class=" flex justify-center items-center min-h-screen lg:flex lg:items-center lg:gap-12">
          <div class="wf-ull lg:w-1/2">
            <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn't exist.Here are some
              helpful links:
            </p>
            <div className="text-sm font-medium text-blue-600 mt-3 p-4 bg-blue-500 inline-block text-white">
              <button onClick={()=>navigate('/encounters')}>Go to Home page</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
