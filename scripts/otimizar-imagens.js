const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pastaOrigem = path.join(__dirname, '../assets/images');
const pastaDestino = path.join(__dirname, '../assets/images-otimizadas');

if (!fs.existsSync(pastaDestino)) {
    fs.mkdirSync(pastaDestino);
}

const arquivos = fs.readdirSync(pastaOrigem);

async function otimizar() {

    for (const arquivo of arquivos) {

        const extensao = path.extname(arquivo).toLowerCase();

        if (
            extensao === '.jpg' ||
            extensao === '.jpeg' ||
            extensao === '.png' ||
            extensao === '.webp'
        ) {

            const entrada = path.join(pastaOrigem, arquivo);

            const nome = path.parse(arquivo).name;

            const saida = path.join(
                pastaDestino,
                `${nome}.webp`
            );

            await sharp(entrada)
                .resize({
                    width: 1600,
                    withoutEnlargement: true
                })
                .webp({
                    quality: 80
                })
                .toFile(saida);

            console.log(`✓ ${arquivo}`);
        }
    }

    console.log('\n🎉 Todas as imagens foram otimizadas!');
}

otimizar();