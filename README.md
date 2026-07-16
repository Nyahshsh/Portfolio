# My Portfolio Website

This is my final project for Web Development 1. It's a personal portfolio
website for me, Janiyah Tan.

## What this project does

It's a website that shows who I am, what I can do, and some of my projects.
Instead of typing all my project/skill/education info directly into the
HTML, I put that information in a separate file called `data.json`, and I
use JavaScript to read that file and build the page automatically. This
way, if I want to add a new project later, I just add it to `data.json`
and don't have to touch the HTML at all.

## Folder structure

```
portfolio/
├── index.html         -> the main page
├── css/
│   └── style.css        -> all my styling
├── js/
│   └── main.js            -> reads data.json and builds the page
├── data.json               -> all my info (projects, skills, education, etc.)
├── assets/                  -> for images later
└── README.md
```

## How I built it

1. First I sketched out what I wanted each section to look like on paper.
2. Then I built the HTML and CSS with fake/placeholder text, just to get
   the layout and colors working.
3. After that, I moved my Skills, Projects, and Education content into
   `data.json` and wrote JavaScript to load it using `fetch()`.
4. Last, I tested it on different screen sizes and fixed things that
   looked broken on mobile.

## How to run it

You can't just double-click `index.html` because `fetch()` needs a real
server to work (it won't load data.json from a file path). The easiest
way I found is:

```
python3 -m http.server 8000
```

Then go to `http://localhost:8000` in your browser.

(If you don't have Python, you can also use the "Live Server" extension
in VS Code.)

## How to change the content

Everything I want to show up in Skills, Projects, and Education is in
`data.json`. I just open that file and edit the text, or copy one of the
existing entries and change the details to add a new one.

## What's not done yet

- The contact form doesn't actually send anything yet. It just shows an
  alert message when you click submit.
- I still need to add real project screenshots instead of just text.
- I want to double check everything on an actual phone, not just by
  resizing my browser window.

## Where I'll host it

I'm planning to put this on GitHub Pages once it's finished.
