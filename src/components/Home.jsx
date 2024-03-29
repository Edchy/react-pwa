import { Link } from "react-router-dom";
import "../utils/sparklyText";

function Home() {
  return (
    <>
      <section className="hero">
        <sparkly-text number-of-sparkles="15">
          <h1 className="hero-title">
            Hop into a World of Brews: Discover, Sip, and Savor! 🍺
          </h1>
        </sparkly-text>
        <Link
          className="bg-orange-800 block mt-24 p-2 rounded-xl hover:border-orange-400 border-2 border-orange-800 transition-colors duration-100 ease-in-out m-auto w-max"
          to="/beers"
        >
          <span>Get beers</span>
        </Link>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          className="rounded-xl w-full"
          width="400px"
          src="images/hoppy.jpg"
          alt="a beer bottle with the hoppy logo on an orange background"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">Lorem, 🍺 ipsum dolor.</h2>

          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolore rem quaerat! Quasi, est iste incidunt quam inventore illum
            alias.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            tenetur recusandae, deserunt consequuntur esse alias obcaecati
            delectus eum fugiat consectetur, voluptate facere? Consequuntur,
            neque voluptatem maxime ab magnam hic asperiores.
          </p>
          <button className="bg-white text-black text-sm py-1 px-3 rounded-xl font-bold mt-12">
            Some Button
          </button>
        </div>
      </section>
      <section className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">Lorem, ipsum dolor.</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolore rem quaerat! Quasi, est iste incidunt quam inventore illum
            alias.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            tenetur recusandae, deserunt consequuntur esse alias obcaecati
            delectus eum fugiat consectetur, voluptate facere? Consequuntur,
            neque voluptatem maxime ab magnam hic asperiores.
          </p>
          <button className="bg-white text-black text-sm py-1 px-3 rounded-xl font-bold mt-12">
            Some Button
          </button>
        </div>
        <img
          className="rounded-xl w-full"
          width="400px"
          src="images/hoppy2.jpg"
          alt="a beer bottle with the hoppy logo surrounded by hops, barley, honey, spices and other ingredients"
        />
      </section>
      <section className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          className="rounded-xl w-full"
          width="400px"
          src="images/hoppy3.png"
          alt="a beer bottle with the hoppy logo surrounded by hops, barley, honey, spices and other ingredients"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">Lorem, ipsum dolor.</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolore rem quaerat! Quasi, est iste incidunt quam inventore illum
            alias.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            tenetur recusandae, deserunt consequuntur esse alias obcaecati
            delectus eum fugiat consectetur, voluptate facere? Consequuntur,
            neque voluptatem maxime ab magnam hic asperiores.
          </p>
          <button className="bg-white text-black text-sm py-1 px-3 rounded-xl font-bold mt-12">
            Some Button
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
