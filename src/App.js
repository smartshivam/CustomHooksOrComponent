import logo from "./logo.svg";
import "./App.css";
import Slider from "./component/ImageSlider/Slider";

function App() {
  return (
    <Slider>
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img
          src="https://media.istockphoto.com/id/834741464/photo/leisure-photos.jpg?s=612x612&w=0&k=20&c=PkXsoJ_r-r2L4Ltm7vE25V2ZTGNuvj1FvBAJN3JfkaA="
          style={{ width: "100%" }}
        />
        <div className="text">Caption Text</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img
          src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
          style={{ width: "100%" }}
        />
        <div className="text">Caption Text</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img
          src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"
          style={{ width: "100%" }}
        />
        <div className="text">Caption Text</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhtmBqlJilp6X2q2XsYxJ9DVYb_F8x17DjIOJcHtT&s"
          style={{ width: "100%" }}
        />
        <div className="text">Caption Text</div>
      </div>
    </Slider>
  );
}

export default App;
