// Dil değiştirme fonksiyonları
const translations = {
    tr: {
        "Home": "Anasayfa",
        "About": "Hakkımda",
        "Skills": "Yetenekler",
        "Contact": "İletişim",
        "I am": "Ben",
        "Software Engineering Student": "Yazılım Mühendisliği Öğrencisi",
        // Hakkımda metni
        "about-text": "Merhaba ben Enver DÖNMEZ. İstanbul Sabahattin Zaim Üniversitesi'nde Yazılım Mühendisliği 2. sınıf öğrencisiyim. Web sitesi, bilgisayar ve mobil uygulamalar, siber güvenlik vb. yazılım dallarına ilgi duyuyorum ve gereken nitelikleri sağlamak için çalışıyorum. Gelecekte ilgi duyduğum konularla alakalı bir işe girip, orada bulunduğum grubun başı olma hedefim var. Şimdilik ekip çalışması ve ilgilendiğim alanlarla alakalı eğitim almaktayım ve her geçen gün kendime bir şeyler katmaya çabalıyorum."
    },
    en: {
        "Anasayfa": "Home",
        "Hakkımda": "About",
        "Yetenekler": "Skills",
        "İletişim": "Contact",
        "Ben": "I am",
        "Yazılım Mühendisliği Öğrencisi": "Software Engineering Student",
        // About text
        "about-text": "Hello, I am Enver DÖNMEZ. I am a 2nd year Software Engineering student at Istanbul Sabahattin Zaim University. I am interested in software branches such as websites, computer and mobile applications, cyber security, etc., and I am working to provide the necessary qualifications. In the future, I aim to get a job related to the subjects I am interested in and become the head of the group I am in. For now, I am receiving training in teamwork and the areas I am interested in, and I try to add something to myself every day."
    }
};

let currentLang = 'tr';

document.getElementById('langToggle').addEventListener('click', function() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    this.querySelector('.lang-text').textContent = currentLang === 'tr' ? 'EN' : 'TR';
    updateContent();
});

function updateContent() {
    // Menü linklerini güncelle
    document.querySelectorAll('.nav-link').forEach(link => {
        const currentText = link.textContent;
        link.textContent = translations[currentLang][currentText] || currentText;
    });

    // Ben yazısını güncelle
    const benText = document.querySelector('.ben-text');
    benText.textContent = translations[currentLang][benText.textContent] || benText.textContent;

    // Alt başlığı güncelle
    const subtitle = document.querySelector('.subtitle');
    subtitle.textContent = translations[currentLang][subtitle.textContent] || subtitle.textContent;

    // Hakkımda metnini güncelle
    document.querySelector('.about-text').textContent = translations[currentLang]["about-text"];

    // Section başlıklarını güncelle
    document.querySelectorAll('.section-title').forEach(title => {
        const currentText = title.textContent;
        title.textContent = translations[currentLang][currentText] || currentText;
    });
} 