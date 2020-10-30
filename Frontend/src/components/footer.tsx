import React from "react";

function Footer() {
  return (
    <div>
      <footer className="page-footer deep-purple">
        <div className="container ">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">MovieSelector</h5>
              <p className="grey-text text-lighten-4">
                This page is made by Solveig Bergan Grimstad, Maud Johansson and
                Katrine Nguyen
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
