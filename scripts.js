window.onscroll = function() {
    controlarBotonSubir();
    animarRevelado();
};

function controlarBotonSubir() {
    const btn = document.getElementById("btnSubir");
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

document.getElementById("btnSubir").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function animarRevelado() {
    const tarjetas = document.querySelectorAll(".revelar");
    tarjetas.forEach(t => {
        const alturaPantalla = window.innerHeight * 0.8;
        if (t.getBoundingClientRect().top < alturaPantalla) {
            t.classList.add("activo");
        }
    });
}

// Efecto extra: Corazones al hacer clic
document.addEventListener("click", (e) => {
    const corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.style.position = "absolute";
    corazon.style.left = e.pageX + "px";
    corazon.style.top = e.pageY + "px";
    corazon.style.fontSize = "20px";
    corazon.style.pointerEvents = "none";
    corazon.style.transition = "all 1s linear";
    
    document.body.appendChild(corazon);
    
    setTimeout(() => {
        corazon.style.transform = "translateY(-100px)";
        corazon.style.opacity = "0";
    }, 10);
    
    setTimeout(() => corazon.remove(), 1000);
});