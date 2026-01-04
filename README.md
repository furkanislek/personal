# 🚀 Portfolio & Blog - Furkan Akif İşlek

Modern ve interaktif kişisel portfolio web sitesi. Next.js 16, TypeScript, Tailwind CSS ve Framer Motion ile geliştirilmiştir.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Stack](#-teknoloji-stack)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Çoklu Dil Desteği](#-çoklu-dil-desteği)
- [Ortam Değişkenleri](#-ortam-değişkenleri)
- [Deployment](#-deployment)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)
- [İletişim](#-iletişim)

## ✨ Özellikler

### 🎨 Kullanıcı Arayüzü

- **Modern ve Responsive Tasarım**: Tüm cihazlarda kusursuz görünüm
- **Dark Theme**: Göz yormayan modern karanlık tema
- **Terminal Temalı Arayüz**: Developer kimliğini yansıtan terminal estetiği
- **Smooth Animations**: Framer Motion ile akıcı animasyonlar
- **Interactive Components**: Kullanıcı etkileşimli bileşenler

### 🌍 Çoklu Dil Desteği

- Türkçe ve İngilizce dil seçenekleri
- Redux Toolkit ile merkezi dil yönetimi
- Dinamik çeviri sistemi

### 📝 Blog Sistemi

- Dinamik blog yazıları
- Slug tabanlı routing
- Kategori ve etiket sistemi
- Okuma süresi hesaplaması
- Responsive blog kartları

### 💼 Portfolio Bölümleri

- **Hakkımda**: Profesyonel profil ve tanıtım
- **Deneyimler**: Timeline formatında kariyer geçmişi
- **Projeler**: Detaylı proje showcase'leri
- **İletişim**: EmailJS entegrasyonlu iletişim formu

### 🛠️ Teknik Özellikler

- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Image Optimization
- SEO Optimized
- TypeScript ile tip güvenliği
- Redux Toolkit ile state management

## 🔧 Teknoloji Stack

### Frontend

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Library**: [React 19.2.3](https://reactjs.org/)
- **Animations**: [Framer Motion 12.23.26](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Redux Toolkit 2.11.2](https://redux-toolkit.js.org/)

### Additional Libraries

- **Email Service**: [@emailjs/browser 4.4.1](https://www.emailjs.com/)
- **Carousels**:
  - [Swiper 12.0.3](https://swiperjs.com/)
  - React Owl Carousel 2.3.3

### Development Tools

- **Linting**: ESLint 9
- **Package Manager**: npm
- **Build Tool**: Next.js Built-in

### Image Hosting

- Supabase Storage
- Resim Link CDN

## 📦 Kurulum

### Gereksinimler

- Node.js 20.x veya üzeri
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**

```bash
git clone https://github.com/furkanislek/furkanislek.git
cd furkanislek
```

2. **Bağımlılıkları yükleyin**

```bash
npm install
# veya
yarn install
```

3. **Ortam değişkenlerini ayarlayın**

```bash
cp .env.example .env.local
```

`.env.local` dosyasını düzenleyerek gerekli API anahtarlarını ekleyin.

4. **Geliştirme sunucusunu başlatın**

```bash
npm run dev
# veya
yarn dev
```

5. **Tarayıcınızda açın**

```
http://localhost:3000
```

## 🚀 Kullanım

### Geliştirme Modu

```bash
npm run dev
```

Geliştirme sunucusunu başlatır. Değişiklikler otomatik olarak yüklenir.

### Production Build

```bash
npm run build
```

Production için optimize edilmiş build oluşturur.

### Production Sunucusu

```bash
npm start
```

Production build'ini başlatır.

### Linting

```bash
npm run lint
```

ESLint ile kod kalitesini kontrol eder.

## 📁 Proje Yapısı

```
furkanislek/
├── app/                          # Next.js App Router
│   ├── blog/                     # Blog sayfaları
│   │   ├── [slug]/              # Dinamik blog detay sayfası
│   │   │   └── page.tsx
│   │   └── page.tsx             # Blog liste sayfası
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Ana sayfa
│   ├── globals.css              # Global stiller
│   └── favicon.ico              # Site ikonu
├── components/                   # React bileşenleri
│   ├── Home.tsx                 # Ana sayfa bileşeni
│   ├── Navbar.tsx               # Navigasyon bileşeni
│   ├── Projects.tsx             # Projeler bileşeni
│   ├── Timeline.tsx             # Deneyim timeline'ı
│   └── Contacts.tsx             # İletişim formu
├── contexts/                     # React Context'leri
├── store/                        # Redux Store
│   ├── slices/                  # Redux Slice'ları
│   │   └── languageSlice.ts    # Dil yönetimi
│   ├── store.ts                 # Store konfigürasyonu
│   ├── hooks.ts                 # Redux hooks
│   └── Provider.tsx             # Redux Provider
├── locales/                      # Çeviri dosyaları
│   ├── translations.json        # Genel çeviriler
│   └── blog-translations.json   # Blog çevirileri
├── public/                       # Statik dosyalar
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── next.config.ts               # Next.js konfigürasyonu
├── tailwind.config.js           # Tailwind konfigürasyonu
├── tsconfig.json                # TypeScript konfigürasyonu
├── eslint.config.mjs            # ESLint konfigürasyonu
├── postcss.config.mjs           # PostCSS konfigürasyonu
└── package.json                 # Proje bağımlılıkları
```

## 🌍 Çoklu Dil Desteği

Proje, Redux Toolkit kullanarak çoklu dil desteği sunmaktadır.

### Desteklenen Diller

- 🇹🇷 Türkçe (tr)
- 🇬🇧 İngilizce (en)

### Dil Değiştirme

Kullanıcı navbar'daki dil seçici ile dili değiştirebilir. Seçim Redux store'da saklanır ve tüm bileşenlerde kullanılır.

```typescript
// Dil seçimi
const language = useAppSelector((state) => state.language.language);
const translations = useAppSelector((state) => state.language.translations);
```

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📧 İletişim

**Furkan Akif İşlek**

- 🌐 Website: [furkanislek.com](https://furkanislek.com)
- 💼 LinkedIn: [Furkan Akif İşlek](https://www.linkedin.com/in/furkanislek/)
- 🐙 GitHub: [@furkanislek](https://github.com/furkanislek)
- 📧 Email: furkanakifislek@gmail.com

---

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service
- [Supabase](https://supabase.com/) - Image hosting

---

<div align="center">
  <p>⭐ Bu projeyi beğendiyseniz yıldızlamayı unutmayın!</p>
  <p>Made with ❤️ by Furkan Akif İşlek</p>
</div>
