import './Footer.css'

export function FooterTemplate(params) {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Michel Payet. Tous droits réservés.</p>
                <p>Remerciement à Simplon réunion qui m'a permis de déployer ce site.</p>
            </div>
        </footer>
    );
}