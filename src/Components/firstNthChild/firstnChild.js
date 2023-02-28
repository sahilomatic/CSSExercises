import "./firstnchild.css";
import { useState, useEffect } from "react";

export default function FirstNchild() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let x = [];
    for (let i = 0; i < 6; i++) {
      x.push(`this is row ${i}`);
    }
    setData(x);
  }, []);
  return (
    <div>
      <div>
        height 50px set background to #eee, but if there are adjacent rows, set
        even rows' background to #ddd set 1px border on top & bottom with color
        #ccc, but if there are adjacent rows, adjacent borders should be
        collapsed into one
        <div>
          {data.map((obj, i) => {
            return (
              <div key={i} className="row">
                {obj}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
