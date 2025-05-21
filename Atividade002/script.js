document.addEventListener('DOMContentLoaded', () => {

alert('Está é a versão do site feita para o Github, caso queira acessar a versão original entre em contato comigo: emanoel.maffei@gmail.com');

console.log('O HTML foi completamente carregado e o DOM está pronto.');
console.log('._._._._.._._._._.')
console.log('Execução do Código Iniciada')

try {

    /* inicio do codigo */

    /* videos */
    const video_fallen_order_1 = document.getElementById('video-fallen-order-1');
    const video_lightsaber = document.getElementById('video-lightsaber');

    
    /* secoes */
    
    const sections = document.querySelectorAll('.section');
    let section = null;
    
    function Start() {
        /* video 1 */
        video_fallen_order_1.style.display = 'block';
        video_fallen_order_1.play();
        video_fallen_order_1.muted = false;

        /* sections */

        setTimeout(() => {
            for (section of sections) {
                section.style.display = 'flex';
            }
        }, 10000);
    }

    video_fallen_order_1.addEventListener('ended', () => {
        for (section of sections) {
            section.style.opacity = '1';
        }

        video_fallen_order_1.style.display = 'none';
        video_lightsaber.style.display = 'block';
        video_lightsaber.play();
        video_lightsaber.loop = true;

        /* falta fazer com que ao finalizar o video-fallen-order-1, o video-lightsaber aparece de forma gradual */
    })
    
    /* Start */
    setTimeout(Start, 12000);
    



    /* fim do codigo */
    console.log('Código Executado com Êxito');
    console.log('._._._._.._._._._.');
} catch (error) {
    /* caso este catch de erro... nao tem muito o que fazer... */
    console.log(`Código com Falhas: *|${error}|*`);
    console.log('._._._._.._._._._.');
    setTimeout(() => {
        console.log('._._._._.._._._._.');
        console.log('Reiniciando em 3 segundos...')
        setTimeout(() => {
            console.log('Reiniciando em 2 segundos...')
            setTimeout(() => {
                console.log('Reiniciando em 1 segundo...')
                setTimeout(() => {
                    console.log('Reiniciando...')
                    setTimeout(() => {
                        location.reload();
                    }, 500)
                }, 1000)
            }, 1000)
        }, 1000);
    }, 1000);
}

})