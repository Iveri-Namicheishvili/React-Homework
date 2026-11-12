const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        ... React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
function CoreConcept(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <li />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            <CoreConcept title="about me" description="im student in mziuri" />
            <CoreConcept
              title="my hobby"
              description="my hobby is play volleyball"
            />
            <CoreConcept title="grade" description="im in 11 grade" />
            <CoreConcept title="location" description="i live in tbilisi" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
