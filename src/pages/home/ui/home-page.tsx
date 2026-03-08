import { BarChart3, Clock, Music, Users } from "lucide-react";

import * as s from "./home-page.css";

const stats = [
  { number: "2,847", label: "Minutes Listened" },
  { number: "432", label: "Tracks Played" },
  { number: "89", label: "Artists" },
  { number: "15", label: "Genres" },
];

const features = [
  {
    icon: <BarChart3 size={20} />,
    title: "Detailed Analytics",
    description:
      "Track your listening habits with detailed charts and breakdowns by artist, genre, and time period.",
  },
  {
    icon: <Clock size={20} />,
    title: "Listening History",
    description:
      "See how your music taste evolves over time with weekly, monthly, and yearly comparisons.",
  },
  {
    icon: <Users size={20} />,
    title: "Compare & Share",
    description:
      "Compare your stats with friends and share your music personality with the world.",
  },
];

export default function HomePage() {
  return (
    <div className={s.container}>
      {/* Hero */}
      <section className={s.hero}>
        <span className={s.heroLabel}>— Your Music, Unwrapped —</span>
        <h1 className={s.heroTitle}>
          Discover Your <span className={s.heroAccent}>Listening Story</span>
        </h1>
        <p className={s.heroDescription}>
          Deep dive into your streaming data. See your top artists, tracks, and
          how your taste evolves — all in one place.
        </p>
        <button className={s.heroCta}>
          <Music size={18} />
          Connect Your Account
        </button>
      </section>

      {/* Stats Preview */}
      <section className={s.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={s.statCard}>
            <span className={s.statNumber}>{stat.number}</span>
            <span className={s.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className={s.featuresSection}>
        <span className={s.featuresSectionTitle}>— What You Get —</span>
        <div className={s.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={s.featureCard}>
              <div className={s.featureIcon}>{feature.icon}</div>
              <h3 className={s.featureTitle}>{feature.title}</h3>
              <p className={s.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
