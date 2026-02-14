   // ---------- WEB UYGULAMALARI VERİTABANI (16 uygulama) ----------
   const webApps = [
    { id: 1, title: "Figma", category: "Tasarım", categoryId: "design", description: "Profesyonel UI/UX tasarım aracı. Ekip olarak gerçek zamanlı çalışın.", icon: "fa-brands fa-figma", rating: 4.9, users: "12M+", url: "https://www.figma.com", price: "Ücretsiz", tags: ["tasarım", "ui", "prototip"] },
    { id: 2, title: "Notion", category: "Üretkenlik", categoryId: "productivity", description: "Not alma, proje yönetimi ve wiki. Her şey tek bir yerde.", icon: "fa-brands fa-notion", rating: 4.8, users: "30M+", url: "https://www.notion.so", price: "Freemium", tags: ["not", "proje", "veritabanı"] },
    { id: 3, title: "Trello", category: "Proje Yönetimi", categoryId: "productivity", description: "Kart tabanlı proje yönetim aracı. Görsel iş akışı.", icon: "fa-brands fa-trello", rating: 4.7, users: "50M+", url: "https://trello.com", price: "Free", tags: ["kanban", "proje", "takım"] },
    { id: 4, title: "MailChimp", category: "Proje Yönetimi", categoryId: "productivity", description: "Mailchimp,  milyonlarca işletmenin  e-posta pazarlama otomasyon marketing platformu", icon: "fa-brands fa-mailchimp", rating: 5, users: "10M+", url: "https://mailchimp.com/", price: "Freemium", tags: ["marketing", "sms", "@posta"] },
    { id: 5, title: "Slack", category: "İletişim", categoryId: "communication", description: "Takım içi iletişim ve iş birliği platformu.", icon: "fa-brands fa-slack", rating: 4.6, users: "20M+", url: "https://slack.com", price: "Freemium", tags: ["chat", "takım", "iletişim"] },
    { id: 6, title: "Google Drive", category: "Depolama", categoryId: "storage", description: "Bulut depolama ve ofis uygulamaları.", icon: "fa-brands fa-google-drive", rating: 4.7, users: "1B+", url: "https://drive.google.com", price: "Ücretsiz", tags: ["bulut", "depolama", "ofis"] },
    { id: 7, title: "Spotify", category: "Müzik", categoryId: "entertainment", description: "Müzik akış platformu. Milyonlarca şarkı.", icon: "fa-brands fa-spotify", rating: 4.8, users: "400M+", url: "https://open.spotify.com", price: "Freemium", tags: ["müzik", "podcast", "akış"] },
    { id: 8, title: "Tidal", category: "Müzik", categoryId: "entertainment", description: "Yüksek kaliteli müzik akışı. HiFi ses.", icon: "fa-brands fa-tidal", rating: 4.5, users: "50M+", url: "https://tidal.com", price: "Ücretli", tags: ["müzik", "hi-fi", "kalite"] },
    { id: 9, title: "Grammarly", category: "Yazma", categoryId: "writing", description: "Yapay zeka destekli yazma asistanı.", icon: "fa-solid fa-spell-check", rating: 4.8, users: "30M+", url: "https://app.grammarly.com", price: "Freemium", tags: ["yazma", "gramer", "ai"] },
    { id: 10, title: "Miro", category: "Beyin Fırtınası", categoryId: "productivity", description: "Online beyaz tahta ve iş birliği platformu.", icon: "fa-solid fa-diagram-project", rating: 4.7, users: "40M+", url: "https://miro.com", price: "Freemium", tags: ["beyaz tahta", "beyin fırtınası", "takım"] },
    { id: 11, title: "Airtable", category: "Veritabanı", categoryId: "productivity", description: "Elektronik tablo ve veritabanı karışımı.", icon: "fa-solid fa-table", rating: 4.6, users: "5M+", url: "https://airtable.com", price: "Freemium", tags: ["veritabanı", "tablo", "organizasyon"] },
    { id: 12, title: "CodePen", category: "Geliştirme", categoryId: "development", description: "Front-end kod editörü ve topluluk.", icon: "fa-brands fa-codepen", rating: 4.7, users: "3M+", url: "https://codepen.io", price: "Ücretsiz", tags: ["kod", "frontend", "prototip"] },
    { id: 13, title: "Replit", category: "Geliştirme", categoryId: "development", description: "Tarayıcıda kodlama platformu. 50+ dil.", icon: "fa-solid fa-code", rating: 4.6, users: "20M+", url: "https://replit.com", price: "Freemium", tags: ["ide", "kodlama", "hosting"] },
    { id: 14, title: "Colab.Research", category: "Yapay Zeka", categoryId: "ai", description: "Colab, kullanım için kurulum gerektirmeyen ve GPU'lar ile TPU'lar ile yapay zeka proje çalıştırma sistemi", icon: "fa-solid fa-robot", rating: 4, users: "100M+", url: "https://colab.research.google.com/", price: "Free", tags: ["ai", "python", "gpu"] },
    { id: 15, title: "ChatGPT", category: "Yapay Zeka", categoryId: "ai", description: "OpenAI'nin yapay zeka sohbet asistanı.", icon: "fa-solid fa-robot", rating: 4.9, users: "100M+", url: "https://chat.openai.com", price: "Freemium", tags: ["ai", "sohbet", "üretken"] },
    { id: 16, title: "Midjourney", category: "Yapay Zeka", categoryId: "ai", description: "Metinden görüntü oluşturma.", icon: "fa-solid fa-palette", rating: 4.8, users: "10M+", url: "https://www.midjourney.com", price: "Ücretli", tags: ["ai", "görüntü", "sanat"] },
    { id: 17, title: "Zoom", category: "İletişim", categoryId: "communication", description: "Video konferans ve toplantı platformu.", icon: "fa-solid fa-video", rating: 4.6, users: "300M+", url: "https://zoom.us", price: "Freemium", tags: ["video", "toplantı", "konferans"] },
    { id: 18, title: "ColorHunt", category: "Tasarım", categoryId: "design", description: "Web Tasarımda Renk paleti, Color Hunt'ın özenle seçilmiş en yeni paletlerini keşfedin", icon: "fa-solid fa-palette", rating: 4.6, users: "5M", url: "https://colorhunt.co/", price: "Free", tags: ["color", "renk palet", "tasarım"] },
    { id: 19, title: "Canva", category: "Tasarım", categoryId: "design", description: "Herkes için grafik tasarım platformu. Sunum, logo, sosyal medya.", icon: "fa-brands fa-canva", rating: 4.8, users: "100M+", url: "https://www.canva.com", price: "Freemium", tags: ["grafik", "şablon", "sunum"] },
];

