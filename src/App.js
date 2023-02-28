import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import CenterDiv from "./Components/centerDiv/centerdiv";
import Ellipses from "./Components/ellipses/eliipses";

import ColLayout from "./Components/2colLayout/2colLayout";

import FirstNchild from "./Components/firstNthChild/firstnChild";

import TextOverMultiColumns from "./Components/textOverMultiColumns/textovermulticolumns";

import AspectRatio from "./Components/AspectRatio/aspectRatio";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="side-bar">
          <Link className="item" to="/centerdiv">
            {" "}
            Center Element
          </Link>
          <Link className="item" to="/ellipses">
            Ellipses
          </Link>
          <Link className="item" to="/2collayout">
            2 col Layout
          </Link>
          <Link className="item" to="/firstnchild">
            First-NthCHild
          </Link>

          <Link className="item" to="/textovermulticolumn">
            TextOverMultiColumns
          </Link>

          <Link className="item" to="/aspectratio">
            Aspect Ratio
          </Link>
        </div>

        <div className="components">
          <Routes>
            <Route path="/" element={<div>Select from Side Bar</div>} />
            <Route path="/centerdiv" element={<CenterDiv />} />
            <Route path="/ellipses" element={<Ellipses />} />
            <Route path="/2collayout" element={<ColLayout />} />
            <Route path="/firstnchild" element={<FirstNchild />} />
            <Route
              path="/textovermulticolumn"
              element={<TextOverMultiColumns />}
            />

            <Route path="/aspectratio" element={<AspectRatio />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
