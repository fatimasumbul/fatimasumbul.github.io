/*
  ============================================================
   CONTENT.JS: ALL THE TEXT ON YOUR WEBSITE LIVES HERE
  ============================================================
   You only need to edit this file to update your site.

   Rules to keep it working:
   - Keep text inside "quotes".
   - Put a comma between items in a list.
   - To add a trip, hobby, etc., copy one { ... } block, paste it, and change the text.
   - Photos: upload the image to the "images" folder in your repo, then set
       photo: "images/your-file.jpg"
     Leave photo: "" to show a colorful placeholder instead.
   - Leave a link as "" to hide that button.
*/

window.SITE = {

  // ---------- BASICS ----------
  name: "Sumbul Fatima",
  greeting: "Hi there, I'm",
  intro: "Engineer by day, curious explorer the rest of the time. This is my little corner of the internet: the things I love, the places I've been, and what I'm building.",
  tags: ["Engineer", "Traveler", "Reader", "Home cook"],
  photo: "me.jpeg",                       // e.g. "images/me.jpg"

  // ---------- LINKS ----------
  links: {
    github: "https://github.com/fatimasumbul",
    linkedin: "",                  // e.g. "https://linkedin.com/in/your-profile"
    instagram: "",                 // optional
    email: "",                     // e.g. "you@example.com"
    resume: ""                     // e.g. "resume.pdf" after uploading it
  },

  // ---------- ABOUT ----------
  about: [
    "Write a few sentences about yourself here: where you grew up, what you care about, and what makes you you. Keep it warm and personal, like you're introducing yourself to a friend.",
    "Add a second paragraph about what drives you, what you value, or a fun story that captures your personality."
  ],
  facts: [
    { label: "Based in",        value: "California, USA" },
    { label: "Originally from", value: "Your hometown" },
    { label: "Languages",       value: "Languages you speak" },
    { label: "Coffee or tea?",  value: "Your answer" },
    { label: "Fun fact",        value: "Something surprising about you" }
  ],

  // ---------- NOW ----------
  now: {
    updated: "October 2026",
    items: [
      { label: "Reading",      title: "Book title",                  note: "by Author name" },
      { label: "Learning",     title: "Data pipelines with Airflow", note: "and a bit of Kafka" },
      { label: "Building",     title: "This website!",               note: "plus my first API project" },
      { label: "Listening to", title: "Podcast or album",            note: "on repeat" }
    ]
  },

  // ---------- HOBBIES ----------
  hobbies: [
    { name: "Cooking", photo: "cooking.jpeg", text: "Experimenting with recipes from different cuisines, especially family recipes." },
    { name: "Hiking",  photo: "", text: "Chasing views and quiet trails on the weekends." },
    { name: "Reading", photo: "", text: "Fiction, memoirs, and the occasional tech book." }
  ],

  // ---------- TRAVEL ----------
  travel: {
    countries: 5,
    cities: 12,
    wishlist: ["Japan", "Turkey", "Iceland"],
    trips: [
      { place: "Engelberg, Switzerland", year: "2026", photo: "engelberg.jpeg", note: "Truly Heaven on Earth" },
      { place: "City, Country", year: "2024", photo: "", note: "The food, the people, or a story you still tell." },
      { place: "City, Country", year: "2023", photo: "", note: "What surprised you most about this place." },
      { place: "City, Country", year: "2022", photo: "", note: "A tip you'd give anyone visiting." }
    ]
  },

  // ---------- CAREER ----------
  career: {
    summary: "I'm a software and data engineer. I like building reliable systems, from backend APIs to data pipelines that turn messy data into something useful.",
    skills: ["Python", "SQL", "FastAPI", "PostgreSQL", "Airflow", "dbt", "Kafka", "Docker", "AWS"],
    // status: "Live", "In progress" or "Planned". link: the project's GitHub repo URL.
    projects: [
      { name: "Job Tracker API",         status: "In progress", link: "", text: "REST API with tests and CI · FastAPI, PostgreSQL, Docker" },
      { name: "Daily ETL Pipeline",      status: "In progress", link: "", text: "Scheduled ingest → transform → warehouse · Airflow, dbt, DuckDB" },
      { name: "Real-Time Event Stream",  status: "Planned",     link: "", text: "Live events and dashboard · Kafka, Python, Streamlit" },
      { name: "Tech Job Market Tracker", status: "Planned",     link: "", text: "End-to-end data product · Airflow, Postgres, FastAPI, AWS" }
    ]
  },

  // ---------- CONTACT ----------
  contactText: "Whether it's about work, a travel recommendation, or a good book, I'd love to hear from you."
};