// Kategori listesi benzersiz
const categories = [...new Set(webApps.map(app => app.category))];

// DOM elementleri
const categoryList = document.getElementById('categoryList');
const appsGrid = document.getElementById('appsGrid');
const categoryTitle = document.getElementById('categoryTitle');
const appCount = document.getElementById('appCount');
const searchInput = document.getElementById('searchInput');
const freeOnly = document.getElementById('freeOnly');
const popularOnly = document.getElementById('popularOnly');
const modal = document.getElementById('appModal');
const closeModal = document.getElementById('closeModal');
const webappFrame = document.getElementById('webappFrame');
const modalAppInfo = document.getElementById('modalAppInfo');
const directLink = document.getElementById('directLink');

// Hamburger menü elemanları
const hamburgerBtn = document.getElementById('hamburgerBtn');
const drawer = document.getElementById('categoryDrawer');
const closeDrawer = document.getElementById('closeDrawer');
const overlay = document.getElementById('overlay');

// Aktif kategori ve filtreler
let activeCategory = "Tümü";
let searchTerm = "";
let filterFree = false;
let filterPopular = false;

// ---------- DRAWER (SOL MENÜ) KONTROLÜ ----------
function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDrawerFunc() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

hamburgerBtn.addEventListener('click', openDrawer);
closeDrawer.addEventListener('click', closeDrawerFunc);
overlay.addEventListener('click', closeDrawerFunc);

// ---------- KATEGORİLERİ YÜKLE ----------
function loadCategories() {
    let html = `
        <button class="category-btn active" data-category="Tümü">
            <i class="fas fa-grid-2"></i>
            <span>Tüm Uygulamalar</span>
            <span class="category-count">${webApps.length}</span>
        </button>
    `;
    
    categories.sort().forEach(category => {
        const count = webApps.filter(app => app.category === category).length;
        const icon = getCategoryIcon(category);
        html += `
            <button class="category-btn" data-category="${category}">
                <i class="fas ${icon}"></i>
                <span>${category}</span>
                <span class="category-count">${count}</span>
            </button>
        `;
    });
    
    categoryList.innerHTML = html;
    
    // Kategori butonlarına tıklama olayı
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activeCategory = this.dataset.category;
            categoryTitle.innerText = activeCategory === "Tümü" ? "Tüm Web Uygulamaları" : `${activeCategory} Uygulamaları`;
            filterApps();
            
            // Mobilde kategori seçince menüyü kapat (isteğe bağlı)
            if (window.innerWidth <= 768) {
                closeDrawerFunc();
            }
        });
    });
}

