
export const Th = (props) => (
	<th
		className="p-2 sm:p-4 border-b-2 border-black font-normal  dark:border-white"
		{...props}
	/>
);

export const Td = (props) => (
	<td
		className="h-auto sm:h-12 p-2 sm:p-3 border-2 border-black dark:border-white "
		{...props}
	/>
);

export const Tr = (props) => (
	<tr className="border-b-2 border-black" {...props} />
);

export const Table = (props) => {
	return (
		<table
			className="text-left overflow-scroll	table-auto  ml-0 mr-0 w-full"
			{...props}
		/>
	);
};
