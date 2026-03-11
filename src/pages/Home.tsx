import { useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import profilePic from "../assets/profile.jpg";

export default function Home() {
    useEffect(() => {
        document.title = "Home | Keith's Resume";
    }, []);

    return (
        <>
            <Header
                title="Home | Keith's Resume"
                subtitle="A website showcasing Keith's career objectives and goals"
            />
            <div id="nav-main">
                <Nav />
                <Main>
                    <img src={profilePic} alt="Keith Kwan" className="img" />
                    <h1>Summary</h1>
                    <h5 className="short-summary">
                        Computer Science student at Boston University with a
                        passion for software development and a strong foundation
                        in programming languages such as Java, Python, and C++.
                        Experienced in developing web applications using HTML,
                        CSS, and JavaScript. Eager to apply my skills and
                        knowledge to contribute to innovative projects and gain
                        practical experience in the field of software
                        engineering.
                    </h5>
                </Main>
            </div>
        </>
    );
}
