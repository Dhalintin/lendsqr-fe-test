import styles from "./StatsCard.module.scss";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
}

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.iconWrapper}>
        <img src={`/images/${icon}.png`} alt={title} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default function StatsCards() {
  const stats: StatCardProps[] = [
    {
      title: "USERS",
      value: 2453,
      icon: "np-users",
    },
    {
      title: "ACTIVE USERS",
      value: 2453,
      icon: "np-active",
    },
    {
      title: "USERS WITH LOANS",
      value: 12453,
      icon: "np-loans",
    },
    {
      title: "USERS WITH SAVINGS",
      value: 102453,
      icon: "np-savings",
    },
  ];

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
