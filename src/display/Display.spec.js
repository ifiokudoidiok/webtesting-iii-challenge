// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "../dashboard/Dashboard";
import Display from "./Display";

afterEach(rtl.cleanup);
let wrapper;
beforeEach(() => {
  wrapper = rtl.render(<>
  <Dashboard />
  </>
  );
});
describe("Controls Component", () => {
  test("matches the snapshot!", () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  it("defaults to unlocked and open", () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();

    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
  });

  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    // expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();

  })

  it('when `locked` or `closed` use the `red-led` class', () => {
      rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
      expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    //   wrapper.debug();
    expect(wrapper.queryByText(/closed/i)).toHaveClass('red-led');
    rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
    expect(wrapper.queryByText(/locked/i)).toHaveClass('red-led');
  })


  it('when `unlocked` or `open` use the `green-led` class', () => {
  expect(wrapper.queryByText(/open/i)).toHaveClass('green-led');
  expect(wrapper.queryByText(/unlocked/i)).toHaveClass('green-led');
})


  it("cannot be closed or opened if it is locked", () => {
    rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
    rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();

    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open gate/i).disabled).toEqual(true);
  });
});
