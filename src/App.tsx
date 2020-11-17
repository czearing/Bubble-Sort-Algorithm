import * as React from "react";
import { ThemeProvider } from "@fluentui/react";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1 className="header">Bubble Sort Algorithm</h1>
        <div className="content">
          <h4> Explanation:</h4>
          <p>1.Iterate from the first to last index of the array.</p>
          <p>
            2. Within the loop iterate from the first to last index of the
            array.
          </p>
          <p>3. Compare data[innerIndex] to data[nextInnerIndex].</p>
          <p>4. If the values differ, swap.</p>
          <p>Note: It is a readable solution but not scalable.</p>
          <h4>Time Complexity: O(n^2)</h4>
          <h4>Auxiliary Space: O(1)</h4>
        </div>
      </div>
    </ThemeProvider>
  );
}
