function mostrar(){
    Swal.fire({
        html: `
        <h1>SABIA QUE DIRIAS SI</h2>
       <img decoding="async" src="alitas.jpg" alt="">
       <h2>LAS ALITAS NOS ESPERAN</h2>

        `,
        confirmButtonText: "VAMOS",
    })
    .then((confirmButtonText) => {
      let url = new  URL('https://blog.albertoguaman.com/');

      open(url);

      console.log('funciona xD');
    })
}


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
})