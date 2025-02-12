function mainContent() {
    self = this

    self.actualUser = ko.observable(0)
    self.usuario = ko.observableArray([
        {
            name: 'José Alles',
            idade: '24',
            city: 'Dois Irmãos',
            height: '173cm',
            interesses: ['Hétero', 'Futebol', 'Militarismo', 'Pesca', 'Colorado', 'Academia'],
            img1: 'imgs/jose-img1.jpeg',
            img2: 'imgs/jose-img2.jpeg',
            descricao: 'Aventureiro de 24 anos, apaixonado por tecnologia, ciência e bons livros. Sempre pronto para uma conversa inteligente ou uma maratona de séries. Se você curte debates sobre o universo, cultura geek ou simplesmente rir de memes aleatórios, já temos algo em comum. Bora conversar?'
        },
        {
            name: 'Gilvane Cézar',
            idade: '26',
            city: 'Dois Irmãos',
            height: '173cm',
            interesses: ['Panssexual', 'Professor', 'Harry Potter', 'Viajar', 'Gremista', 'Academia'],
            img1: 'imgs/gilvane-img1.jpeg',
            img2: 'imgs/gilvane-img2.jpeg',
            descricao: 'Professor de inglês, amante de viagens e livros. Já explorei diversos países e cada destino me trouxe uma nova história para contar. Sempre pronto para uma boa conversa sobre literatura, cultura ou a próxima aventura. Que tal trocarmos algumas palavras... ou planejarmos uma viagem?'
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

}

const ajustarAqui_mainContent = document.querySelector("#mainContent");
ko.applyBindings(new mainContent(), ajustarAqui_mainContent);