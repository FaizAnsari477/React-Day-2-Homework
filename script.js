const ReactAppFromCDN = () => {
  return (
    <div>
      <h1>Topics Covered</h1>
      <p>The following is a list of all topics we covered till now.</p>
      <br />
      <a href="https://www.geeksforgeeks.org/web-development/">
        Getting Started with Web
      </a>
      <p>
        Web development refers to the creating, building, and maintaining of
        websites. It includes aspects such as web design, web publishing, web
        programming, and database management.{" "}
      </p>
      <br />
      <br />
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
        HTML-- Structuring the web
      </a>
      <p>
        HTML (HyperText Markup Language) is the most basic building block of the
        Web. It defines the meaning and structure of web content.
      </p>
      <br />
      <br />
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
        CSS-- Styling the Web
      </a>
      <p>
        CSS (Cascading Style Sheets) is used to style and layout web pages — for
        example, to alter the font, color, size, and spacing of your content,
        split it into multiple columns, or add animations and other decorative
        features.{" "}
      </p>
    </div>
  );
};

ReactDOM.render(<ReactAppFromCDN />, document.querySelector("#root"));
