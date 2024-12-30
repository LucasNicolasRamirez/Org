import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.instagram.com/lramirez.di/" target="_blank">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/lucasnicolásramírez/" target="_blank">
                <img src="/img/linkedin.png" alt="Linkedin" />
            </a>
            <a href="https://github.com/LucasNicolasRamirez" target="_blank">
                <img src="/img/github.png" alt="Github" />
            </a>
        </div>
        <img src="/img/logo.png" alt="Logo org" />
        <strong>© 2025 Desarrollado por LRamírez.DI</strong>
    </footer>
    
};

export default Footer;