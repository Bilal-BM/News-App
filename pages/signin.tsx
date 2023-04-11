import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';
import router, { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import signupImage from '../public/signup.jpg';
import Footer from '@/components/footer';

type Props ={
  error:any
}

export default function SignIn() {
    
const router = useRouter();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState(null as string | null);

  const handleSignIn = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/landing');
    } catch (error) {
      if (error instanceof Error) {
        // ✅ TypeScript knows err is Error
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
  };

  return (
    <div className=" bg-cover bg-center f-screen" style={{ backgroundImage: `url(${signupImage.src})` }}>
    
    <Navbar/>

    <div className="py-10 px-14 max-w-lg mx-auto ">
    <h2 className="text-3xl relative font-bold text-white font-sans mb-8 sm:relative  ">Sign In</h2>
      <div className="w-full max-w-md">
        <form className=' drop-shadow-2xl drop-shadow-2xl ' onSubmit={handleSignIn}>
          
          {errorMessage && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
              <p className="font-bold">Error</p>
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-white font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline  focus:ring-2 focus:ring-slate-800 sm:auto"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-800 focus:shadow-outline mb-1 sm:auto"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-900  font-bold text-gray-100 pt-2 rounded-lg py-3 px-8 hover:bg-slate-800 focus:outline-none focus:shadow-shadow-md"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
}