import "./ellipses.css";
export default function Ellipses() {
  return (
    <div className="parent">
      Ellipses , whitespace, overflow are required to use text-overflow
      <div className="ellipses"> This is long text</div>
      <div className="threeLines">
        {" "}
        This is long line 1. This is long Line 2. This is long Line 3 which is
        not finishingwhatsover
      </div>
    </div>
  );
}
