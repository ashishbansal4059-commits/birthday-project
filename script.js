/* ==========================================
   PREMIUM BIRTHDAY WEBSITE
   script.js - Part 1
========================================== */

const wishBtn = document.getElementById("wishBtn");
const gift = document.getElementById("gift");
const music = document.getElementById("music");
const flames = document.querySelectorAll(".flame");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* -------------------------------
   Fireworks
--------------------------------*/

let particles = [];

function createFirework(x, y) {

    for (let i = 0; i < 120; i++) {

        particles.push({
            x: x,
            y: y,
            dx: (Math.random() - 0.5) * 10,
            dy: (Math.random() - 0.5) * 10,
            size: Math.random() * 3 + 2,
            life: 100,
            color: `hsl(${Math.random() * 360},100%,60%)`
        });

    }
}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {

        let p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        p.dy += 0.05;

        p.life--;

        if (p.life <= 0) {
            particles.splice(i, 1);
        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

/* -------------------------------
   Hearts
--------------------------------*/

function heartBurst() {

    for (let i = 0; i < 60; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "6s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-120vh) rotate(${Math.random() * 720}deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }

}

/* -------------------------------
   Balloons
--------------------------------*/

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        `hsl(${Math.random() * 360},80%,60%)`;

    balloon.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 15000);

}

setInterval(createBalloon, 1200);

/* -------------------------------
   Wish Button
--------------------------------*/

wishBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    heartBurst();

    for (let i = 0; i < 8; i++) {

        createFirework(
            Math.random() * canvas.width,
            Math.random() * canvas.height / 2
        );

    }

    alert(
`🎉 Happy Birthday Prachi! 🎂

May all your dreams come true.

Have a wonderful year filled with happiness,
success, love and laughter! ❤️`
    );

});

/* -------------------------------
   Gift Box
--------------------------------*/

gift.addEventListener("click", () => {

    gift.classList.add("open");

    gift.innerHTML = "💖";

    heartBurst();

    createFirework(
        canvas.width / 2,
        canvas.height / 2
    );

});/* ==========================================
   PREMIUM BIRTHDAY WEBSITE
   script.js - Part 2
========================================== */

/* ---------- Candle Blow Out ---------- */

let candlesLeft = flames.length;

flames.forEach(flame => {

    flame.style.cursor = "pointer";

    flame.addEventListener("click", () => {

        if(flame.style.opacity=="0") return;

        flame.style.opacity="0";

        candlesLeft--;

        if(candlesLeft===0){

            setTimeout(()=>{

                alert("🎂 Wish Granted!\nHappy Birthday Prachi ❤️");

                for(let i=0;i<15;i++){

                    createFirework(
                        Math.random()*canvas.width,
                        Math.random()*canvas.height/2
                    );

                }

            },500);

        }

    });

});


/* ---------- Sparkles ---------- */

function createSparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(createSparkle,250);


/* ---------- Rose Petals ---------- */

function createPetal(){

    const p=document.createElement("div");

    p.className="petal";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(6+Math.random()*6)+"s";

    document.body.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },12000);

}

setInterval(createPetal,800);


/* ---------- Typewriter ---------- */

// Display the message normally
const message = document.querySelector(".message");
message.innerHTML = `
Dear Prachi,<br><br>

May your birthday be filled with happiness,
love, laughter, success, and countless beautiful memories.<br><br>

You deserve every smile,
every dream,
and every wonderful moment life has to offer.<br><br>

Have an amazing birthday! 🎂🎉❤️
`;


/* ---------- Automatic Fireworks ---------- */

setInterval(()=>{

    createFirework(

        Math.random()*canvas.width,

        Math.random()*canvas.height/2

    );

},3500);


/* ---------- Photo Zoom ---------- */

document.querySelectorAll(".photos img").forEach(img=>{

    img.style.cursor="pointer";

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.left="0";
        overlay.style.top="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.9)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="9999";

        const big=document.createElement("img");

        big.src=img.src;
        big.style.maxWidth="90%";
        big.style.maxHeight="90%";
        big.style.borderRadius="20px";
        big.style.boxShadow="0 0 40px white";

        overlay.appendChild(big);

        overlay.onclick=()=>overlay.remove();

        document.body.appendChild(overlay);

    });

});


/* ---------- Music Button ---------- */

const musicBtn=document.createElement("button");

musicBtn.innerHTML="🎵 Music";

musicBtn.style.position="fixed";
musicBtn.style.right="20px";
musicBtn.style.bottom="20px";
musicBtn.style.padding="15px";
musicBtn.style.borderRadius="50px";
musicBtn.style.border="none";
musicBtn.style.cursor="pointer";
musicBtn.style.fontSize="18px";
musicBtn.style.zIndex="999";

document.body.appendChild(musicBtn);

musicBtn.onclick=()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸ Pause";

    }else{

        music.pause();

        musicBtn.innerHTML="🎵 Music";

    }

};


/* ---------- Welcome Fireworks ---------- */

window.onload=()=>{

    for(let i=0;i<12;i++){

        setTimeout(()=>{

            createFirework(

                Math.random()*canvas.width,

                Math.random()*canvas.height/2

            );

        },i*400);

    }

};