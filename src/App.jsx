import Campaign from "pages/Campaign";
import Dashboard from "pages/Dashboard";
import PageNotFound from "pages/PageNotFound";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
	return (
		<Suspense>
			<Routes>
				<Route
					path="/sign-up"
					element={<SignUpPage></SignUpPage>}
				></Route>
				<Route
					path="/sign-in"
					element={<SignInPage></SignInPage>}
				></Route>
				<Route path="/" element={<Dashboard></Dashboard>}></Route>
				<Route path="/campaign" element={<Campaign></Campaign>}></Route>
				<Route path="*" element={<PageNotFound></PageNotFound>} />
			</Routes>
		</Suspense>
	);
}

export default App;
