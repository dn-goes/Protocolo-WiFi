
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("main-content").innerHTML = `
    <h2><i class="fas fa-video text-primary"></i> Veja em Ação</h2>
    <p>Cole o link de um vídeo do YouTube abaixo (substitua o src no iframe):</p>
    <div class="ratio ratio-16x9">
      <iframe src="" allowfullscreen></iframe>
    </div>
  `;
});
