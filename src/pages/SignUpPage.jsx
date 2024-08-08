import { Button } from "components/button";
import { Checkbox } from "components/checbox";
import FormGroup from "components/common/FormGroup";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggleValue } from "hooks/useToggleValue";

const schema = Yup.object({
	name: Yup.string().required("This field is required"),
	email: Yup.string()
		.email("Invalid email")
		.required("This field is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 charactors")
		.required("This field is required"),
});

const SignUpPage = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit",
	});

	const { value: acceptTermm, handleToggleValue: handleToggleTerm } =
		useToggleValue();

	const handleSignUp = (values) => {
		console.log(values);
	};

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
			<button className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border dark:border-darkStrock text-text2 border-strock rounded-xl gap-x-3">
				<img srcSet="/icon-google.png 2x" alt="icon-google" />
				<span className="dark:text-whiteSoft">Sign up with Google</span>
			</button>
			<p className="mb-4 text-xs font-normal text-center dark:font-light dark:text-whiteSoft lg:text-sm lg:mb-6 text-text2">
				Or sign up with email
			</p>
			<form
				onSubmit={handleSubmit(handleSignUp)}
				className="flex flex-col gap-3"
			>
				{/* full name  */}
				<FormGroup>
					<Label htmlFor="name">Full Name *</Label>
					<Input
						control={control}
						name="name"
						placeholder="Jhon Doe"
						error={errors.name?.message}
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
				<div className="flex items-start mt-2 mb-5 gap-x-5">
					<Checkbox
						name="term"
						checked={acceptTermm}
						onClick={handleToggleTerm}
					></Checkbox>
					<p className="flex-1 text-sm text-text2 dark:text-text3">
						I agree to the{" "}
						<span className="underline cursor-pointer text-secondary">
							Terms of Use
						</span>{" "}
						and have read and understand the{" "}
						<span className="underline cursor-pointer text-secondary">
							Privacy policy
						</span>
						.
					</p>
				</div>
				<Button
					type="submit"
					className="w-full bg-primary"
					isLoading={isSubmitting}
				>
					Create my account
				</Button>
			</form>
		</LayoutAuthentication>
	);
};

export default SignUpPage;
