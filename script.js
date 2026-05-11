const books = [
  {
    title: "《远方来信》",
    author: "原著：艾琳·沃克",
    year: "2024 · 文学小说",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    description:
      "一部关于迁徙、记忆与家庭秘密的长篇小说。译文重点保留原作细腻的心理节奏，并让对话更贴近中文读者的阅读习惯。",
    buyLink: "https://book.douban.com/",
    detailLink: "https://book.douban.com/",
  },
  {
    title: "《时间的花园》",
    author: "原著：马丁·格林",
    year: "2023 · 自然写作",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
    description:
      "结合植物学、散文与旅行观察的自然写作。翻译时兼顾术语准确性与抒情语气，呈现四季流动的文字质感。",
    buyLink: "https://www.jd.com/",
    detailLink: "https://book.douban.com/",
  },
  {
    title: "《城市如何呼吸》",
    author: "原著：莉娜·陈",
    year: "2022 · 社科纪实",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description:
      "从街区更新、公共空间和普通人的生活经验出发，理解城市的生长方式。译文注重逻辑清晰和案例背景补充。",
    buyLink: "https://www.dangdang.com/",
    detailLink: "https://book.douban.com/",
  },
];

const bookGrid = document.querySelector(".book-grid");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

bookGrid.innerHTML = books
  .map(
    (book) => `
      <article class="book-card">
        <img src="${book.image}" alt="${book.title}封面示意图" loading="lazy" />
        <div class="book-content">
          <h3>${book.title}</h3>
          <p class="book-meta">${book.author}｜${book.year}</p>
          <p class="book-description">${book.description}</p>
          <div class="book-actions">
            <a class="button primary" href="${book.buyLink}" target="_blank" rel="noopener noreferrer">购买</a>
            <a class="button secondary" href="${book.detailLink}" target="_blank" rel="noopener noreferrer">了解更多</a>
          </div>
        </div>
      </article>
    `,
  )
  .join("");
