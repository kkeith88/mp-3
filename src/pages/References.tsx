import { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";

export default function References() {
    useEffect(() => {
        document.title = "References | Keith's Resume";
    }, []);
    return (
        <>
            <Header
                title="Keith's References"
                subtitle="A page showing my references"
            />
            <div id="nav-main">
                <Nav />
                <Main>
                    <h1>References</h1>
                    <div id="references">
                        <h2>Professional References</h2>
                        <div className="ref-container">
                            <div className="entry">
                                <h3>Dr. Sarah Jenkins</h3>
                                <p>
                                    <strong>Principal Software Engineer</strong>{" "}
                                    | The MITRE Corporation
                                </p>
                                <p>
                                    <em>
                                        Relationship: Direct Supervisor (May
                                        2023 – Present)
                                    </em>
                                </p>
                                <p>Email: sjenkins.placeholder@mitre.org</p>
                            </div>
                            <div className="entry">
                                <h3>Prof. Michael Chen</h3>
                                <p>
                                    <strong>
                                        Director of Software Engineering
                                    </strong>{" "}
                                    | Boston University
                                </p>
                                <p>
                                    <em>
                                        Relationship: Graduate Academic Advisor
                                    </em>
                                </p>
                                <p>Email: mchen.placeholder@bu.edu</p>
                            </div>
                            <div className="entry">
                                <h3>Dr. Elizabeth Rossi</h3>
                                <p>
                                    <strong>
                                        Associate Professor of Computer Science
                                    </strong>{" "}
                                    | Boston College
                                </p>
                                <p>
                                    <em>
                                        Relationship: Algorithms Professor /
                                        Teaching Assistant Supervisor
                                    </em>
                                </p>
                                <p>Email: rossi.placeholder@bc.edu</p>
                            </div>
                            <div className="entry">
                                <h3>Jameson Blake</h3>
                                <p>
                                    <strong>Senior Systems Architect</strong> |
                                    The MITRE Corporation
                                </p>
                                <p>
                                    <em>
                                        Relationship: Project Lead and Technical
                                        Mentor
                                    </em>
                                </p>
                                <p>Email: jblake.placeholder@mitre.org</p>
                            </div>
                        </div>
                        <br />
                        <p>
                            <em>AI generated references.</em>
                        </p>
                    </div>
                </Main>
            </div>
        </>
    );
}
