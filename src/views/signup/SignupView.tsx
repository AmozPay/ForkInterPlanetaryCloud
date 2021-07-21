import React from "react";
import {useAuthContext} from "../../contexts/auth";
import {AuthError} from "../../lib/auth";
import {useUserContext} from "../../contexts/user";

const SignupView: React.FC = _ => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {setUser} = useUserContext();
    const auth = useAuthContext();

    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const signupUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        auth.signup(email, password)
            .then((user) => {
                setUser(user);
            })
            .catch((e: AuthError) => {
                console.error(e);
            })
    };

    return (
        <div className={"flex items-center justify-center"}>
            <form onSubmit={(e) => signupUser(e)} className={"mt-24 bg-white p-6 rounded-md border border-gray-200 w-[400px] shadow-md"}>
                <div className={""}>
                    <p className={"text-xl"}>
                        Sign up
                    </p>
                </div>
                <div className={"flex flex-col mt-6"}>
                    <label className={"text-sm text-gray-600 mb-1"}>Email</label>
                    <input className={"p-2 text-sm bg-gray-100 border border-gray-300 rounded mb-4"}
                        onChange={emailChange}
                        type="text"/>
                    <label className={"text-sm text-gray-600 mb-1"}>Password</label>
                    <input
                        className={"p-2 text-sm bg-gray-100 border border-gray-300 rounded"}
                        onChange={passwordChange}
                        type="password"/>
                </div>
                <div className={"flex justify-end mt-6"}>
                    <button className={"shadow p-2 px-4 text-sm bg-blue-600 text-white rounded transition duration-200 hover:bg-blue-700"}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignupView;