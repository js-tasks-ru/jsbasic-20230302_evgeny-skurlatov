function highlight(table) {
  for (let row of table.rows) {
    let status = row.cells[3].getAttribute('data-available');
    row.classList.add(status === 'true' ? 'available' : 'unavailable');
    if (!status) row.setAttribute('hidden', '');
    row.classList.add(row.cells[2].textContent === 'm' ? 'male' : 'female');
    if (row.cells[1].textContent < 18) row.style.textDecoration = 'line-through';
  }
}
