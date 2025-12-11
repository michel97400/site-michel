


import './Contact.css'

export function ContactPage() {
    return (
        <main className="page-content">
            {/* Contact Section */}
            <section className="section contact-section">
                <h2 className="section-title">Contact</h2>
                <div className="contact-cards">
                    <a href="tel:0692131721" className="contact-card">
                        <span className="contact-icon">📱</span>
                        <span>06 92 13 17 21</span>
                    </a>
                    <a href="mailto:michel.payet974@live.fr" className="contact-card">
                        <span className="contact-icon">✉️</span>
                        <span>michel.payet974@live.fr</span>
                    </a>
                    <div className="contact-card">
                        <span className="contact-icon">📍</span>
                        <span>Sainte-Clotilde, La Réunion</span>
                    </div>
                    <div className="contact-card">
                        <span className="contact-icon">🚗</span>
                        <span>Permis B</span>
                    </div>
                </div>
            </section>
        </main>
    )
}