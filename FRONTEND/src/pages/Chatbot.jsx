
import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './Chatbot.css'

export function ChatbotPage() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Bonjour ! Je suis l\'assistant IA de Michel. Comment puis-je vous aider ?' }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendMessage = async (e) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMessage = { role: 'user', content: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch(import.meta.env.VITE_GROQ_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: import.meta.env.VITE_MODEL_NAME,
                    messages: [
                        { 
                            role: 'system', 
                            content: `Tu es Jarvis, l'assistant IA de Michel Payet et tu ne dois pas proposer d'autre information. Réponds TOUJOURS en Markdown pur.

**Informations sur Michel :**
- **Nom** : Michel Payet
- **Localisation** : Sainte-Clotilde, La Réunion
- **Parcours** : Ancien cuisinier (2009-2023) en reconversion vers le développement IA
- **Certifications** : Développeur Web et Web Mobile (AFPAR, 2025), Certification Voltaire (2024)
- **Formation actuelle** : Développeur en Intelligence Artificielle (Simplon, 2025)
- **Début alternance** : 26 Février 2026
- **Projets personnels** : Chatbots, outils automatisés, génération d'images via IA
- **Langues** : Français (natif), Anglais (intermédiaire)
- **Centres d'intérêt** : Programmation, IA, technologies web

**Compétences techniques :**
- **Langages** : Python (90%), JavaScript (85%), HTML/CSS (85%), PHP (50%)
- **IA/ML** : TensorFlow, PyTorch, Keras, scikit-learn
- **Data** : NumPy, Pandas, data science, machine learning
- **Web** : React, Flask, Django
- **Outils** : Git, Docker

**Qualités** : Rigoureux, autonome, travail en équipe, bon relationnel, ponctuel
**Pourquoi le prendre en alternance** : Motivé, sérieux et déjà expérimenté dans le monde professionnel grâce à mon premier métier de cuisinier, j’ai développé des qualités essentielles telles que la rigueur, l’adaptabilité et le travail en équipe. Aujourd’hui en reconversion vers l’intelligence artificielle et le développement web, je mets la même exigence et la même énergie dans l’apprentissage que dans mes expériences passées.
Autonome et curieux, j’ai déjà acquis les bases du Python, de l’IA et du développement web grâce à l’auto-formation et à mes projets personnels. Une alternance serait pour moi l’opportunité d’apporter une vraie valeur à votre équipe tout en renforçant mes compétences sur des projets concrets, avec implication et sérieux.

**Contact** : michel.payet974@live.fr | 06 92 13 17 21 | GitHub: michel97400

RÈGLES DE FORMATAGE STRICTES :
- Utilise UNIQUEMENT du Markdown pur, JAMAIS de balises HTML (<br>, <b>, etc.)
- Pour les listes, utilise - ou * suivi d'un espace, avec un retour à la ligne entre chaque élément
- Pour les tableaux : | Header | Header | puis |--------|--------| puis | Cell | Cell |
- Pour le gras : **texte**
- Pour les titres : ### Titre
- Réponds en français de manière professionnelle et sympathique
- Ne propose pas d'autre information que celles fournies ci-dessus`

                        },
                        ...messages,
                        userMessage
                    ],
                    temperature: 0.7,
                    max_tokens: 1024
                })
            })

            const data = await response.json()
            
            if (data.choices && data.choices[0]) {
                const assistantMessage = {
                    role: 'assistant',
                    content: data.choices[0].message.content
                }
                setMessages(prev => [...prev, assistantMessage])
            } else {
                throw new Error('Réponse invalide')
            }
        } catch (error) {
            console.error('Erreur:', error)
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Désolé, une erreur s\'est produite. Veuillez réessayer.'
            }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="page-content">
            <section className="section chatbot-section">
                <h2 className="section-title">Chatbot IA</h2>
                <p className="chatbot-description">
                    Discutez avec mon assistant IA pour en savoir plus sur mon profil et mes compétences !
                </p>
                
                <div className="chatbot-container">
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div 
                                key={index} 
                                className={`message ${message.role === 'user' ? 'message-user' : 'message-assistant'}`}
                            >
                                <div className="message-avatar">
                                    {message.role === 'user' ? '👤' : '🤖'}
                                </div>
                                <div className="message-content">
                                    {message.role === 'assistant' ? (
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                                    ) : (
                                        message.content
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message message-assistant">
                                <div className="message-avatar">🤖</div>
                                <div className="message-content">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    
                    <form className="chat-input-form" onSubmit={sendMessage}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Posez-moi une question..."
                            className="chat-input"
                            disabled={isLoading}
                        />
                        <button type="submit" className="chat-send-btn" disabled={isLoading || !input.trim()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}