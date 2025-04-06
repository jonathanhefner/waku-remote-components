import { DynamicSelect } from "../components/DynamicSelect"
import { EventCalendar } from "../components/EventCalendar"
import { PassingChildren } from "../components/PassingChildren"
import { Typeahead } from "../components/Typeahead"
import { Waterfall } from "../components/Waterfall"

export default async function HomePage() {
  return <>
    <section className="typeahead">
      <h2>Typeahead</h2>
      <p>
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/Typeahead.tsx">client <code>.tsx</code></a>{" | "}
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/Typeahead.server.tsx">server <code>.tsx</code></a>
      </p>
      <div className="demo"><Typeahead /></div>
    </section>

    <section className="dynamic-select">
      <h2>Dynamic Select</h2>
      <p>
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/DynamicSelect.tsx">client <code>.tsx</code></a>{" | "}
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/DynamicSelect.server.tsx">server <code>.tsx</code></a>
      </p>
      <div className="demo"><DynamicSelect /></div>
    </section>

    <section className="event-calendar">
      <h2>Event Calendar</h2>
      <p>
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/EventCalendar.tsx">client <code>.tsx</code></a>{" | "}
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/EventCalendar.server.tsx">server <code>.tsx</code></a>
      </p>
      <div className="demo"><EventCalendar /></div>
    </section>

    <section className="passing-children">
      <h2>Passing Children</h2>
      <p>
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/PassingChildren.tsx">client <code>.tsx</code></a>{" | "}
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/PassingChildren.server.tsx">server <code>.tsx</code></a>
      </p>
      <div className="demo"><PassingChildren /></div>
    </section>

    <section className="waterfall">
      <h2>Waterfall</h2>
      <p>
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/Waterfall.tsx">client <code>.tsx</code></a>{" | "}
        <a target="_blank" href="https://github.com/jonathanhefner/waku-remote-components/blob/main/src/components/Waterfall.server.tsx">server <code>.tsx</code></a>
      </p>
      <div className="demo"><Waterfall /></div>
    </section>
  </>
}
