import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { useState } from "react";

export default function Issues() {
  const [labels, setLabels] = useState([]);
  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList />
        </section>
        <aside>
          <LabelList selected={labels} toggle={(labels) => setLabels((currentLabels) => currentLabels.includes(label) 
          ? currentLabels.filter(currentLabel => currentLabel !== label)
          : currentLabels.concat(label))} />
        </aside>
      </main>
    </div>
  );
}
