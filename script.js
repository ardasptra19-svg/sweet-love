async function loadNovel() {
  const response = await fetch("chapters.json");
  const data = await response.json();
  const novel = document.getElementById("novel");

  data.chapters.forEach((chap, index) => {
    // wrapper chapter
    const chapterBox = document.createElement("div");
    chapterBox.className = "chapter";

    // judul bab
    const title = document.createElement("h2");
    title.className = "chapter-title";
    title.textContent = `📖 ${chap.title}`;
    chapterBox.appendChild(title);

    // gambar bab
    const img = document.createElement("img");
    img.src = chap.img;
    img.className = "chapter-img";
    img.alt = chap.title;
    chapterBox.appendChild(img);

    // daftar dialog
    chap.dialogues.forEach(d => {
      const div = document.createElement("div");
      div.className = `dialogue ${d.s.toLowerCase()}`;

      // tambahkan emoji sesuai siapa yg bicara
      let emoji = "💬";
      if (d.s.toLowerCase() === "arda") emoji = "🌟";
      if (d.s.toLowerCase() === "rina") emoji = "🌸";

      const span = document.createElement("span");
      span.innerHTML = `<b>${emoji} ${d.s}:</b> ${d.l}`;
      div.appendChild(span);

      chapterBox.appendChild(div);
    });

    novel.appendChild(chapterBox);
  });
}

loadNovel();
