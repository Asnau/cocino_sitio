import React from "react";
import { Card, CardColumns, Container, Jumbotron } from "react-bootstrap";
import gallery1 from "../images/gallery-image1.jpg";
import gallery2 from "../images/gallery-image2.jpg";
import gallery3 from "../images/gallery-image3.jpg";
import gallery4 from "../images/gallery-image4.jpg";
import gallery5 from "../images/gallery-image5.jpg";

export default function Gallery() {
  return (
    <>
      <Jumbotron id="gallery" fluid style={{ backgroundColor: "#c2dde6" }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "black",
              textDecoration: "underline",
              textDecorationColor: "gray",
            }}
          >
            Gallery
          </h1>
        </Container>
        <Container>
          <CardColumns>
            <Card>
              <Card.Img variant="top" src={gallery1} />
            </Card>
            <Card>
              <Card.Img variant="top" src={gallery2} />
            </Card>
            <Card className="text-center">
              <Card.Img variant="top" src={gallery3} />
            </Card>
            <Card>
              <Card.Img src={gallery4} />
            </Card>

            <Card>
              <Card.Img variant="top" src={gallery5} />
            </Card>
          </CardColumns>
        </Container>
      </Jumbotron>
      {/* <svg id="" preserveAspectRatio="xMidYMax meet" class="svg-separator sep3" viewBox="0 0 1600 100" style={{display: 'block', backgroundColor: 'blue', transform: 'rotate(180deg)'}} data-height="100">
                    <path class="" style={{opacity: 1, fill: '#2a3f54'}} 
                    d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,
                    120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,
                    120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"></path>
                </svg> */}
    </>
  );
}
