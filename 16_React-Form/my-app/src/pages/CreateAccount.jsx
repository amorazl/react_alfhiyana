import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Container>
      <h2 className="fw-bold mt-5">Create Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          placeholder="First Name"
          {...register("firstName", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && <p className="error">This field is required</p>}
        {errors?.firstName?.type === "minLength" && <p className="error">Must exceed at least 3 character</p>}
        {errors?.firstName?.type === "pattern" && <p className="error">Alphabetical characters only</p>}

        <label>Last Name</label>
        <input
          placeholder="Last Name"
          {...register("lastName", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.lastName?.type === "required" && <p className="error">This field is required</p>}
        {errors?.lastName?.type === "minLength" && <p className="error">Must exceed at least 3 characters</p>}
        {errors?.lastName?.type === "pattern" && <p className="error">Alphabetical characters only</p>}

        <label>Username</label>
        <input
          placeholder="Username"
          {...register("username", {
            required: true,
          })}
        />
        {errors?.username?.type === "required" && <p className="error">This field is required</p>}

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors?.email?.type === "required" && <p className="error">This field is required</p>}
        {errors?.email?.type === "pattern" && <p className="error">Please enter the right format</p>}

        <label>Password</label>
        <input
          placeholder="Password"
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors?.password?.type === "minLength" && (
          <p className="error">Password must have at least 8 characters</p>
        )}
        {errors?.password?.type === "required" && <p className="error">This field is required</p>}

        <label>Confirm password</label>
        <input
          placeholder="Confirm Password"
          name="confirm_pw"
          type="password"
          {...register("confirm_pw", {
            required: true,
            validate: (value) => value === password.current || "The passwords do not match",
          })}
        />
        {errors?.confirm_pw?.type === "required" && <p className="error">This field is required</p>}

        <input type="submit" className="mt-4" />
      </form>
    </Container>
  );
}
