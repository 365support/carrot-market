import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<LoginForm>({ mode: "onBlur" });
  const onValid = (data: LoginForm) => {
    console.log("im valid bby");
    setError("errors", { message: "backed is offline sorry." });
    setError("username", { message: "Taken username" });

    // 특정한 필드에 관한 에러가 아니라도 에러 설정 할 수 있음 / 전역 에러 설정 가능
  };
  const onInvalid = (errors: FieldErrors) => {
    // console.log(errors);
  };
  console.log("dd", errors);
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
          // minLength: 5
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", {
          required: true,
        })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
      {/* 전역에러 설정 가능 */}
    </form>
  );
};

export default Form;

// import { useState } from "react";

// const Form = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [formErrors, setFormErros] = useState("");

//   const [emailError, setEmailError] = useState("");

//   const onUsernameChage = (event: React.SyntheticEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setUsername(value);
//   };
//   const onEmailChage = (event: React.SyntheticEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setEmailError("");
//     setEmail(value);
//   };
//   const onPasswordChage = (event: React.SyntheticEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setPassword(value);
//   };

//   const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(username, email, password);
//     if (username === "" || email === "" || password === "") {
//       setFormErros("All fields are required");
//     }
//     if (!email.includes("@")) {
//       setEmailError("email is require");
//     }
//   };

//   console.log(emailError);

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         value={username}
//         onChange={onUsernameChage}
//         type="text"
//         placeholder="UserName"
//       />
//       <input
//         value={email}
//         onChange={onEmailChage}
//         type="text"
//         placeholder="Email"
//       />
//       <div>{emailError}</div>
//       <input
//         value={password}
//         onChange={onPasswordChage}
//         type="password"
//         placeholder="password"
//       />
//       <input type="submit" value="Create Account" />
//     </form>
//   );
// };

// export default Form;
