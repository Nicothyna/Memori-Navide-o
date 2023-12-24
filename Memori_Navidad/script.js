document.addEventListener('DOMContentLoaded', function () {
  const emojis = ['🎄', '🎅', '🎁', '⛄', '🔔', '🦌', '🍪', '❄️', '🕯️', '🌟', '🤶', '🌨️'];

  // Crear dos copias de la lista de emojis
  const cards = emojis.concat([...emojis]);

  // Barajar las cartas
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  // Resto del código...
});
