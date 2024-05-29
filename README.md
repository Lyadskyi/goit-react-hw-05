# goit-react-hw-05

# Навігація в додатку

У застосунку обов'язково повинні бути наступні маршрути.

1. "/" - компонент HomePage, домашня сторінка із списком популярних кінофільмів.
2. "/movies" - компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
3. "/movies/:movieId" - компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
4. "/movies/:movieId/cast" - компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
5. "/movies/:movieId/reviews" - компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
6. Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.

# Файли, папки та компоненти

1. Файли компонентів сторінок, таких як: HomePage, MoviesPage, MovieDetailsPage, NotFoundPage повинні бути в папці src/pages.
2. Компоненти MovieCast і MovieReviews не є окремими сторінками, вони є лише частинами сторінки MovieDetailsPage, тому файли цих компонентів зберігаємо в src/components.
3. Меню з навігаційними посиланнями перенесіть в компонент Navigation. Він складається з двох компонентів NavLink, які вказують на маршрути "/" і "/movies". Для відображення списку фільмів створіть компонент MovieList. Використовуйте його на сторінках HomePage і MoviesPage.

# const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
