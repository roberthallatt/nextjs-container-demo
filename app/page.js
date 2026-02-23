import styles from "./page.module.css";

const features = [
  {
    icon: "📦",
    title: "Dev Container",
    description:
      "Running inside a VS Code Dev Container — isolated, reproducible environment for every developer.",
  },
  {
    icon: "⚡",
    title: "Hot Reload",
    description:
      "Edit any file and watch the browser update instantly via Next.js HMR with filesystem polling.",
  },
  {
    icon: "🚀",
    title: "Cloud Ready",
    description:
      "Deploy to Vercel with one command, or build a Docker image for any cloud platform.",
  },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.badge}>Dev Container Demo</div>
        <h1 className={styles.title}>
          Next.js in a
          <br />
          <span className={styles.accent}>Container</span>
        </h1>
        <p className={styles.subtitle}>
          Edit files on your Mac, see changes instantly in the browser — powered
          by Docker and VS Code Dev Containers.
        </p>
      </section>

      <section className={styles.features}>
        {features.map((feature) => (
          <article key={feature.title} className={styles.card}>
            <div className={styles.cardIcon}>{feature.icon}</div>
            <h2 className={styles.cardTitle}>{feature.title}</h2>
            <p className={styles.cardDescription}>{feature.description}</p>
          </article>
        ))}
      </section>

      <section className={styles.tryIt}>
        <h2>Try it now</h2>
        <p>
          Open <code className={styles.code}>app/page.js</code> and change some
          text. The browser will reload automatically.
        </p>
      </section>
    </main>
  );
}
