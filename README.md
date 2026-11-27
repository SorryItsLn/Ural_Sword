# Ural Sword — лендинг турнира

Одностраничный сайт турнира по историческому средневековому бою «Меч Урала» в Перми и школы
«ИСБ Пермь». Турнир — 6 февраля 2027 года, СК «Сухарева», шоссе Космонавтов, 158А.

Регистрация бойцов — отдельный проект `../ural-sword-registrations`.

Правила правки контента и кода (в том числе для ИИ-агентов) — в [AGENTS.md](AGENTS.md).
Список картинок: что куда и в каких пропорциях — в [PHOTOS.md](PHOTOS.md).

## Стек

- Angular 22, standalone-компоненты, сигналы, новый control flow (`@if`, `@for`)
- SSR + пререндер (`@angular/ssr`, Express)
- SCSS, без UI-библиотек
- npm, Prettier

## Запуск

```bash
npm install
```

```bash
npm start
```

Дев-сервер на http://localhost:4200, перезагружается при изменениях.

```bash
npm run build
```

Сборка в `dist/ural-sword`. Запустить SSR-сервер из сборки:

```bash
npm run serve:ssr:ural-sword
```

Форматирование:

```bash
npx prettier --check "src/**/*.{ts,html,scss}" README.md PHOTOS.md AGENTS.md
```

## Структура

```
src/
├── index.html            SEO: title, description, Open Graph, JSON-LD (Event + школа)
├── styles.scss           глобальные стили и общие классы
├── styles/
│   └── variables.scss    цвета, сетка, брейкпоинты
└── app/
    ├── app.html          порядок блоков на странице
    ├── app.ts            корневой компонент: импорты блоков
    ├── shared/
    │   └── photo/        слот под картинку: фото или зелёная заглушка
    └── sections/         по компоненту на блок
        ├── header/       шапка, меню-якоря, бургер на телефоне
        ├── hero/         первый экран: фоновое видео, дата и площадка
        ├── about/        о турнире + списки «Бойцам» и «Зрителям»
        ├── nominations/  номинации: командные бои 5×5 и 12×12
        ├── program/      программа дня (расписание появится позже)
        ├── tickets/      билеты, место под виджет Ticketscloud
        ├── place/        площадка, как добраться, карта
        ├── school/       блок школы (делает Дмитрий)
        ├── gallery/      галерея, 8 кадров
        ├── organizers/   организаторы (блок временно скрыт)
        ├── partners/     партнёры (блок временно скрыт)
        └── footer/       контакты, соглашения

public/
├── logo.svg, favicon.ico, favicon.svg, apple-touch-icon.png, site.webmanifest
└── assets/
    ├── img/            фото блоков, постер hero, og-cover, logo.png
    └── video/          hero.mp4 — фон первого экрана

PHOTOS.md               чек-лист картинок: что куда и в каких пропорциях
AGENTS.md               правила работы над сайтом (для людей и ИИ)
.github/workflows/      деплой на GitHub Pages
source-media/           исходники медиа, в git не попадает
```

## Стили

Все цвета — в `src/styles/variables.scss`. Пока палитра временная; когда придут цвета от дизайна, меняем только значения там.

В компоненте:

```scss
@use 'variables' as v;

.title {
  color: v.$color-accent;
}
```

Те же цвета доступны как CSS-переменные: `var(--color-accent)`.

Общие классы из `styles.scss`: `.container`, `.section` (`--muted`, `__title`, `__lead`), `.btn` (`--ghost`), `.card`.

Вёрстка mobile-first: базовые стили для телефона, дальше `@media (min-width: v.$bp-tablet)` и `v.$bp-desktop`.
