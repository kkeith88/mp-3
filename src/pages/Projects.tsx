import { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import useCalculator from "../calculator";

export default function Projects() {
    const { num1, setNum1, num2, setNum2, result, calculate, clear } =
        useCalculator();

    useEffect(() => {
        document.title = "Projects | Keith's Resume";
    }, []);
    return (
        <>
            <Header
                title="Projects | Keith's Resume"
                subtitle="A page showing my projects"
            />
            <div id="nav-main">
                <Nav />
                <Main>
                    <h1>Projects</h1>
                    <div id="projects">
                        <h3>Trending Video Analysis</h3>
                        <div className="entry">
                            <p>
                                <strong>
                                    Machine Learning &amp; Data Science
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Applied supervised (LogReg, KNN, RF, SVM)
                                    and unsupervised (K-Means, DBSCAN) models to
                                    predict YouTube video virality.
                                </li>
                                <li>
                                    Engineered features from metadata and
                                    engagement metrics, utilizing SMOTE to
                                    address class imbalance.
                                </li>
                                <li>
                                    Evaluated and optimized model performance to
                                    identify key drivers of content engagement.
                                </li>
                            </ul>
                        </div>
                        <h3>
                            <a href="https://github.com/KKeith18/VisualizedConsensus">
                                Visualized Consensus
                            </a>
                        </h3>
                        <div className="entry">
                            <p>
                                <strong>
                                    Distributed Systems | Go, AWS Lambda,
                                    JavaScript
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Built a custom frontend to visualize an
                                    approximate consensus algorithm in
                                    real-time.
                                </li>
                                <li>
                                    Developed a backend using Go-based AWS
                                    Lambda functions to handle distributed logic
                                    and communication.
                                </li>
                            </ul>
                        </div>
                        <h3>
                            <a href="https://github.com/KKeith18/Markov-Music-Generator">
                                Markov Music Generator
                            </a>
                        </h3>
                        <div className="entry">
                            <p>
                                <strong>
                                    Algorithmic Composition | Python, MIDI
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Engineered a system to generate original
                                    musical compositions from MIDI inputs using
                                    Markov chains.
                                </li>
                                <li>
                                    Designed a streamlined shell-based interface
                                    for user interaction and file processing.
                                </li>
                            </ul>
                        </div>
                        <h3>
                            <a href="https://kkeith18.github.io/ClimateChange/">
                                Interactive Data Visualization
                            </a>
                        </h3>
                        <div className="entry">
                            <p>
                                <strong>
                                    Frontend Development | D3.js, Vega-Lite,
                                    HTML/CSS/JS
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Developed responsive, data-driven websites
                                    with a focus on climate change awareness.
                                </li>
                                <li>
                                    Prioritized web accessibility and deep
                                    interactivity using D3.js and Vega-Lite
                                    libraries.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="calculator-section">
                        <h2 id="calculator-header">JavaScript Calculator</h2>
                        <p>
                            First Number:{" "}
                            <input
                                type="text"
                                value={num1}
                                onChange={(e) => setNum1(e.target.value)}
                            />{" "}
                            Second Number:{" "}
                            <input
                                type="text"
                                value={num2}
                                onChange={(e) => setNum2(e.target.value)}
                            />
                        </p>
                        <div className="calc-buttons">
                            <button onClick={() => calculate("add")}>+</button>
                            <button onClick={() => calculate("sub")}>-</button>
                            <button onClick={() => calculate("mul")}>*</button>
                            <button onClick={() => calculate("div")}>/</button>
                            <button onClick={() => calculate("pow")}>**</button>
                            <button onClick={clear}>Clear</button>
                        </div>
                        <h3
                            style={{color:result === null || result >= 0? "black": "red"}}
                        >
                            {result !== null ? String(result) : ""}
                        </h3>
                    </div>
                </Main>
            </div>
        </>
    );
}
