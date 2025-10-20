const text = "Iqtisod Fakulteti";
    let i = 0;
    const speed = 60; // tezligi
    function typeEffect() {
      if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
      } else {
        setTimeout(() => {
          document.getElementById("text").innerHTML = "";
          i = 0;
          typeEffect();
        }, 15000000); // yozilgandan keyin kutishi
      }

      setTimeout(animateText, isDeleting ? 100 : 150);
    }

    typeEffect();