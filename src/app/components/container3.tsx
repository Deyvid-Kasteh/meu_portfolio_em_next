import React from 'react';

type Container3Props = {

};

const Container3:React.FC<Container3Props> = () => {

    return (
      <div
        style={{
          display: "grid",
          gridTemplateAreas: `
          "apresentacao portifoio"
          `,
          gridTemplateColumns: "400px 700px",
          gap: "10px",
        }}
      >
        <div
          style={{
            gridArea: "apresentacao",
            backgroundColor: "lightblue",
            padding: "20px",
          }}
        >
          Header
        </div>
        <div
          style={{
            gridArea: "portifoio",
            backgroundColor: "lightgreen",
            padding: "20px",
            display: "grid",
            gridTemplateAreas: `"area5 area2 area3 area4"
                             "area5 area6 area7 area8"
                             "area5 area9 area9 area9"`,
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          {/* <div
            style={{
              gridArea: "area1",
              backgroundColor: "lightcoral",
              padding: "10px",
            }}
          >
            Area 1
          </div> */}
          <div
            style={{
              gridArea: "area2",
              backgroundColor: "lightblue",
              padding: "10px",
            }}
          >
            Area 2
          </div>
          <div
            style={{
              gridArea: "area3",
              backgroundColor: "lightgreen",
              padding: "10px",
            }}
          >
            Area 3
          </div>
          <div
            style={{
              gridArea: "area4",
              backgroundColor: "lightyellow",
              padding: "10px",
            }}
          >
            Area 4
          </div>
          <div
            style={{
              gridArea: "area5",
              backgroundColor: "lightcoral",
              padding: "10px",
            }}
          >
            Area 5
          </div>
          <div
            style={{
              gridArea: "area6",
              backgroundColor: "lightblue",
              padding: "10px",
            }}
          >
            Area 6
          </div>
          <div
            style={{
              gridArea: "area7",
              backgroundColor: "lightgreen",
              padding: "10px",
            }}
          >
            Area 7
          </div>
          <div
            style={{
              gridArea: "area8",
              backgroundColor: "lightyellow",
              padding: "10px",
            }}
          >
            Area 8
          </div>
          <div
            style={{
              gridArea: "area9",
              backgroundColor: "lightcoral",
              padding: "10px",
            }}
          >
            Area 9
          </div>
        </div>
        {/* <div
          style={{
            gridArea: "footer",
            backgroundColor: "lightgray",
            padding: "20px",
          }}
        >
          Footer
        </div> */}
      </div>
    );
}
export default Container3;