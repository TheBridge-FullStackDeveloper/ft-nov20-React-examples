import React from "react";
import { shallow } from "enzyme";
import Contador from "./Contador";

describe("Contador", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Contador />);
    expect(wrapper).toMatchSnapshot();
  });
});
