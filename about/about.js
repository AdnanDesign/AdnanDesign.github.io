const copy = document.querySelector(".about-copy");
const tabs = document.querySelectorAll(".about-tabs button");
const overview = copy.innerHTML;
const experience = `<p class="eyebrow">WORK EXPERIENCE</p><div class="timeline-list"><div class="timeline-row"><span>Product Designer <em>Ashtra</em></span><b>2024 / now</b></div><div class="timeline-row"><span>Design Intern <em>Internship</em></span><b>2023</b></div></div><p class="eyebrow">EDUCATION</p><div class="timeline-list"><div class="timeline-row"><span>BS Software Engineering <em>Degree</em></span><b>2021 / 2025</b></div><div class="timeline-row"><span>DIT · Diploma in Information Technology <em>Diploma</em></span><b>2020 / 2021</b></div></div><p class="eyebrow">AWARDS</p><div class="timeline-list"><div class="timeline-row"><span>Prime Minister Laptop <em>Recognition</em></span><b>Award</b></div><div class="timeline-row"><span>HEC Scholarship <em>Education support</em></span><b>Scholarship</b></div></div>`;
const personal = `<p class="eyebrow">OUTSIDE OF DESIGN ✨</p><h1>Curious by nature,<br /><em>always exploring.</em></h1><div class="copy-blocks"><p>You can find me reading, looking for good specialty cafés, working out, or exploring Islamabad with my camera.</p><p>If I’m lucky, I’m surrounded by creative friends, collecting small ideas that later find their way into my work.</p></div><div class="book-shelf"><b>THE CREATIVE ACT</b><b>THE NAME OF THE WIND</b><b>THE HOUSE OF THE SPIRITS</b><b>AN EDUCATION</b><b>LOS NOMBRES PROPIOS</b><b>ATOMIC HABITS</b><b>WHY WE SLEEP</b></div>`;
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    document.body.classList.toggle(
      "personal-mode",
      tab.dataset.tab === "personal",
    );
    copy.innerHTML =
      tab.dataset.tab === "experience"
        ? experience
        : tab.dataset.tab === "personal"
          ? personal
          : overview;
  }),
);
