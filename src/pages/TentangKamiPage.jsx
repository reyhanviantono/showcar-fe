import React from "react";
import NavbarCustome from "../component/Navbar";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function TentangKami() {
  return (
    <div className="homepage-container" style={{height: '100vh'}}>
      <NavbarCustome />
      <Container className="mt-5">
        <Row>
          <Col md={12} className="text-center mb-4">
            <h1>Tentang RateMyRide</h1>
            <p className="lead">
              Partner terpercaya Anda dalam penyewaan mobil.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <Card className="card-container">
              <Card.Body>
                <Card.Title>Siapa Kami</Card.Title>
                <Card.Text>
                  RateMyRide adalah penyedia layanan penyewaan mobil terkemuka
                  yang menawarkan berbagai jenis kendaraan untuk memenuhi setiap
                  kebutuhan Anda. Apakah Anda memerlukan mobil kompak untuk
                  berkendara di kota atau kendaraan mewah untuk acara khusus,
                  kami siap memenuhi kebutuhan Anda.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="https://astraotoshop.com/asset/article-aop/daftar-mobil-terbaru_20240322.webp"
              alt="mobil"
              style={{ width: "500px", height: "200px", borderRadius:'1rem' }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card className="card-container">
              <Card.Body>
                <Card.Title>Koleksi Kendaraan Kami</Card.Title>
                <Card.Text>
                  Kami menawarkan berbagai macam kendaraan dari ekonomi hingga
                  mewah, memastikan Anda dapat menemukan mobil yang sempurna
                  untuk kebutuhan Anda. Armada kami secara rutin dirawat untuk
                  memastikan keselamatan dan kenyamanan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
