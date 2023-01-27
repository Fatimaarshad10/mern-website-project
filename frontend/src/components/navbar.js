import FirstNavbar from "./MainNavbar";
import "../App.css";
function BasicExample() {
  return (
    <>
      <div className="bg-img ">
        <FirstNavbar />
        <div className="mx-auto footer-image">
          <img
            className="img-fluid "
            src="https://static.tildacdn.com/tild3039-3665-4939-b335-363731646332/noroot.png"
            alt="humiedpeach"
          />
        </div>
      </div>
    </>
  );
}

export default BasicExample;
