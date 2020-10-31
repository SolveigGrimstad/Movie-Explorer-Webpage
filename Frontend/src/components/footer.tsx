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
                This page is made by group 42 in IT2810, Web development
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://gitlab.stud.idi.ntnu.no/it2810-h20/team-42/project-3"
                  >
                    GitLab
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://gitlab.stud.idi.ntnu.no/it2810-h20/team-42/project-3/-/blob/master/README.md"
                  >
                    README
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    GitPod
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2020 Copyright Text</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
