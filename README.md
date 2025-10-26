# The Blonde Salad - Sito Web Clone

Un sito web che replica il famoso blog di moda e lifestyle di Chiara Ferragni, "The Blonde Salad".

## 🚀 Caratteristiche

### Design & Layout
- **Design elegante e sofisticato** ispirato ai blog di moda premium
- **Palette di colori luxury**: oro, nero, bianco e grigi con accenti dorati
- **Tipografia editoriale**: Cormorant Garamond per i titoli, Inter per il corpo
- **Layout responsive** ottimizzato per desktop, tablet e mobile
- **Griglia masonry** a 3 colonne per gli articoli (desktop)

### Funzionalità
- **Navigazione intuitiva** con menu responsive
- **Filtro per categorie**: Fashion, Beauty, Lifestyle, People
- **Animazioni fluide** per migliorare l'esperienza utente
- **Lazy loading** delle immagini per performance ottimali
- **Menu mobile hamburger** per dispositivi mobili
- **Effetti hover** eleganti su articoli e navigazione

### Sezioni
1. **Header** con logo e navigazione
2. **Hero Section** con introduzione al brand
3. **Latest Posts** - griglia di articoli con categorie
4. **Footer** con links, social media e informazioni legali

## 📁 Struttura del Progetto

```
/workspace/
├── index.html          # Pagina principale
├── styles.css          # Stili CSS completi
├── script.js           # JavaScript per interattività
├── images/             # Cartella immagini
│   ├── *.jpg          # Immagini articoli
└── README.md          # Questo file
```

## 🎨 Specifiche di Design

### Colori
- **Oro primario**: #C0A062 (per links e accenti)
- **Background pagina**: #FDFDFC (bianco sporco)
- **Background superfici**: #FFFFFF (bianco puro)
- **Testo primario**: #111111 (nero intenso)
- **Testo secondario**: #666666 (grigio medio)
- **Bordi**: #EAEAEA (grigio chiaro)

### Tipografia
- **Titoli**: Cormorant Garamond (serif elegante)
- **Corpo testo**: Inter (sans-serif moderno)
- **Scale**: H1 (64px), H2 (48px), H3 (28px), Body (18px)

### Spaziatura
- Sistema basato su multipli di 8px
- Responsive breakpoints: 768px, 1024px

## 🖥️ Come Utilizzare

### Avvio del Server
Il sito è già in esecuzione su un server HTTP locale:
- **URL**: http://localhost:8000
- **Comando per riavviare**: `cd /workspace && python3 -m http.server 8000`

### Funzionalità Interattive
1. **Navigazione**: Clicca sui link del menu per filtrare gli articoli per categoria
2. **Mobile**: Usa il menu hamburger su dispositivi mobili
3. **Hover Effects**: Passa il mouse sugli articoli per vedere gli effetti
4. **Responsive**: Il layout si adatta automaticamente alle dimensioni dello schermo

### Personalizzazione
- **Articoli**: Modifica l'array `articlesData` in `script.js` per aggiungere/rimuovere articoli
- **Colori**: Cambia le variabili CSS in `:root` in `styles.css`
- **Immagini**: Sostituisci le immagini in `/workspace/images/`

## 📱 Responsive Design

### Desktop (>1024px)
- Griglia 3 colonne per articoli
- Menu di navigazione completo
- Tutte le animazioni attive

### Tablet (768px-1024px)
- Griglia 2 colonne per articoli
- Menu di navigazione visibile
- Animazioni ottimizzate

### Mobile (<768px)
- Griglia 1 colonna per articoli
- Menu hamburger
- Layout verticale ottimizzato

## 🔧 Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Stili moderni con Flexbox e Grid
- **JavaScript ES6+** - Interattività e logica
- **Google Fonts** - Cormorant Garamond e Inter
- **Lucide Icons** - Icone SVG moderne

## 📊 Performance

- **Lazy loading** per le immagini
- **CSS ottimizzato** con variabili e efficient selectors
- **JavaScript modulare** per migliore mantenibilità
- **Immagini responsive** con attributo `loading="lazy"`

## 🎯 Conformità

- **WCAG 2.1 AA** - Accessibilità web
- **Mobile-first** approach
- **Cross-browser** compatibility
- **SEO friendly** con meta tags appropriati

## 🔄 Possibili Miglioramenti Futuri

1. **Backend Integration** - Connessione a un CMS o API
2. **Search Functionality** - Ricerca articoli
3. **Comments System** - Sistema commenti
4. **Newsletter** - Iscrizione newsletter
5. **Social Sharing** - Condivisione social media
6. **Dark Mode** - Tema scuro
7. **PWA** - Progressive Web App features

## 📝 Note Sviluppatore

Il sito è stato sviluppato seguendo le best practices per:
- **Code quality** e manutenibilità
- **User experience** ottimizzata
- **Performance** web
- **Accessibility** standards
- **Responsive design** principles

Per qualsiasi domanda o modifica, consulta il codice sorgente che è ben commentato e strutturato.