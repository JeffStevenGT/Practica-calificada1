import Card from "./components/Card";
import { Luna } from "./components/Luna";
import { Parrafo } from "./components/Parrafo";
import { Team } from "./data/team";

export default function App() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 relative">
      <Luna />
      <header className="mb-12 md:flex w-full">
        <h1 className="text-4xl text-center font-bold pt-11">
          The creative crew
        </h1>
        <div className="mt-4 px-14 md:w-[50%]">
          <h2 className="text-xl font-semibold">Who we are</h2>
          <Parrafo />
        </div>
      </header>

      <section className="grid md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-0">
        {Team.map((person, index) => (
          <Card
            key={person.name}
            index={index}
            name={person.name}
            role={person.role}
            img={person.img}
          />
        ))}
      </section>
    </main>
  );
}
