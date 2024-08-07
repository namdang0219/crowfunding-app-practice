import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpPage = () => {
	const { handleSubmit, control } = useForm();

	const handleSignUp = (values) => {
		console.log(values)
	}

	return (
		<LayoutAuthentication heading="SignUp">
			<p className="mb-6 text-xs text-center lg:text-sm text-text3 lg:mb-8 ">
				Already have an account?{" "}
				<Link
					to="/sign-in"
					className="font-medium underline text-primary"
				>
					Sign In
				</Link>
			</p>
			<button className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border text-text2 border-strock rounded-xl gap-x-3">
				<img srcSet="/icon-google.png 2x" alt="icon-google" />
				<span className="">Sign up with Google</span>
			</button>
			<p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-6 text-text2">
				Or sign up with email
			</p>
			<form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-3">
				{/* full name  */}
				<FormGroup>
					<Label htmlFor="fullName">Full Name *</Label>
					<Input
						control={control}
						name="fullName"
						placeholder="Jhon Doe"
					></Input>
				</FormGroup>
				{/* email  */}
				<FormGroup>
					<Label htmlFor="email">Email</Label>
					<Input
						control={control}
						name="email"
						type="email"
						placeholder="example@gmail.com"
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
					></Input>
				</FormGroup>
				<div className="flex items-start mb-5 gap-x-5">
					<span className="inline-block w-5 h-5 border rounded border-text4 shrink-0"></span>
					<p className="flex-1 text-sm text-text2">
						I agree to the{" "}
						<span className="underline text-secondary">
							Terms of Use
						</span>{" "}
						and have read and understand the{" "}
						<span className="underline text-secondary">
							Privacy policy
						</span>
						.
					</p>
				</div>
				<Button type="submit" className="w-full bg-primary">Create my account</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignUpPage;
