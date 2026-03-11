# The-Whisker-Project
Erica Dionne
101382857
----------------
## Description
This site is for The Whisker Project, a non-profit (ficitonal) cat rescue organization dedicated to rescuing stray and abandoned cats and finding them loving homes. The purpose of the website is to offer a trustworthy and easy-to-use adoption platform where users can browse available cats with descriptions, understand the adoption process, and submit applications easily. The site also supports the organization by encouraging small donations and educating users on cat ownership.

## Design Changes from Assignment 1
- Moved the “Download Care Guide” onto a separate "Pet Care Tips" page, and replaced it with a "Learn More" button on the landing page. Makes more sense as there is now a page specifically for Pet Care Tips.
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
- Used for sizing media queries when attempting to apply responsive design  `@media (max-width: 1024px)`.

Misc.
- Learned to add backticks around code in README files, otherwise it may not display properly.

---
## Improvements based on Assignment 2
- Fixed responsiveness
- Corrected small syntax errors
- Added for/id pairing
- Added missing `<div>`'s

## Feature Checklist
- **Feature 1 – Hamburger Menu Navigation**:  
I built a responsive nav bar with a hamburger menu that appears on smaller screens that can be toggled open/closed when clicked. I followed a youtube tutorial for this which was very helpful.

- **Feature 2 – Form Validation with Error Messages**:
Implemented form validation so that error messages appear if the form input is invalid, also preventing submission. A challenge was the code not appearing due to having `required` in my HTML.

- **Feature 3 – Back to Top Button**:
  I created a button that appears when the user scrolls down 300px and allows them to quickly return to the top with JS. I also followed a youtube video for the basic structure but made some visual changes. I struggled as the code did not work due to the previous feature giving an error unless wrapped it in an if statement. 

- **Feature 4 - Dynamic Content Rendering from Data**:
  I stored my cat gallery in a JS array and used a loop to generate my HTML elements for each card.

- **Feature 5 – Accordion FAQ**:
I implemented an accordion FAQ in the Pet Care section and changed my headers as questions. Clicking a question expands or collapses the answer. I was confused on how to expand it smoothly but a youtube video helped.

- **Feature 6 - Live filtering**:
  I added a live filtering feature that allows users to filter for a cats specific age or personality, but also with an "all" filter that auto renders all cat cards beforehand. JS listens for user input and hides or shows the cats if the description or age contains the keyword. The main challenge was connecting it back to the Feature 4 code and sometimes felt confusing.


## AI Usage (Assignment 3)
Debugging:
- Learned that `<script>` to implement JS should be at the end of `<body> ` below my HTML code, and not at the before it.
- Found out why JS error messages did not display. (had to remove "required" in my HTML).
- Helped figured out why the back-to-top button wasn't working.  Wrapping code in if statements prevents the script from stopping since some elements only exists on another page. I applied this to rest of the other features as well.
  
Code:
- Used AI to help connect my code from Request 6 with the `renderCats()` function with Request 4. 
- Rendered the cats also before request 6 so they will display automatically without having to select ALL, by adding `renderCats(cats);` at the end.
- Helped how to properly start a nested loop in Request 5.
- Learned to check for proper phone format with regex (10 digits) for request 2.
