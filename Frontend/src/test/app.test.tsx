import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import Content from "../components/content";
import Movieinfo from "../components/movieinfo";
import Header from "../components/header";
import Footer from "../components/footer";
import Homepage from "../components/homepage";
import React from "react";

enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should contain Content", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Content />)).toBe(true);
  });
  it("should contain Movieinfo", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Movieinfo />)).toBe(true);
  });
  it("should contain Header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });
  it("should contain Footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });
  it("should contain Homepage", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Homepage />)).toBe(true);
  });
});
