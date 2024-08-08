import { useState } from "react";

export function useToggleValue(initialValue = false) {
	const [value, setValue] = useState(initialValue);
	const handleToggleValue = () => {
		setValue(!value);
	};
	return {
		value,
		handleToggleValue,
	};
}
