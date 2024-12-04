import { readFile } from 'fs/promises';

export async function readFileLines(filePath: string) {
    try {
        // Read the file asynchronously
        const fileContent = await readFile(filePath, 'utf-8');

        // Split the content into lines and return
        return fileContent.split('\n').map((line) => line.trim());
    } catch (error) {
        console.error(`Error reading file: ${(error as Error).message}`);
        throw error;
    }
}
