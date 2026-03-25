import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Software Engineering',
    description: 'Bespoke, scalable architectures built with modern stacks. We ensure your core systems are solid, performant, and secure.',
    icon: '⚙️',
  },
  {
    title: 'AI Automation',
    description: 'Integrating intelligent agents and machine learning to optimize workflows, reduce manual data entry, and uncover insights.',
    icon: '🧠',
  },
  {
    title: 'Technology Consulting',
    description: 'Partnering with you to chart a strategic roadmap that aligns with your business goals and leverages emerging tech.',
    icon: '💡',
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} animate-slide-up`}>Core Capabilities</h2>
          <p className={`${styles.subtitle} animate-slide-up delay-100`}>
            A complete suite of technical expertise designed to accelerate your business.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`${styles.card} animate-slide-up`} 
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
