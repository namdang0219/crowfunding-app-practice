import React from 'react';

const Search = () => {
  return (
    <div className="relative rounded-full p-[5px] bg-white shadow-md h-[inherit] w-[460px] flex items-center gap-5 border border-gray-100">
						<input
							type="text"
							placeholder="Do fundrise now"
							className="flex-1 w-full h-full pl-4 rounded-full placeholder:text-text4"
						/>
						<button className="flex items-center justify-center h-full text-white rounded-full bg-primary px-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-[18px] h-[18px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</button>
					</div>
  );
};

export default Search;