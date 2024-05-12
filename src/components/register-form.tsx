'use client';

import { postData } from '@/utils/functions';
import { Input } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';

const RegisterForm = () => {
  const [signIn, setSignIn] = useState(false);

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [postError, setPostError] = useState(false);

  const [messageError, setMessageError] = useState(false);

  const [messageSuccess, setMessageSuccess] = useState();
  console.log('🚀 ~ RegisterForm ~ messageSuccess:', messageSuccess);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const newErrors: any = { ...errors };

    if (name === 'name' && /\d/.test(value)) {
      newErrors[name] = 'Name should not contain numbers';
    } else {
      newErrors[name] = ''; // Clear error if validation passes
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handlePost = async (token: string | undefined) => {
    const response = await postData('http://127.0.0.1:8000/register', formData, token);
    if (response.success) {
      setRegisterSuccess(true);
      setSignIn(true);
      setMessageSuccess(response.data);
    } else {
      setPostError(true);
      setMessageError(response.data.username[0]);
      setRegisterSuccess(false);
    }
  };

  return (
    <div className="min-w-[320px] mac-w-[320px] md:min-w-[400px] md:max-w-[400px] xl:min-w-[440px] xl:max-w-[440px]">
      {signIn ? (
        <>
          {registerSuccess && (
            <span className="text-primary">Successfully registered, please sign in with your information below.</span>
          )}

          <form
            className="flex flex-col gap-4 mt-2"
            onSubmit={(event) => {
              event.preventDefault();
              handlePost(undefined);
            }}
          >
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="userName" label="Username" name="username" isRequired onChange={handleChange} />
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-2">
              <Input type="password" label="Password" name="password" isRequired onChange={handleChange} />
            </div>
            {postError ? <span style={{ color: 'red' }}>{messageError}</span> : null}
            <div className="flex justify-between">
              <button
                className="bg-primary text-md font-bold rounded-full px-5 py-2 self-start hover:bg-primary-400"
                type="submit"
              >
                Sign In
              </button>
              <span
                onClick={() => setSignIn(false)}
                className="text-primary underline underline-offset-2 hover:cursor-pointer"
              >
                I do not have an account yet
              </span>
            </div>

            <span style={{ color: 'red' }}>{errors.name}</span>
          </form>
        </>
      ) : (
        <>
          {registerSuccess === false ? (
            <>
              <form
                className="flex flex-col gap-4 mt-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  handlePost(undefined);
                }}
              >
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="userName" label="Username" name="username" isRequired onChange={handleChange} />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="email" label="Email" name="email" isRequired onChange={handleChange} />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="password" label="Password" name="password" isRequired onChange={handleChange} />
                </div>
                {postError ? <span style={{ color: 'red' }}>{messageError}</span> : null}
                <div className="flex justify-between">
                  <button
                    className="bg-primary text-md font-bold rounded-full px-5 py-2 self-start hover:bg-primary-400"
                    type="submit"
                  >
                    Submit
                  </button>
                  <span
                    onClick={() => setSignIn(true)}
                    className="text-primary underline underline-offset-2 hover:cursor-pointer"
                  >
                    I already have an account
                  </span>
                </div>

                <span style={{ color: 'red' }}>{errors.name}</span>
              </form>
            </>
          ) : (
            <span className="text-primary">
              Successfully registered, please check your email inbox to confirm your email address.
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default RegisterForm;
