document.addEventListener("DOMContentLoaded", function () {
    let startX, startY, endX, endY;

    document.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    document.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        handleSwipe();
    });

    function handleSwipe() {
        let diffX = endX - startX;
        let diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Swipe Horizontal
            if (diffX > 50) {
                swipeDireita();
            } else if (diffX < -50) {
                swipeEsquerda();
            }
        } else {
            // Swipe Vertical
            if (diffY < -50) {
                swipeCima();
            }
        }
    }

    function swipeDireita() {
        alert("👉 Swipe para a DIREITA!");
        // Coloque aqui a ação desejada
    }

    function swipeEsquerda() {
        alert("👈 Swipe para a ESQUERDA!");
        // Coloque aqui a ação desejada
    }

    function swipeCima() {
        alert("👆 Swipe para CIMA!");
        // Coloque aqui a ação desejada
    }
});