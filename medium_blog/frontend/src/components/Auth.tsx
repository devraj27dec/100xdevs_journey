
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { SignUpType , signupSchema} from "@devraj2002/medium-common";
import { z } from "zod";

export default function Auth({type}: {type: "signup" | "signin"}) {
  
  const navigate = useNavigate()

  const [errors, setErrors] = useState<Partial<Record<keyof SignUpType, string>>>({});

  const [postInputs, setPostInputs] = useState<SignUpType>({
    name: "",
    email: "",
    password: ""
  });

  const validateInputs = () => {
    try {
      signupSchema.parse(postInputs);
      setErrors({}); 
      return true;
    } catch (e) {
      const validationErrors = (e as z.ZodError).flatten().fieldErrors;
      setErrors(validationErrors as Partial<Record<keyof SignUpType, string>>);
      return false;
    }
  };


  const handleSubmit = async() => {
    if(!validateInputs) return
    
    const response  = await axios.post(`${BACKEND_URL}/user/${type === "signup" ? "signup" : "signin"}` , postInputs)
    const jwt = response.data
    localStorage.setItem("token" , jwt)
    signupSchema.safeParse(postInputs)

    navigate('/blogs')
  }
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className=" flex justify-center">
        <div>
          <div className="px-10">
            <div className="font-bold text-3xl">
              {type === "signin" ? "Login an account" : "Create an account"}
            </div>
            <div className="text-slate-500">
              {type === "signin" ? "Don't have an account?" : "Already have an account?"}
              <Link to={type === "signin" ? "/signup" : "/signin"} className="pl-2 underline">
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex flex-col space-y-2">
              {type === "signup" ? (
                <LabeledInput
                  label="Name"
                  type={"name"}
                  placeholder="Enter your Name"
                  value={postInputs.name || ""}
                  error={errors.name}
                  onChange={(e) => {
                    setPostInputs({
                      ...postInputs,
                      name: e.target.value,
                    });
                  }}
                />
              ) : null}
              <LabeledInput
                label="Email"
                type={"email"}
                placeholder="Enter your Email"
                value={postInputs.email}
                error={errors.email}
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    email: e.target.value,
                  });
                }}
              />
              <LabeledInput
                label="Password"
                type={"password"}
                placeholder="Enter your password"
                value={postInputs.password}
                error={errors.password}
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
              <button onClick={handleSubmit} className="bg-black text-white rounded-md p-2">
                {type === "signup" ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabeledInputType{
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value:string;
  error?:string;
}

function LabeledInput({
  label,
  placeholder,
  onChange,
  type,
  value,
  error
}: LabeledInputType) {
  return (
    <div>
      <label className=" block mb-2 text-black font-semibold pt-2">
        {label}
      </label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        }`}
        required
      />
    </div>
  );
}
