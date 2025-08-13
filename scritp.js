   // Adicionar efeito de sombra ao rolar a página
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Funcionalidade de filtro por carga horária
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const courseCards = document.querySelectorAll('.course-card');
            
            // Adicionar evento de clique aos botões de filtro
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remover classe 'active' de todos os botões
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Adicionar classe 'active' ao botão clicado
                    this.classList.add('active');
                    
                    // Obter o valor do filtro
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Filtrar os cursos
                    courseCards.forEach(card => {
                        if (filterValue === 'all') {
                            // Mostrar todos os cursos
                            card.style.display = 'block';
                        } else {
                            // Verificar se a carga horária do curso corresponde ao filtro
                            const courseDuration = card.getAttribute('data-duration');
                            if (courseDuration === filterValue) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
        });









        // Adicionar efeito de sombra ao rolar a página
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Funcionalidade de filtro por carga horária
        document.addEventListener('DOMContentLoaded', function () {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const courseCards = document.querySelectorAll('.course-card');

            // Adicionar evento de clique aos botões de filtro
            filterButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Remover classe 'active' de todos os botões
                    filterButtons.forEach(btn => btn.classList.remove('active'));

                    // Adicionar classe 'active' ao botão clicado
                    this.classList.add('active');

                    // Obter o valor do filtro
                    const filterValue = this.getAttribute('data-filter');

                    // Filtrar os cursos
                    courseCards.forEach(card => {
                        if (filterValue === 'all') {
                            // Mostrar todos os cursos
                            card.style.display = 'block';
                        } else {
                            // Verificar se a carga horária do curso corresponde ao filtro
                            const courseDuration = card.getAttribute('data-duration');
                            if (courseDuration === filterValue) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
        });
 