// src/utils/fetchReadmeImages.js
export async function fetchReadmeImages(owner, repo) {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/readme`,
            { headers: { Accept: 'application/vnd.github.v3.raw' } }
        );
        if (!response.ok) return [];
        const text = await response.text();
        const images = [];

        // Поиск изображений в формате Markdown: ![alt](url)
        const markdownRegex = /!\[.*?\]\((.*?)\)/g;
        let match;
        while ((match = markdownRegex.exec(text)) !== null) {
            images.push(match[1]);
        }

        // Поиск изображений в HTML-тегах: <img ... src="url" ...>
        const htmlRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
        while ((match = htmlRegex.exec(text)) !== null) {
            images.push(match[1]);
        }

        // Фильтрация нежелательных ссылок (например, бейджей)
        const ignoredPatterns = ['forthebadge.com', 'img.shields.io'];
        const filteredImages = images.filter((url) =>
            !ignoredPatterns.some((pattern) => url.includes(pattern))
        );

        return filteredImages;
    } catch (error) {
        console.error('Ошибка при загрузке README:', error);
        return [];
    }
}