window.revelar = ScrollReveal({ reset:true });

revelar.reveal('.animation-top', {
    duration: 1500,
    distance: '60px',
    origin: 'top'
});

revelar.reveal('.animation-bottom', {
    duration: 1500,
    distance: '100px',
    origin: 'bottom'
});

revelar.reveal('.animation-left', {
    duration: 1500,
    distance: '100px',
    origin: 'left'
});

revelar.reveal('.animation-right', {
    duration: 1500,
    distance: '100px',
    origin: 'right'
});

revelar.reveal('.animation-projetos', {
    duration: 2000,
    interval: 10000,
    distance: '1000px',
    origin: 'bottom'
});
