import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '../attached_assets/generated_images');

if (!fs.existsSync(directoryPath)) {
    console.error(`Directory not found: ${directoryPath}`);
    process.exit(1);
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file).toLowerCase() === '.png') {
            const inputPath = path.join(directoryPath, file);
            const outputPath = path.join(directoryPath, path.basename(file, '.png') + '.webp');

            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(() => {
                    console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
                })
                .catch((err) => {
                    console.error(`Error converting ${file}: `, err);
                });
        }
    });
});
