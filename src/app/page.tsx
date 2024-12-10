import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";


export default function Home() {
  return (
    // <div>
    //   <h1>kasteh portfolio</h1>
    //   <Navbar />
    // </div>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {/* <Container /> */}
      {/* <Container2 /> */}
      <Container3/>
    </div>
  );
}
