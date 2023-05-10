import './App.css';
import { Main } from "./Main";
import { Duplicates } from "./Duplicates";
import { Length } from './Length';
import { DisplayCleanHashtags } from './DisplayCleanHashtags';

export default function App({duplicates}) {
  return (
      <main className="main">
        <div className="data-div">
          <section>
          <h2>Details to show</h2>
            <Duplicates />
            <Length />
            <DisplayCleanHashtags />
          </section>
        </div>
        <div className="input-div">
          <Main  />
        </div>
      </main>
  )
}
