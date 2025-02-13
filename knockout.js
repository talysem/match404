function mainContent() {
    self = this

    self.actualUser = ko.observable(0)
    self.usuario = ko.observableArray([
        {
            name: 'Gui Zarth',
            idade: '23',
            city: 'Dois Irmãos',
            height: '162cm',
            interesses: ['Hétero', 'Advogado', 'Cachorros', 'Viajar', 'Colorado', 'Academia'],
            img1: 'imgs/gui-img1.jpg',
            img2: 'imgs/gui-img2.jpg',
            img3: 'imgs/gui-img3.jpg',
            img4: 'imgs/gui-img4.jpg',
            img5: 'imgs/gui-img5.jpg',
            festa: '😈 Malvadinho',
            contatoLike: 'https://api.whatsapp.com/send?phone=5551995483612&text=Oi%2C%20tudo%3F%20Te%20vi%20no%20match404%20e%20gostei%20de%20voc%C3%AA!',
            contatoSuperLike: 'https://api.whatsapp.com/send?phone=5551995483612&text=*Come%C3%A7a%20tocar%20Careless%20Whisper%0A%0AOl%C3%A1%2C%20saboroso!%20Como%20vai%20o%20seu%20dia%3F%20Espero%20que%20t%C3%A3o%20gostoso%20quanto%20voc%C3%AA!%20Te%20vi%20no%20match404%20e%20espero%20que%20possamos%20nos%20conhecer%20melhor...',
            descricao: 'Advogado, apaixonado por viagens, academia e cães. Torcedor do Colorado e sempre pronto para uma boa conversa!'
        },
        {
            name: 'Gilvane Cézar',
            idade: '26',
            city: 'Dois Irmãos',
            height: '173cm',
            interesses: ['Panssexual', 'Professor', 'Harry Potter', 'Viajar', 'Gremista', 'Academia'],
            img1: 'imgs/gilvane-img1.jpeg',
            img2: 'imgs/gilvane-img2.jpeg',
            img3: 'imgs/gilvane-img3.jpg',
            img4: 'imgs/gilvane-img4.jpg',
            img5: 'imgs/gilvane-img5.jpg',
            festa: '',
            contatoLike: 'https://api.whatsapp.com/send?phone=5561991045699&text=Oi%2C%20tudo%3F%20Te%20vi%20no%20match404%20e%20gostei%20de%20voc%C3%AA!',
            contatoSuperLike: 'https://api.whatsapp.com/send?phone=5561991045699&text=*Come%C3%A7a%20tocar%20Careless%20Whisper%0A%0AOl%C3%A1%2C%20saboroso!%20Como%20vai%20o%20seu%20dia%3F%20Espero%20que%20t%C3%A3o%20gostoso%20quanto%20voc%C3%AA!%20Te%20vi%20no%20match404%20e%20espero%20que%20possamos%20nos%20conhecer%20melhor...',
            descricao: 'Professor de inglês, amante de viagens e livros. Já explorei diversos países e cada destino me trouxe uma nova história para contar. Sempre pronto para uma boa conversa sobre literatura, cultura ou a próxima aventura. Que tal trocarmos algumas palavras... ou planejarmos uma viagem?'
        },
        {
            name: 'José Alles',
            idade: '24',
            city: 'Dois Irmãos',
            height: '173cm',
            interesses: ['Hétero', 'Futebol', 'Militarismo', 'Pesca', 'Colorado', 'Academia'],
            img1: 'imgs/jose-img1.jpeg',
            img2: 'imgs/jose-img2.jpeg',
            img3: 'imgs/jose-img3.jpg',
            img4: 'imgs/jose-img4.jpg',
            img5: 'imgs/jose-img5.jpg',
            festa: '😈 Malvadinho',
            contatoLike: 'https://api.whatsapp.com/send?phone=5551996369083&text=Oi%2C%20tudo%3F%20Te%20vi%20no%20match404%20e%20gostei%20de%20voc%C3%AA!',
            contatoSuperLike: 'https://api.whatsapp.com/send?phone=5551996369083&text=*Come%C3%A7a%20tocar%20Careless%20Whisper%0A%0AOl%C3%A1%2C%20saboroso!%20Como%20vai%20o%20seu%20dia%3F%20Espero%20que%20t%C3%A3o%20gostoso%20quanto%20voc%C3%AA!%20Te%20vi%20no%20match404%20e%20espero%20que%20possamos%20nos%20conhecer%20melhor...',
            descricao: 'Aventureiro de 24 anos, apaixonado por tecnologia, ciência e bons livros. Sempre pronto para uma conversa inteligente ou uma maratona de séries. Se você curte debates sobre o universo, cultura geek ou simplesmente rir de memes aleatórios, já temos algo em comum. Bora conversar?'
        }
    ])

    self.openedInfos = ko.observable(false)
    self.openCloseInfos = function () {
        if (self.openedInfos() == false) {
            self.openedInfos(true)
        } else {
            self.openedInfos(false)
        }
    }

    self.actualImage = ko.observable(0)
    self.nextImage = function () {
        let actualImage = self.actualImage()

        if (actualImage < 4) {
            actualImage++
        } else {
            actualImage = 0
        }

        self.actualImage(actualImage)

        document.documentElement.style.setProperty('--imageLeftActualItem', actualImage)
    }

    self.prevImage = function () {
        let actualImage = self.actualImage()

        if (actualImage == 0) {
            actualImage = 4
        } else {
            actualImage--
        }

        self.actualImage(actualImage)

        document.documentElement.style.setProperty('--imageLeftActualItem', actualImage)
    }

    self.nextUser = function () {
        self.openedInfos(false)
        self.actualImage(0)
        document.documentElement.style.setProperty('--imageLeftActualItem', self.actualImage())

        if (self.actualUser() == 0) {
            self.actualUser(1)
        } else {
            self.actualUser(0)
        }
    }

    self.likeThat = function () {
        var mainContent = document.querySelector('#mainContent')
        var cardAtual = document.querySelectorAll('#card_Box')

        document.documentElement.style.setProperty('--neonColor', 'rgba(255, 0, 194, 1)')
        cardAtual[cardAtual.length - 1].style.border = 'solid 3px rgba(255, 0, 194, 1)'

        cardAtual[cardAtual.length - 1].classList.add('liked')
        self.nextUser()
        
        setTimeout(() => {
            document.documentElement.style.setProperty('--neonColor', 'rgba(0, 0, 0, 1)')
            cardAtual[cardAtual.length - 1].style.border = 'solid 1px rgba(255, 255, 255, 0.5)'
        }, 250);
        
        setTimeout(() => {
            cardAtual[cardAtual.length - 1].classList.remove('liked')
            mainContent.prepend(cardAtual[cardAtual.length - 1])
        }, 500);
    }

    self.unlikeThat = function () {
        var mainContent = document.querySelector('#mainContent')
        var cardAtual = document.querySelectorAll('#card_Box')

        document.documentElement.style.setProperty('--neonColor', 'rgba(255, 71, 45, 1)')
        cardAtual[cardAtual.length - 1].style.border = 'solid 3px rgba(255, 71, 45, 1)'

        cardAtual[cardAtual.length - 1].classList.add('unliked')
        self.nextUser()
        
        setTimeout(() => {
            document.documentElement.style.setProperty('--neonColor', 'rgba(0, 0, 0, 1)')
            cardAtual[cardAtual.length - 1].style.border = 'solid 1px rgba(255, 255, 255, 0.5)'
        }, 250);

        setTimeout(() => {
            cardAtual[cardAtual.length - 1].classList.remove('unliked')
            mainContent.prepend(cardAtual[cardAtual.length - 1])
        }, 500);
    }

    self.superLike = function () {
        var mainContent = document.querySelector('#mainContent')
        var cardAtual = document.querySelectorAll('#card_Box')

        document.documentElement.style.setProperty('--neonColor', 'rgba(0, 204, 255, 1)')
        cardAtual[cardAtual.length - 1].style.border = 'solid 3px rgba(0, 204, 255, 1)'
        
        cardAtual[cardAtual.length - 1].classList.add('superliked')
        self.nextUser()
        
        setTimeout(() => {
            document.documentElement.style.setProperty('--neonColor', 'rgba(0, 0, 0, 1)')
            cardAtual[cardAtual.length - 1].style.border = 'solid 1px rgba(255, 255, 255, 0.5)'
        }, 500);

        setTimeout(() => {
            cardAtual[cardAtual.length - 1].classList.remove('superliked')
            mainContent.prepend(cardAtual[cardAtual.length - 1])
        }, 1600);
    }

    self.abrirLinkLike = function(selecao) {
        setTimeout(() => {
            window.location.href = self.usuario()[selecao].contatoLike;
        }, 500);
    }

    self.abrirLinkSuperLike = function(selecao) {
        setTimeout(() => {
            window.location.href = self.usuario()[selecao].contatoSuperLike;
        }, 1500);
    }
}

const ajustarAqui_mainContent = document.querySelector("#mainContent");
ko.applyBindings(new mainContent(), ajustarAqui_mainContent);