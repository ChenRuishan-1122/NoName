const books = [
  {
    title: "成为母亲",
    originalTitle: "From Here to Maternity",
    author: "[英] 安·奥克利",
    year: "2026",
    publisher: "中国友谊出版公司",
    category: "女性研究 / 社会学",
    description:
      "通过对母亲经验的深入访谈，呈现生育、养育、母职、产后抑郁与家庭分工中那些常被忽略的喜悦、隐痛与社会规训。",
    buyLink: "https://www.96192.com/product/detail/1216754",
    sourceLink: "https://www.96192.com/product/detail/1216754",
  },
  {
    title: "从达·芬奇到互联网",
    originalTitle: "Leonardo to the Internet",
    author: "[美] 托马斯·米萨",
    year: "2025",
    publisher: "中国工人出版社",
    category: "科技史 / 文化史",
    description:
      "从文艺复兴以来的技术与文化关系出发，梳理技术如何嵌入社会、制度与日常生活，并改变人类理解世界的方式。",
    buyLink: "https://aus.zxhsd.com/kgsm/ts/2025/10/31/6695794.shtml",
    sourceLink: "https://aus.zxhsd.com/kgsm/ts/2025/10/31/6695794.shtml",
  },
  {
    title: "可持续盈利",
    originalTitle: "Sustainable Profit",
    author: "[英] 马克·谢勒",
    year: "2025",
    publisher: "中国友谊出版公司",
    category: "商业 / 可持续发展",
    description:
      "围绕可持续商业转型，讨论企业如何在环境责任、社会价值与长期盈利之间建立新的增长逻辑。",
    buyLink: "https://aus.zxhsd.com/kgsm/ts/2025/09/02/6663834.shtml",
    sourceLink: "https://aus.zxhsd.com/kgsm/ts/2025/09/02/6663834.shtml",
  },
  {
    title: "可再生能源浪潮",
    originalTitle: "The Renewable Energy Wave",
    author: "公开资料待补充",
    year: "2025",
    publisher: "中国友谊出版公司",
    category: "能源 / 商业未来",
    description:
      "以技术、储能与商业化为线索，分析全球能源体系的局限与太阳能等可再生能源带来的转型机会。",
    buyLink: "https://jp.tfswufe.edu.cn/opac/book/058b334c4bf754562a096c780290b3d4",
    sourceLink: "https://jp.tfswufe.edu.cn/opac/book/058b334c4bf754562a096c780290b3d4",
  },
  {
    title: "经济学的观念",
    originalTitle: "Great Economic Thinkers",
    author: "[英] 乔纳森·康林 主编",
    year: "2025",
    publisher: "中国友谊出版公司",
    category: "经济思想史",
    description:
      "聚焦十三位重要经济学家及其思想谱系，在历史语境中理解经济学观念如何塑造现代社会与公共决策。",
    buyLink: "https://jp.tfswufe.edu.cn/opac/book/5da57c396ddc449ba409cbd05c52bbed",
    sourceLink: "https://jp.tfswufe.edu.cn/opac/book/5da57c396ddc449ba409cbd05c52bbed",
  },
  {
    title: "全球互联网极简史",
    originalTitle: "The History of the Internet in Byte-Sized Chunks",
    author: "[英] 克里斯·斯托克尔-沃克",
    year: "2024",
    publisher: "北京联合出版公司",
    category: "互联网史 / 科技",
    description:
      "从 Web 1.0 到 Web 3.0，把复杂的技术与社会变革化为清晰故事，追溯互联网的过去、现在与未来。",
    buyLink: "https://read.douban.com/ebook/486454984/",
    sourceLink: "https://read.douban.com/ebook/486454984/",
  },
  {
    title: "金融纸牌屋",
    originalTitle: "The Problem of Twelve",
    author: "[美] 约翰·科茨",
    year: "2024",
    publisher: "中国友谊出版公司",
    category: "金融 / 经济",
    description:
      "揭示指数基金与私募股权基金在美国经济和政治中的力量扩张，讨论金融集中化带来的治理与公共风险。",
    buyLink: "https://read.douban.com/ebook/486454781/",
    sourceLink: "https://read.douban.com/ebook/486454781/",
  },
  {
    title: "Web 3：科技新趋势",
    originalTitle: "Web3",
    author: "公开资料待补充",
    year: "2024",
    publisher: "浙江大学出版社",
    category: "Web3 / 科技趋势",
    description:
      "介绍互联网迭代、Web 3 核心特征与关键技术，并延伸到元宇宙、区块链、NFT、DAO 与新商业形态。",
    buyLink: "https://www.books.com.tw/products/CN11945387",
    sourceLink: "https://www.books.com.tw/products/CN11945387",
  },
  {
    title: "人类不会停止说谎",
    originalTitle: "A History of Delusions",
    author: "[英] 娜塔莎·蒂德 等",
    year: "2023",
    publisher: "中国友谊出版公司",
    category: "世界史 / 谎言与权力",
    description:
      "从战争、权力与阴谋切入，呈现人类历史中谎言如何被制造、传播、相信，并持续改变群体行动。",
    buyLink: "https://ireader.com.cn/index.php?bid=13027989&ca=bookdetail.index&pca=bookdetail.index",
    sourceLink: "https://ireader.com.cn/index.php?bid=13027989&ca=bookdetail.index&pca=bookdetail.index",
  },
  {
    title: "行星的秘密生活",
    originalTitle: "The Secret Lives of Planets",
    author: "[英] 保罗·默丁",
    year: "2022",
    publisher: "九州出版社",
    category: "天文学 / 科普",
    description:
      "围绕太阳系中的行星、卫星、小行星等天体，描绘发现、运行、秩序与混乱交织而成的星空图谱。",
    buyLink: "https://www.zglibrary.com/detail/3173123",
    sourceLink: "https://www.zglibrary.com/detail/3173123",
  },
];

const bookList = document.querySelector(".book-list");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

bookList.innerHTML = books
  .map(
    (book, index) => `
      <article class="book-card">
        <a class="book-cover" href="${book.buyLink}" target="_blank" rel="noopener noreferrer" aria-label="查看《${book.title}》">
          <span class="book-year">${book.year}</span>
          <strong>${book.title}</strong>
          <small>${book.publisher}</small>
        </a>
        <div class="book-content">
          <div class="book-number">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <p class="book-meta">${book.year} · ${book.category}</p>
            <h3>${book.title}</h3>
            <p class="book-original">${book.originalTitle}</p>
            <p class="book-author">${book.author}｜${book.publisher}</p>
            <p class="book-description">${book.description}</p>
            <div class="book-actions">
              <a href="${book.buyLink}" target="_blank" rel="noopener noreferrer">购买 / 详情</a>
              <a href="${book.sourceLink}" target="_blank" rel="noopener noreferrer">资料来源</a>
            </div>
          </div>
        </div>
      </article>
    `,
  )
  .join("");
