import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PersonList />);
    expect(wrapper).toMatchSnapshot();
  });
});
