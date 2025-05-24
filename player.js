fetch('tracks.json')
  .then(response => response.json())
  .then(tracks => {
    const section = document.querySelector('section');
    section.innerHTML = '';
    tracks.forEach(track => {
      const div = document.createElement('div');
      div.classList.add('track');
      div.innerHTML = `
        <h3>${track.title}</h3>
        <audio controls>
          <source src="${track.file}" type="audio/mpeg" />
          Ваш браузер не поддерживает аудио.
        </audio>
        <a href="${track.file}" download>Скачать</a>
      `;
      section.appendChild(div);
    });
  });
