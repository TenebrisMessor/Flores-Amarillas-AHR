onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
      // JavaScript para mostrar gradualmente el nombre
      const nombreElement = document.getElementById('nombre');
      setTimeout(() => {
          nombreElement.style.opacity = '1';
      }, 3000); // 3000ms (3 segundos) coincide con la duración de la animación
  
      let Titulo = document.title;
  
      window.addEventListener('blur', () => {
          Titulo = document.title;
          document.title = "No te vallas, regresa :(";
      })
      window.addEventListener('focus', () => {
          document.title = Titulo;
      })
  
      let h1 = document.getElementById("Titulo");
  let Boton1 = document.getElementById("B1");
  Boton1.addEventListener('click', function() {
      const ContenedorBotones = document.querySelector(".Con");
      document.querySelector(".Texto").style.display = "block";
      ContenedorBotones.style.display = "none";
      DibujarFlor(500, 100, 6, 30, 100, 200);
      h1.remove();
  })
  
  document.getElementById("B12").addEventListener('click', function() {
      const ContenedorBotones = document.querySelector(".Con");
      ContenedorBotones.style.display = "none";
      document.querySelector(".Texto").style.display = "block";
      CrearVarias();
      h1.remove();
  })