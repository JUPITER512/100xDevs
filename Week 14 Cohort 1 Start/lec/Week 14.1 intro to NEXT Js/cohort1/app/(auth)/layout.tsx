import React from "react"

function layout({children}:{children:React.ReactNode}) {
	return (
		<div>
			<div className=" border-b-2 bg-gray-200 text-center shadow-lg">
		20% of for three days
		</div>
		{children}
			</div>
	)
	}

	export default layout

