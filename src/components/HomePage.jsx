import React from "react";

export default function HomePage() {
  return (
    <div>
      <h2 className="text-danger text-center ">
        Welcome To React + Django Demo Authentication Page
      </h2>
      <hr></hr>

      <h4 className="bg-dark text-warning m-3 p-5">
        <marquee>
          This is a demo fullstack webapps for user Login, Signup, Reset
          Password, Email Verification using React and Django.
        </marquee>
      </h4>

      <div className="text-center">
        <a className="btn btn-primary m-2" href="">
          Documentation Page
        </a>
        <a className="btn btn-danger m-2" href="">
          User Auth
        </a>
        <br></br>
        <a href="" className="btn btn-info m-3">
          See Tutorial
        </a>
      </div>

      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>CodeWithArghya
                </h6>
                <p>
                  Here you will get all tutorials of Full Stack Web Development,
                  Such as Python Django, React and Next js, PHP with Mysql,
                  Java, JSP, JSTL, JDBC, Servlet, AWS Lambda and REST API etc.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Python Django
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Next Js
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    JSP Servlet
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Documentation
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Faqs
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help/Contact
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> Kolkata, West Bengal
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  codewitharghya0@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 91 6295717932
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 91 6295717932
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center text-info p-4"
          style={{ backgroundColor: "black" }}
        >
          © 2024 Copyright:
          <a class="text-warning fw-bold">CodeWithArghya</a>
        </div>
      </footer>
    </div>
  );
}
