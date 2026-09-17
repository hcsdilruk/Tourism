import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const destinations = [
  { name: 'Galle Fort', type: 'Heritage', mapQuery: 'Galle Fort Sri Lanka', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85', className: 'destination-card tall' },
  { name: 'Ella', type: 'Highlands', mapQuery: 'Ella Sri Lanka', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85', className: 'destination-card' },
  { name: 'Yala National Park', type: 'Wildlife', mapQuery: 'Yala National Park Sri Lanka', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=85', className: 'destination-card' },
]

const tours = [
  { title: 'Tea Trails & Timeless Forts', meta: '8 days / 7 nights', price: '$1,480', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85', tag: 'Most loved' },
  { title: 'The Wild South', meta: '6 days / 5 nights', price: '$1,120', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85', tag: 'Small group' },
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function App() {
  const [language, setLanguage] = useState('EN')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [formSent, setFormSent] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState(destinations[0])
  const [accountOpen, setAccountOpen] = useState(false)
  const [accountMode, setAccountMode] = useState('signin')
  const [accountCreated, setAccountCreated] = useState(false)

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination)
    setFormSent(false)
  }

  const handleAccountSubmit = (event) => {
    event.preventDefault()
    setAccountCreated(true)
  }

  const openAccountPage = (mode) => {
    setAccountMode(mode)
    setAccountCreated(false)
    setAccountOpen(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSent(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Island Escapes home">
          <span className="brand-mark">ie</span>
          <span>Island<br /><em>Escapes</em></span>
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#journeys" onClick={() => setMenuOpen(false)}>Journeys</a>
          <a href="#stays" onClick={() => setMenuOpen(false)}>Stays</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label="Language selector">
            {['EN', 'සිං'].map((item) => <button className={language === item ? 'active' : ''} key={item} onClick={() => setLanguage(item)}>{item}</button>)}
          </div>
          <button className="account-button" onClick={() => openAccountPage('signin')}>Login</button>
          <button className="account-button account-signup-link" onClick={() => openAccountPage('signup')}>Sign up</button>
          <a className="button button-dark button-small" href="#inquiry">Plan your trip <Arrow /></a>
        </div>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="eyebrow-line" /> Curated journeys since 2014</p>
            <h1>Come for the<br /><i>light.</i> Stay for<br />the story.</h1>
            <p className="hero-intro">Sri Lanka is more than a destination. It is a feeling that follows you home. We make space for you to find it.</p>
            <div className="hero-buttons">
              <a className="button button-terracotta" href="#journeys">Explore journeys <Arrow /></a>
              <a className="text-link" href="#story">Why Island Escapes <span>→</span></a>
            </div>
          </div>
          <div className="hero-visual reveal-in">
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90" alt="Tropical coastline and palms in Sri Lanka" />
              <div className="image-caption"><span>01 / 04</span><span>Galle, Southern Coast</span></div>
            </div>
            <div className="hero-note"><span>We travel<br />a little deeper.</span><span className="note-arrow">↓</span></div>
          </div>
          <div className="hero-stamp" aria-hidden="true"><span>Discover</span><strong>SL</strong><span>with heart</span></div>
        </section>

        <section className="trust-strip">
          <div><strong>4.9 / 5</strong><span>Guest rating</span></div>
          <div><strong>2,000+</strong><span>Happy travellers</span></div>
          <div><strong>Local first</strong><span>Always authentic</span></div>
          <div className="trust-quote">“The kind of trip you talk about for years.”</div>
        </section>

        <section className="discover section-pad" id="journeys">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> A little of everything</p><h2>Find your<br /><i>island rhythm.</i></h2></div>
            <p className="section-description">From misty mountains to warm seas, each journey is shaped around how you want to feel, not just what you want to see.</p>
          </div>
          <div className="destination-grid">
            {destinations.map((destination, index) => <a href="#inquiry" onClick={() => handleDestinationClick(destination)} className={destination.className} key={destination.name}><img src={destination.image} alt={destination.name} /><div className="destination-overlay"><span>0{index + 1}</span><div><small>{destination.type}</small><h3>{destination.name}</h3></div><span className="circle-arrow">↗</span></div></a>)}
          </div>
          <div className="center-link"><a className="text-link" href="#inquiry">See all places <span>→</span></a></div>
        </section>

        <section className="journeys-band section-pad" id="stays">
          <div className="section-heading compact"><div><p className="eyebrow"><span className="eyebrow-line" /> Made for you</p><h2>Journeys with<br /><i>good bones.</i></h2></div><a className="text-link" href="#inquiry">View all journeys <span>→</span></a></div>
          <div className="tour-list">{tours.map((tour, index) => <article className="tour-card" key={tour.title}><div className="tour-image"><img src={tour.image} alt={tour.title} /><span className="tour-tag">{tour.tag}</span></div><div className="tour-content"><span className="tour-number">0{index + 1}</span><div><h3>{tour.title}</h3><p>{tour.meta}</p><strong>From {tour.price} <small>/ person</small></strong></div><a className="circle-arrow dark" href="#inquiry" aria-label={`View ${tour.title}`}>↗</a></div></article>)}</div>
        </section>

        <section className="story-section section-pad" id="story">
          <div className="story-image"><img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85" alt="Local Sri Lankan woman smiling" /><span>Meet the people<br />behind the places.</span></div>
          <div className="story-copy"><p className="eyebrow"><span className="eyebrow-line" /> Our way of travelling</p><h2>Small details.<br /><i>Big feelings.</i></h2><p>We believe the best journeys leave room for the unexpected. A roadside tea shared with a stranger. A hidden swimming spot. The sound of rain on a tin roof.</p><p>Our local hosts and guides open doors you would never find on a map, with the care of someone showing you their home.</p><a className="button button-outline" href="#inquiry">More about us <Arrow /></a></div>
        </section>

        <section className="inquiry-section section-pad" id="inquiry">
          <div className="inquiry-copy"><p className="eyebrow"><span className="eyebrow-line" /> Your next chapter</p><h2>Ready to feel<br /><i>the island?</i></h2><p>Tell us a little about your dream trip. A real person from our team will be in touch within 24 hours.</p><div className="contact-details"><span>Selected destination</span><strong>{selectedDestination.name}</strong><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedDestination.mapQuery)}`}>Open in Google Maps ↗</a></div><div className="map-card"><iframe title={`${selectedDestination.name} map`} src={`https://www.google.com/maps?q=${encodeURIComponent(selectedDestination.mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div>
          <form className="inquiry-form" onSubmit={handleSubmit}>{formSent ? <div className="success-message"><span>✓</span><h3>We have your note.</h3><p>Our journey designer will be in touch within 24 hours. Until then, keep dreaming.</p></div> : <><div className="form-row"><label>Your name<input required placeholder="Jane Smith" /></label><label>Email address<input required type="email" placeholder="jane@email.com" /></label></div><label>Where would you like to go?<select value={selectedDestination.name} onChange={(event) => setSelectedDestination(destinations.find((destination) => destination.name === event.target.value))}>{destinations.map((destination) => <option value={destination.name} key={destination.name}>{destination.name}</option>)}</select></label><label>What are you dreaming of?<select defaultValue=""><option value="" disabled>Choose a journey style</option><option>Slow travel & culture</option><option>Wildlife & nature</option><option>Beach & rest</option><option>A little bit of everything</option></select></label><label>Tell us more <textarea placeholder="Dates, group size, places you are curious about..."></textarea></label><button className="button button-terracotta" type="submit">Start a conversation <Arrow /></button></>}</form>
        </section>

        <section className="faq-section section-pad" id="journal"><div><p className="eyebrow"><span className="eyebrow-line" /> The small print</p><h2>Good to<br /><i>know.</i></h2></div><div className="faq-list">{['When is the best time to visit Sri Lanka?', 'Can you make our trip fully private?', 'What is included in the price?', 'Do you arrange airport transfers?'].map((question, index) => <div className={activeFaq === index ? 'faq-item active' : 'faq-item'} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}><span>{question}</span><b>{activeFaq === index ? '−' : '+'}</b></button>{activeFaq === index && <p>Sri Lanka is beautiful year-round. We match your route to the seasons, so there is always a sunny coast or cool highland waiting for you.</p>}</div>)}</div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark">ie</span><span>Island<br /><em>Escapes</em></span></a><p>Sri Lanka, slowly.<br />With heart, always.</p></div><div className="footer-links"><div><span>Explore</span><a href="#journeys">Journeys</a><a href="#stays">Stays</a><a href="#story">Our story</a></div><div><span>Connect</span><a href="mailto:hello@islandescapes.lk">Email us</a><a href="https://instagram.com">Instagram</a><a href="https://facebook.com">Facebook</a><a href="https://tiktok.com">TikTok</a></div><div><span>Visit</span><a href="https://maps.google.com/?q=42+Flower+Road+Colombo+07">42 Flower Road<br />Colombo 07, Sri Lanka ↗</a></div></div><div className="footer-bottom"><span>© 2024 Island Escapes</span><span>Made for the curious</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/94771234567" aria-label="Chat with us on WhatsApp"><span>◔</span><strong>Chat with us</strong></a>
        {accountOpen && <div className="account-backdrop" onClick={() => setAccountOpen(false)}><section className="account-page" role="dialog" aria-modal="true" aria-labelledby="account-title" onClick={(event) => event.stopPropagation()}><div className="account-page-top"><a className="brand" href="#top" onClick={() => setAccountOpen(false)}><span className="brand-mark">ie</span><span>Island<br /><em>Escapes</em></span></a><button className="back-to-site" onClick={() => setAccountOpen(false)}>Back to website <span>↗</span></button></div><button className="modal-close" aria-label="Close account page" onClick={() => setAccountOpen(false)}>×</button><div className="account-page-content">{accountCreated ? <div className="account-success"><span>✓</span><h2>{accountMode === 'signin' ? 'Welcome back.' : 'Your account is ready.'}</h2><p>{accountMode === 'signin' ? 'You can now save journeys and manage your inquiries in one place.' : 'We will keep your favourite journeys and trip details together.'}</p><button className="button button-terracotta" onClick={() => setAccountOpen(false)}>Continue exploring <Arrow /></button></div> : <><p className="eyebrow"><span className="eyebrow-line" /> Island Escapes</p><h2 id="account-title">{accountMode === 'signin' ? <>Welcome<br /><i>back.</i></> : <>Create your<br /><i>island account.</i></>}</h2><div className="account-tabs"><button className={accountMode === 'signin' ? 'active' : ''} onClick={() => setAccountMode('signin')}>Login</button><button className={accountMode === 'signup' ? 'active' : ''} onClick={() => setAccountMode('signup')}>Sign up</button></div><form className="account-form" onSubmit={handleAccountSubmit}>{accountMode === 'signup' && <label>Full name<input required placeholder="Jane Smith" /></label>}<label>Email address<input required type="email" placeholder="jane@email.com" /></label><label>Password<input required type="password" placeholder="At least 8 characters" minLength="8" /></label><button className="button button-terracotta" type="submit">{accountMode === 'signin' ? 'Login to my account' : 'Create my account'} <Arrow /></button></form><p className="account-note">By continuing, you agree to our friendly travel terms.</p></>}</div></section></div>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
