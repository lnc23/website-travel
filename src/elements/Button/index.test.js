import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = rende(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getbyText } = rende(<Button isLoading></Button>);
  expect(getbyText(/loading/i));
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = rende(<Button type="link" isExternal></Button>);
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <link> component", () => {
  const { container } = rende(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
  expect(container.querySelector("a")).toBeInTheDocument();
});
