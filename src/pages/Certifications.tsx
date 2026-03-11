import { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";

export default function Certifications() {
    useEffect(() => {
        document.title = "Certifications | Keith's Resume";
    }, []);
    return (
        <>
            <Header
                title="Certifications | Keith's Resume"
                subtitle="A page showing my certifications"
            />
            <div id="nav-main">
                <Nav />
                <Main>
                    <div id="skills">
                        <h1>Technical Skills</h1>
                        <div className="skills-container">
                            <h3>Languages</h3>
                            <div className="entry">
                                <p>
                                    <strong>Proficient:</strong> Python, Java,
                                    JavaScript, SQL, C#, HTML, CSS
                                </p>
                                <p>
                                    <strong>Familiar:</strong> Go, TypeScript,
                                    STATA, C, R
                                </p>
                            </div>
                            <h3>Tools &amp; Frameworks</h3>
                            <div className="entry">
                                <p>
                                    <strong>Frontend:</strong> React, Node.js
                                </p>
                                <p>
                                    <strong>Backend &amp; Cloud:</strong> .NET,
                                    AWS, PostgreSQL
                                </p>
                                <p>
                                    <strong>DevOps:</strong> Git, GitLab,
                                    GitHub, CI/CD, Docker
                                </p>
                                <p>
                                    <strong>Methodology:</strong> Agile / Scrum
                                </p>
                            </div>
                            <h3>AI/ML &amp; Data Science</h3>
                            <div className="entry">
                                <p>
                                    <strong>Modeling:</strong> scikit-learn,
                                    Classification (LogReg, RF, SVM)
                                </p>
                                <p>
                                    <strong>Unsupervised:</strong> Clustering
                                    (K-Means, DBSCAN)
                                </p>
                                <p>
                                    <strong>Sampling:</strong> SMOTE (Imbalanced
                                    Data)
                                </p>
                            </div>
                        </div>
                    </div>
                </Main>
            </div>
        </>
    );
}
