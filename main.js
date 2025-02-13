var viewModel = ko.contextFor(document.getElementById("mainContent")).$data;

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
        viewModel.likeThat()
    }
    
    function swipeEsquerda() {
        viewModel.unlikeThat()
    }
    
    function swipeCima() {
        viewModel.superLike()
    }
});