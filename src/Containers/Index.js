import React from "react";

const Index = ({ thelist }) => {
	return (
		<div>
			<div className="bienvenido">Hello</div>
			<div className="lists">
				{thelist.map(l => (
					<div className="list" key={l.id}>
						{l.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default Index;
