import { Link } from 'react-router-dom';
import img from "../assets/images/login/login.svg";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';
import { useState } from 'react';


const LoginForm = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();




    const handleGoogleSignIN = () => {
        console.log('google mama is coming');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    // const handleGithubSignIn = () => {
    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             const githubLoggedUser = result.user;
    //             console.log(githubLoggedUser)
    //             setUser(githubLoggedUser);
    //         })
    //         .catch(error => {
    //             console.log('error', error.message);
    //         })
    // }


    const handleGoogleSignOUT = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        } )
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="pb-40">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="bg-white flex items-center justify-center">
                    <img src={img} alt="Album" className="mx-auto w-[460px] h-[500px]" />
                </div>
                <div className="pr-10 border-[1px] border-[#D0D0D0] w-[611px] h-[782px] mt-20 px-20 bg-white rounded shadow-md">
                    <h2 className="text-4xl font-semibold text-center pt-20 pb-8 text-black">Log in</h2>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="text-[#444] text-lg font-medium mb-5">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Your email"

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="text-[#444] text-lg font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input bg-white w-[461px] h-[60px] border-[1px] hover:border-[1px] border-[#E8E8E8] mt-5 pl-6 rounded"
                                placeholder="Your password"
                            />
                        </div>
                        <div className="px-20px mt-7">
                            <button
                                type="submit"
                                className="w-[461px] h-[64px] bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-semibold rounded-md"
                            >
                                Log In
                            </button>
                        </div>
                    </form>


                    <div className="px-20px mt-7">
                        {
                            user ?

                                <button
                                    onClick={handleGoogleSignOUT}
                                    className="w-[461px] h-[64px] bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-semibold rounded-md"
                                >
                                    Google sign out
                                </button> :
                                <div>
                                    <button
                                        onClick={handleGoogleSignIN}
                                        className="w-[461px] h-[64px] bg-[#FF3811] hover:bg-[#FF3811] text-white text-xl font-semibold rounded-md"
                                    >
                                        Google sign in
                                    </button>
                                </div>


                        }
                        {
                            user &&
                            <div>
                                <h3>User: {user.displayName}</h3>
                                <p>Email: {user.email}</p>
                                <img src={user.photoURL} alt="" />

                            </div>
                        }


                    </div>





                    <div>
                        <p className="text-center pt-10">Create New Account? <Link to="/registration" className='text-[#FF3811]'>Sign Up</Link></p>
                    </div>
                    <div>
                        <p className="text-center pt-10">Login as an <Link to="/admin" className='text-[#FF3811]'>Admin</Link>? or <Link to="/" className='text-[#FF3811]'>Home</Link></p>
                    </div>



                </div>
            </div>
        </div>

    );
};

export default LoginForm;