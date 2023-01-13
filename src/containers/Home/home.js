import React from "react";
import Layout from "../../components/Layout/layout";
import { Col, Container, Row } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";

// #E9ECEF

const Home = (props) => {
  return (
    <Layout sidebar>
      {/* <div className="py-5 px-5 m-5 text-center" style={{ background: "#fff" }}>
        <h1 className="display-6 ">Welcome to Admin Dashboard</h1>
        <p className="pb-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search
        </p>
      </div> */}
    </Layout>
  );
};

export default Home;
