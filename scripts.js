function toggleNavbar() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

let projects = [
  // Card 1
  {
    imgURL: "images/Contact Form.png",
    imgALT: "Glassmorphic contact form",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description:
      "A contact form created with Formspree and styled using Glassmorphism.",
    githubURL: "https://github.com/Zoe8888/contact-form",
    liveProjectURL: "https://trusting-hamilton-76e8c4.netlify.app/",
  },
  // Card 2
  {
    imgURL: "images/Glassmorphic Timeline.png",
    imgALT: "Glassmorphic career timeline",
    title: "Glassmorhpic Timeline",
    techStack: "HTML/CSS",
    description: "A career timeline styled with Glassmorphism.",
    githubURL: "https://github.com/Zoe8888/glassmorphic_timeline",
    liveProjectURL: "https://trusting-neumann-fe68be.netlify.app",
  },
  // Card 3
  {
    imgURL: "images/Owl Carousel.png",
    imgALT: "Testimonial slider",
    title: "Testimonial Slider",
    techStack: "HTML/CSS",
    description:
      "Glassmorphic Testimonial Slider created using Owl Carousel and Glassmorphism.",
    githubURL: "https://github.com/Zoe8888/testimonial_selector",
    liveProjectURL: "https://dazzling-lovelace-63ad98.netlify.app",
  },
  // Card 4
  {
    imgURL: "images/Project-Cards.png",
    imgALT: "Project cards",
    title: "Project Cards",
    techStack: "HTML/CSS",
    description:
      "A website showcasing some of my previously mentioned HTML/CSS projects.",
    githubURL: "https://github.com/Zoe8888/project_cards",
    liveProjectURL: "https://frosty-williams-000028.netlify.app/",
  },
  // Card 5
  {
    imgURL: "images/sneaker-site.png",
    imgALT: "Sneaker site",
    title: "Sneaker Site",
    techStack: "HTML/CSS",
    description:
      "An ecommerce website which was made using Owl Carousel and Formspree.",
    githubURL: "https://github.com/Zoe8888/sneaker-website",
    liveProjectURL: "https://dreamy-bhabha-cc874e.netlify.app",
  },
  // Card 6
  {
    imgURL: "images/python_functions.png",
    imgALT: "Holiday cost calculator",
    title: "Total Cost Calculator",
    techStack: "Python",
    description:
      "A PyCharm program that calculates the total cost of a holiday.",
    githubURL: "https://github.com/Zoe8888/python_functions",
    liveProjectURL: "https://replit.com/@Zoe8888/pythonfunctions#main.py",
  },
  // Card 7
  {
    imgURL: "images/fibonacci_task.png",
    imgALT: "Fibonacci sequence program",
    title: "Fibonacci Sequence",
    techStack: "Python",
    description:
      "A PyCharm program that calculates the first 20 terms in the Fibonacci sequence.",
    githubURL: "https://github.com/Zoe8888/fibonacci_task",
    liveProjectURL: "https://replit.com/@Zoe8888/fibonaccitask#main.py",
  },
  // Card 8
  {
    imgURL: "images/bmi-calculator.png",
    imgALT: "BMI Calculator",
    title: "BMI Calculator",
    techStack: "Python",
    description:
      "A PyCharm program that calculates the users body mass index and their ideal BMI.",
    githubURL: "https://github.com/Zoe8888/bmi-calculator",
    liveProjectURL: "https://replit.com/@Zoe8888/bmi-calculator#main.py",
  },
];

function createCard(card) {
  let createdCard = `<div class="card" techStack=${card.techStack} >
      <img class="card-image" src="${card.imgURL}" alt="${card.imgALT}">
      <h2 class="card-heading">${card.title}</h2>
      <h3 class="card-subtitle">${card.techStack}</h3>
      <p class="card-description">${card.description}</p>
      <div class="card-buttons">
        <a class="button" target="_blank" href="${card.githubURL}">Github</a>
        <a class="button" target="_blank" href="${card.liveProjectURL}">Live</a>
      </div>
    </div>
  `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".card-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("card");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
