import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'

export default function Education() {
  return (
    <>
      <Header title="Education | Keith's Resume" subtitle="A page showing my education" />
      <div id="nav-main">
        <Nav />
        <Main>
          <h1>Education</h1>
          <h5 className="short-summary">
            A proud graduate of Boston College (Class of 2023), I hold a dual degree in
            Computer Science and Economics. This background allowed me to develop a deep
            understanding of both technical architecture and the market logic that drives
            industry innovation. I am currently expanding my technical expertise at Boston
            University, pursuing a Master of Science in Software Engineering (expected 2026).
            My academic journey is defined by a transition from broad analytical foundations
            to specialized, high-level system design and software development.
          </h5>
        </Main>
      </div>
    </>
  )
}