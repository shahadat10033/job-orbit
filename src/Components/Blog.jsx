import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container my-5">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            q1. When should we use context API?
          </Accordion.Header>
          <Accordion.Body>
            a1. We use context API if some data needs to be accessible by many
            components at different nesting levels.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>q2. What is a custom hook?</Accordion.Header>
          <Accordion.Body>
            a2. Custom hook is a special JavaScript function whose name starts
            with 'use' and can be used to call other hooks.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>q3. What is useRef?</Accordion.Header>
          <Accordion.Body>
            a3. useRef is a built-in React hook that accepts one argument as the
            initial value and returns a reference .
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>q4. What is useMemo?</Accordion.Header>
          <Accordion.Body>
            a4. useMemo is a function that returns a memoized value of a passed
            in resource-intensive function.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
