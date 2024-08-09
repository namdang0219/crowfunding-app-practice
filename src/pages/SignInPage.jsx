import { Button, ButtonGoogle } from "components/button";
import FormGroup from "components/common/FormGroup";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = Yup.object({
	email: Yup.string()
		.email("Invalid email")
		.required("This field is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 charactors")
		.required("This field is required"),
});

const SignInPage = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit",
	});

	const handleSignIn = (values) => {
		console.log(values);
	};

	return (
		<LayoutAuthentication heading="Welcome Back!">
			<p className="mb-6 text-xs text-center lg:text-sm text-text3 lg:mb-8 ">
				Dont have an account?{" "}
				<Link
					to="/sign-up"
					className="font-medium underline text-primary"
				>
					Sign Up
				</Link>
			</p>
			<ButtonGoogle text="Sign in with Google"></ButtonGoogle>
			<form
				onSubmit={handleSubmit(handleSignIn)}
				className="flex flex-col gap-3"
			>
				{/* email  */}
				<FormGroup>
					<Label htmlFor="email">Email</Label>
					<Input
						control={control}
						name="email"
						type="email"
						placeholder="example@gmail.com"
						error={errors.email?.message}
					></Input>
				</FormGroup>

				{/* password  */}
				<FormGroup>
					<Label htmlFor="password">Password</Label>
					<Input
						control={control}
						name="password"
						type="password"
						placeholder="Create a password"
						error={errors.password?.message}
					></Input>
				</FormGroup>
				<div className="text-right">
					<span className="inline-block text-sm font-medium text-primary">
						Forgot Password?
					</span>
				</div>
				<Button
					type="submit"
					className="w-full bg-primary"
					isLoading={isSubmitting}
				>
					Sign in
				</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignInPage;
