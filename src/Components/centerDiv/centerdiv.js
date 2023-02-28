import "./centerdiv.css";
export default function CenterDiv() {
  return (
    <div className="parent">
      Center element Vertically, even if screen size changes
      <div>
        Using Flex Box - Justify-Content, Align-item
        <div className="outer">
          <div className="inner"></div>
        </div>
      </div>
      <div>
        Using position ; top left right only work with position Assign relative
        to parent and absolute to child
        <div className="outer1">
          <div className="inner1"></div>
        </div>
      </div>
      <div>
        Using grid , place-items: center
        <div className="outer2">
          <div className="inner2"></div>
        </div>
      </div>
    </div>
  );
}
