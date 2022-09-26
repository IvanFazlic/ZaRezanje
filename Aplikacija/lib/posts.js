import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Dohvati imena fajlova iz putanje /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Ukloni ".md" iz imena fajla da se dobije id
    const id = fileName.replace(/\.md$/, '');

    // Procitaj sadrzaj fajlova kao string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Iskoriscenje gray-mattera da se izvade metapodaci
    const matterResult = matter(fileContents);

    // Kombinovanje podataka sa id-em
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sortiranje objava po datumu
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Vraca niz koji izgleda ovako:
  // [
  //   {
  //     params: {
  //       id: 'Renderovanje-Pre-Prikazivanja'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'Staticko-Generisanje'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Iskoristi gray-matter pa parsiras metapodatke iz posts sekcije
  const matterResult = matter(fileContents);

  // Iskoristi remark da pretvoris markdown u HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Kombinuj podatke sa id-em i contentHTML-om
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}