function getCategoryIcon(category) {
    const icons = {
        'Tasarım': 'fa-pen-ruler',
        'Üretkenlik': 'fa-clock',
        'Proje Yönetimi': 'fa-chart-line',
        'İletişim': 'fa-comments',
        'Depolama': 'fa-cloud',
        'Müzik': 'fa-music',
        'Yazma': 'fa-pen',
        'Beyin Fırtınası': 'fa-lightbulb',
        'Veritabanı': 'fa-database',
        'Geliştirme': 'fa-code',
        'Yapay Zeka': 'fa-brain'
    };
    return icons[category] || 'fa-folder';
}

// ---------- FİLTRELEME ----------
function filterApps() {
    let filtered = [...webApps];
    
    if (activeCategory !== "Tümü") {
        filtered = filtered.filter(app => app.category === activeCategory);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(app => 
            app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.tags.some(tag => tag.includes(searchTerm.toLowerCase()))
        );
    }
    
    if (filterFree) {
        filtered = filtered.filter(app => app.price === "Ücretsiz" || app.price === "Freemium");
    }
    
    if (filterPopular) {
        filtered = filtered.filter(app => app.rating >= 4.5);
    }
    
    appCount.innerText = `${filtered.length} uygulama`;
    loadApps(filtered);
}

// ---------- UYGULAMALARI LİSTELE ----------
function loadApps(apps) {
    if (apps.length === 0) {
        appsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; background: rgba(255,255,255,0.02); border-radius: 24px;">
                <i class="fas fa-search" style="font-size: 48px; color: var(--secondary); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 12px;">Uygulama bulunamadı</h3>
                <p style="color: rgba(255,255,255,0.6);">Farklı kategori veya arama terimi deneyin.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    apps.forEach(app => {
        html += `
            <div class="app-card glass" data-app-id="${app.id}">
                <div class="app-header">
                    <div class="app-icon">
                        <i class="${app.icon}"></i>
                    </div>
                    <div class="app-info">
                        <h3 class="app-title">${app.title}</h3>
                        <span class="app-category">${app.category}</span>
                    </div>
                </div>
                <p class="app-description">${app.description}</p>
                <div class="app-meta">
                    <div class="app-rating">
                        <i class="fas fa-star"></i>
                        <span>${app.rating}</span>
                    </div>
                    <div class="app-users">
                        <i class="fas fa-user-group"></i>
                        <span>${app.users}</span>
                    </div>
                    <div style="color: var(--accent); font-weight: 600;">
                        ${app.price}
                    </div>
                </div>
                <div class="app-footer">
                    <a href="#" class="app-url" onclick="openApp(event, ${app.id})">
                        <i class="fas fa-external-link-alt"></i> Web Uygulaması
                    </a>
                    <button class="btn btn-primary" onclick="openAppModal(${app.id})">
                        <i class="fas fa-play"></i> Deneyin
                    </button>
                </div>
            </div>
        `;
    });
    
    appsGrid.innerHTML = html;
}

// ---------- MODAL İŞLEMLERİ ----------
window.openAppModal = function(appId) {
    const app = webApps.find(a => a.id === appId);
    if (!app) return;
    
    modalAppInfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 50px; height: 50px; border-radius: 14px; background: linear-gradient(145deg, #2a2a4a, #1a1a2e); display: flex; align-items: center; justify-content: center; font-size: 24px; border: 1px solid rgba(255,255,255,0.1);">
                <i class="${app.icon}"></i>
            </div>
            <div>
                <h2 style="margin-bottom: 4px;">${app.title}</h2>
                <p style="color: rgba(255,255,255,0.6);">${app.category} · ⭐ ${app.rating} · ${app.users} kullanıcı</p>
            </div>
        </div>
    `;
    
    webappFrame.src = app.url;
    directLink.href = app.url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function closeAppModal() {
    modal.classList.remove('active');
    webappFrame.src = '';
    document.body.style.overflow = 'auto';
}

window.openApp = function(event, appId) {
    event.preventDefault();
    const app = webApps.find(a => a.id === appId);
    if (app) window.open(app.url, '_blank');
};

closeModal.addEventListener('click', closeAppModal);
modal.addEventListener('click', function(e) {
    if (e.target === modal) closeAppModal();
});

// ESC tuşu ile modal kapatma
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) closeAppModal();
        if (drawer.classList.contains('active')) closeDrawerFunc();
    }
});

// ---------- EVENT LİSTENERS ----------
searchInput.addEventListener('input', function(e) {
    searchTerm = e.target.value;
    filterApps();
});

freeOnly.addEventListener('change', function(e) {
    filterFree = e.target.checked;
    filterApps();
});

popularOnly.addEventListener('change', function(e) {
    filterPopular = e.target.checked;
    filterApps();
});

// Başlangıç
loadCategories();
loadApps(webApps);