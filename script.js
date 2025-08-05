const data = {
  "daily": {
    "Work": { current: 5, previous: 7 },
    "Play": { current: 1, previous: 2 },
    "Study": { current: 0, previous: 1 },
    "Exercise": { current: 1, previous: 1 },
    "Social": { current: 1, previous: 3 },
    "Self Care": { current: 0, previous: 1 }
  },
  "weekly": {
    "Work": { current: 32, previous: 36 },
    "Play": { current: 10, previous: 8 },
    "Study": { current: 4, previous: 7 },
    "Exercise": { current: 4, previous: 5 },
    "Social": { current: 5, previous: 10 },
    "Self Care": { current: 2, previous: 2 }
  },
  "monthly": {
    "Work": { current: 128, previous: 142 },
    "Play": { current: 40, previous: 36 },
    "Study": { current: 13, previous: 19 },
    "Exercise": { current: 11, previous: 18 },
    "Social": { current: 21, previous: 23 },
    "Self Care": { current: 7, previous: 11 }
  }
};

const buttons = document.querySelectorAll('.menu p');
const cards = document.querySelectorAll('.card-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Aktif sınıfını günceller
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const period = button.dataset.period;
    const periodText = period === "daily" ? "Yesterday" : period === "weekly" ? "Last Week" : "Last Month";

    cards.forEach(card => {
      const category = card.dataset.category;
      const values = data[period][category];

      card.querySelector('.current').textContent = `${values.current}hrs`;
      card.querySelector('.last-week').textContent = `${periodText} - ${values.previous}hrs`;
    });
  });
});
