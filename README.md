# The-Whisker-Project
Erica Dionne
101382857
----------------
## Description
This site is for The Whisker Project, a non-profit (ficitonal) cat rescue organization dedicated to rescuing stray and abandoned cats and finding them loving homes. The purpose of the website is to offer a trustworthy and easy-to-use adoption platform where users can browse available cats with descriptions, understand the adoption process, and submit applications easily. The site also supports the organization by encouraging small donations and educating users on cat ownership.

## Design Changes from Assignment 1
- Moved the “Download Care Guide” onto a separate "Pet Care Tips" page, and replaced it with a "Learn More" button on the landing page. 
- Removed the word “Available” in cat cards and replaced with the price (as taken from feedback from user research)
- Increased overall sizing of sections and cards to fill the screen better.  
- Replaced icons in the “How It Works” steps with numbers for clarity.  

## AI Usage
Used ChatGPT for help to explain small concepts and debugging, specifics in the following:

HTML Related

- Used `<span>` to separate numbers from text in the hero section.
- Generated paragraphs to fill in for the Pet Care Tips page.
- Learned to create multiple dropdown options in forms using `<select>` and `<option>`.

CSS Related

- Learned how to add hover shadow and lift effect to buttons using `box-shadow` and `transform`.
- Targeted only the `<p>` immediately after an `<h2>` with `main section:not(.hero) h2 + p` without extra classes.
- Learned fixed positioning using `position: fixed`, `top`, and `z-index`.
- Fixed image sizing/scaling using `{ width: 100%; height: 300px; object-fit: cover; }`.
- Created gradient backgrounds with `background: linear-gradient`.
- Ensured rounded corners display correctly on images using `overflow: hidden`.
- Solved color application issues by being more specific with selectors like `.footer-column p`.
- Created a subtle divider line using `border-top`.
- Alternated and reordered text and images in cards using CSS grid with `:nth-of-type(even)`.
- Learned responsive card layout using `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`.
- Applied responsive design rules for different screen sizes using `@media (max-width: 1024px)`.

Misc.
- Learned to add backticks around code in README files, otherwise it may not display properly.
