import Image from "next/image";
import Link from "next/link";
import HomeNav from "./components/HomeNav";
import { AppStoreButton } from "./appStore";

type Cloud = {
  id: string;
  name: string;
  unlock: string;
};

// Unlock rules mirror UnlockCatalog in the iOS app.
const clouds: Cloud[] = [
  { id: "mallow", name: "Mallow", unlock: "Free from your first session" },
  { id: "momo", name: "Momo", unlock: "Listen on 3 different days" },
  { id: "kumo", name: "Kumo", unlock: "Finish 4 Study or Focus timers" },
  { id: "pip", name: "Pip", unlock: "Try all three listening modes" },
  { id: "neo", name: "Neo", unlock: "Finish 3 sessions after 10pm" },
  { id: "purrple-cat", name: "Purrple Cat", unlock: "Comes with Premium" },
];

type Band = {
  id: string;
  name: string;
  room: string;
  title: string;
  body: string;
  unlock: string;
  screen: string;
  screenAlt: string;
};

const bands: Band[] = [
  {
    id: "kumo",
    name: "Kumo",
    room: "Kumo’s Reading Room",
    title: "Settle into study.",
    body: "A quiet scholar who thinks best to jazz lofi and turning pages. Rain streaks down past the library windows while you read.",
    unlock: "Unlock Kumo by finishing 4 Study or Focus timers.",
    screen: "/screens/kumo.webp",
    screenAlt:
      "Kumo, a cloud in a knit hat and glasses, playing Shelving Cart in Kumo’s Reading Room",
  },
  {
    id: "pip",
    name: "Pip",
    room: "Pip’s Record Shop",
    title: "Slow down a little.",
    body: "A crate digger in a flat cap, spinning dusty soul off worn 45s. Leaves drift around the shop at 60 BPM.",
    unlock: "Unlock Pip by trying Relax, Focus, and Study.",
    screen: "/screens/pip.webp",
    screenAlt:
      "Pip, a golden cloud in a flat cap, playing Dust Sleeve in Pip’s Record Shop",
  },
  {
    id: "neo",
    name: "Neo",
    room: "Neo’s Signal Bank",
    title: "Your coding soundtrack.",
    body: "A calm signal runner locked into one deep-focus channel. Built for long stretches in the editor after everyone else logs off.",
    unlock: "Unlock Neo by finishing 3 sessions after 10pm.",
    screen: "/screens/neo.webp",
    screenAlt:
      "Neo, a cloud in small sunglasses, playing Clean Room II in Neo’s Signal Bank",
  },
  {
    id: "momo",
    name: "Momo",
    room: "Momo’s Tea Service",
    title: "Sip. Listen. Unwind.",
    body: "A soft-spoken host who keeps the kettle on and the koto playing. Ripples spread out slowly while the tea steeps.",
    unlock: "Unlock Momo by listening on 3 different days.",
    screen: "/screens/momo.webp",
    screenAlt: "Momo, a pink cloud, playing Kettle Song in Momo’s Tea Service",
  },
  {
    id: "purrple-cat",
    name: "Purrple Cat",
    room: "Purrple’s Playlist",
    title: "Find your focus.",
    body: "A starry-eyed dreamer curled up with mellow lofi, hand-picked from the Purrple Cat catalog. Planets orbit while the timer runs.",
    unlock: "Purrple Cat comes with Lofi Rain Premium.",
    screen: "/screens/purrple.webp",
    screenAlt:
      "Purrple Cat holding a star, playing Sky Lake from Purrple’s Playlist",
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <HomeNav />
        <div className="hero-inner">
          <h1 className="display">
            Lofi with a cloud
            <br />
            for company.
          </h1>
          <p className="lede">
            Pick a companion, set a timer, and hold to play. Each cloud brings
            its own music and its own sky. Add rain if you want it.
          </p>
          <AppStoreButton />
        </div>

        <ul className="cloud-row" aria-label="The clouds">
          {clouds.map((cloud, i) => (
            <li key={cloud.id} style={{ "--i": i } as React.CSSProperties}>
              <a href={cloud.id === "mallow" ? "#session" : `#${cloud.id}`}>
                <Image
                  src={`/companions/${cloud.id}.webp`}
                  alt=""
                  width={560}
                  height={560}
                  sizes="150px"
                  loading="eager"
                />
                <span className="cloud-name">{cloud.name}</span>
                <span className="cloud-unlock">{cloud.unlock}</span>
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section id="session" className="session" aria-labelledby="session-title">
        <div className="split">
          <Image
            src="/screens/session.webp"
            alt="Mallow in headphones on the session screen, with Urban sound and a 30 minute timer selected"
            width={720}
            height={1491}
            sizes="330px"
            className="phone"
          />
          <div className="split-copy">
            <h2 id="session-title" className="section-title">
              Tune your session.
            </h2>
            <p className="lede">
              Mallow starts you off. Everything you need is on one screen, and
              it stays out of your way once the music starts.
            </p>
            <ol className="steps">
              <li>
                <strong>Set the energy</strong>
                <span>Slide from Chill to High Energy. The music follows.</span>
              </li>
              <li>
                <strong>Add some weather</strong>
                <span>Layer rain, city, or nature under the track.</span>
              </li>
              <li>
                <strong>Pick a length</strong>
                <span>15, 30, or 60 minutes.</span>
              </li>
              <li>
                <strong>Hold the cloud to play</strong>
                <span>Put the phone down and get to it.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {bands.map((band, i) => (
        <section
          key={band.id}
          id={band.id}
          className="band"
          data-cloud={band.id}
          aria-labelledby={`${band.id}-title`}
        >
          <div className={i % 2 === 0 ? "split flip" : "split"}>
            <Image
              src={band.screen}
              alt={band.screenAlt}
              width={720}
              height={1491}
              sizes="330px"
              className="phone"
            />
            <div className="split-copy">
              <p className="band-who">
                <Image
                  src={`/companions/${band.id}.webp`}
                  alt=""
                  width={560}
                  height={560}
                  sizes="56px"
                />
                <span>
                  {band.name}
                  <small>{band.room}</small>
                </span>
              </p>
              <h2 id={`${band.id}-title`} className="band-title">
                {band.title}
              </h2>
              <p className="band-body">{band.body}</p>
              <p className="band-unlock">
                <LockIcon />
                {band.unlock}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="progress" aria-labelledby="progress-title">
        <div className="progress-inner">
          <div>
            <h2 id="progress-title" className="section-title">
              Sit longer, unlock more.
            </h2>
            <p className="lede">
              Lofi Rain counts your streak, your sessions, and your minutes.
              Staying with it is how you open new clouds and new skies.
            </p>
            <p
              className="stat-pill"
              aria-label="Example stats: 3 day streak, 8 sessions, 240 minutes"
            >
              <span>
                <FlameIcon />3
              </span>
              <span>
                <CheckIcon />8
              </span>
              <span>
                <ClockIcon />
                240m
              </span>
            </p>
          </div>
          <div className="progress-grid">
            <div>
              <h3>Seven visualizers</h3>
              <p>
                Earn them with 30-minute sittings. Any cloud can wear any of
                them, in its own colors.
              </p>
            </div>
            <div>
              <h3>Premium opens everything</h3>
              <p>
                Every cloud, visualizer, and background at once, including
                Purrple Cat. Anything you earned stays yours.
              </p>
            </div>
            <div>
              <h3>No account needed</h3>
              <p>
                Sign in only if you want your progress on more than one device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sources" aria-labelledby="sources-title">
        <div className="sources-inner">
          <h2 id="sources-title" className="section-title">
            Where the music comes from.
          </h2>
          <div className="sources-copy">
            <p>
              Purrple Cat’s playlist is Creative Commons lofi by the artist
              Purrple Cat. Every track is listed with its license and original
              source page. The other clouds play original music made for Lofi
              Rain.
            </p>
            <p>
              <Link
                href="/music-credits"
                prefetch={false}
                className="text-link"
              >
                See the music credits
              </Link>
            </p>
            <p>
              If you’re an artist or rights holder and want a track reviewed or
              removed, send a request and it will go to us privately.
            </p>
            <p>
              <Link href="/takedown" prefetch={false} className="text-link">
                Request a takedown
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>© 2026 LofiRain LLC</p>
        <nav aria-label="Footer">
          <Link href="/music-credits" prefetch={false}>
            Music credits
          </Link>
          <Link href="/privacy" prefetch={false}>
            Privacy
          </Link>
          <Link href="/terms" prefetch={false}>
            Terms
          </Link>
          <Link href="/takedown" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4.5" y="10.5" width="15" height="10" rx="3" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 2c.6 3.2-1.9 4.9-3.4 7A6.8 6.8 0 0 0 7 13.3 5 5 0 0 0 12 22a5.6 5.6 0 0 0 5.7-5.6c0-3.1-1.9-4.4-2.8-6.6-.5 1.4-1.3 2.3-2.4 2.8.6-3.4.2-7-.5-10.6Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="m7.5 12.3 3 3 6-6.3"
        fill="none"
        stroke="#15101f"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M12 7v5l3 2"
        fill="none"
        stroke="#15101f"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
