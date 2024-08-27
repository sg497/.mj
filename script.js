document.addEventListener('DOMContentLoaded', () => {
    const servicePanels = document.querySelectorAll('.service-panel');

    servicePanels.forEach(panel => {
        const image = panel.querySelector('.service-image');
        const description = panel.querySelector('.description');

        image.addEventListener('click', () => {
            // Esconde todas as descrições
            document.querySelectorAll('.description').forEach(desc => {
                if (desc !== description) {
                    desc.style.display = 'none';
                }
            });

            // Alterna a visibilidade da descrição clicada
            description.style.display = (description.style.display === 'block') ? 'none' : 'block';
        });
    });
});
