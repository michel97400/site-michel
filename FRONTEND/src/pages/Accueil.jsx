
import './Accueil.css'

export function AccueilPage() {
    const skills = [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'PHP', level: 50 },
        { name: 'TensorFlow', level: 70 },
        { name: 'PyTorch', level: 65 },
    ]

    const experiences = [
        { period: '2025', title: 'Formation Développeur en Intelligence Artificielle', description: 'Simplon' },
        { period: '2025', title: 'Formation Développeur Web et Web Mobile', description: 'AFPAR St-François' },
        { period: '2023-2025', title: 'Apprentissage autodidacte', description: 'Python et bases de l\'IA via cours en ligne et projets personnels' },
        { period: '2024', title: 'Certification Voltaire', description: 'Remise à niveau orthographe, grammaire, vocabulaire' },
        { period: '2022-2023', title: 'Second de cuisine', description: 'L\'ère des Mets Réunion' },
        { period: '2017-2021', title: 'Chef de partie', description: 'L\'ère des Mets Réunion' },
        { period: '2015-2017', title: 'Chef de partie', description: 'Hotel Bellepierre' },
        { period: '2009-2015', title: 'Commis de cuisine', description: 'Hotel Bellepierre' },
    ]

    return (
        <main className="page-content">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-badge">Développeur IA en recherche d'entreprise pour une alternance</span>
                    <h1 className="hero-title">Michel Payet</h1>
                    <p className="hero-subtitle">
                        Bonjour, je recherche une entreprise pour une alternance en tant que Développeur en Intelligence Artificielle à compter de février 2026.
                        Ancien cuisinier en reconversion vers le Développement en Intelligence Artificielle. 
                        Actuellement en formation de développeur IA, je dispose d'une certification en développement web et viens d'achever une POEI de 3 mois axée sur la data science et le machine learning. 
                        Cette formation m'a permis d'acquérir des compétences solides en Python, ainsi qu'une maîtrise complète des langages web (HTML, CSS, JavaScript), essentielles pour développer des solutions IA intégrées.
                        Passionné par la programmation, je développe, via des projets personnels, des outils automatisés, des chatbots (simples ou alimentés via des RAG), génération d'image etc. Je suis disponible pour créer des solutions concrètes.
                    </p>
                    <div className="hero-buttons">
                        <a href="https://github.com/michel97400" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                        <a href="/cv_michel_payet.pdf" download className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Télécharger CV
                        </a>
                        <a href="/chatbot" className="btn btn-primary">
                            Mon chatbot IA
                        </a>
                        <a href="/contact" className="btn btn-secondary">
                            Me contacter
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section skills-section">
                <h2 className="section-title">Compétences Techniques</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percent">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="frameworks">
                    <h3>Frameworks & Librairies</h3>
                    <div className="tags">
                        <span className="tag">TensorFlow</span>
                        <span className="tag">PyTorch</span>
                        <span className="tag">Keras</span>
                        <span className="tag">NumPy</span>
                        <span className="tag">Pandas</span>
                        <span className="tag">React</span>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section experience-section">
                <h2 className="section-title">Parcours</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-period">{exp.period}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Soft Skills Section */}
            <section className="section softskills-section">
                <h2 className="section-title">Qualités</h2>
                <div className="softskills-grid">
                    <div className="softskill-card">
                        <span className="softskill-icon">🤝</span>
                        <span>Travail en équipe</span>
                    </div>
                    <div className="softskill-card">
                        <span className="softskill-icon">💬</span>
                        <span>Bon relationnel</span>
                    </div>
                    <div className="softskill-card">
                        <span className="softskill-icon">⏰</span>
                        <span>Ponctuel</span>
                    </div>
                    <div className="softskill-card">
                        <span className="softskill-icon">✅</span>
                        <span>Rigoureux</span>
                    </div>
                    <div className="softskill-card">
                        <span className="softskill-icon">🚀</span>
                        <span>Autonome</span>
                    </div>
                </div>
            </section>


        </main>
    )
}