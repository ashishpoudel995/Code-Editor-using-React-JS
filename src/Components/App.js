import { React, useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";
import Loader from "./Loader";
import Storage from "./Storage";

export default function App() {
  const [html, setHtml] = Storage("html", "");
  const [css, setCss] = Storage("css", "");
  const [js, setJs] = Storage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) return <Loader />;
  else {
    return (
      <div>
        <div className="code-editors">
          <CodeEditor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
            filename="index.html"
          />
          <CodeEditor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
            filename="index.css"
          />
          <CodeEditor
            language="js"
            displayName="JS"
            value={js}
            onChange={setJs}
            filename="index.js"
          />
        </div>
        <div className="code-output">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}
