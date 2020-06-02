const currentYear = new Date().getFullYear();
const from = new Date(currentYear - 50, 0);
const to = new Date(currentYear + 50, 0);

const years = [];

for (let i = from.getFullYear(); i <= to.getFullYear(); i += 1) {
  years.push({ label: i, value: i });
}

export { years };
