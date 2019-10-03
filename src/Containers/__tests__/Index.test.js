import React from "react";
import Index from "../Index";
import { shallow } from "enzyme";

describe("Index.js Container Tests.", () => {
	it("La lista se renderiza correctamente", () => {
		const thelist = [{ id: 1, name: "Fabian1" }, { id: 2, name: "Fabian2" }];
		const wrapper = shallow(<Index thelist={thelist} />);
		expect(wrapper.find(".list")).toHaveLength(2);
	});

	it("Tiene un mensaje de bienvenida", () => {
		const wrapper = shallow(<Index thelist={[]} />);
		expect(wrapper.contains("Hello")).toEqual(true);
	});
});
