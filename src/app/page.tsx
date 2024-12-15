import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";


export default function Home() {
  return (
    // <div>
    //   <h1>kasteh portfolio</h1>
    //   <Navbar />
    // </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e2e2e2",
        height: "100vh",
        // flex: "1",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#f6f6f4",
          padding: "40px",
          borderRadius: "20px",
          // flex: "1",
        }}
      >
        {/* <Container /> */}
        {/* <Container2 /> */}
        <Container4/>
      </div>
    </div>
  );
}
