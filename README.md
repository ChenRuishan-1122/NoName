# 陈锐珊译者个人网页

这是一个静态个人网页，用于展示译者陈锐珊的简介、照片、已出版译作与购买 / 详情链接。设计参考了 Melissa Febos 官网的作者页结构：大字号姓名、简洁导航、作者照片、简介与作品列表。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 内容维护

- 个人信息在 `index.html` 中维护：姓名、简介、邮箱与照片说明。
- 作品信息在 `script.js` 的 `books` 数组中维护：书名、原书名、原作者、年份、出版社、分类、简介、购买链接与资料来源。
- 样式在 `styles.css` 中维护：颜色、字体、排版、响应式布局与作品卡片视觉。

## 照片说明

当前仓库内的 `assets/chen-ruishan-photo.svg` 是根据“有光、又笑”的照片氛围制作的占位图。若要使用上传的原始照片，请将照片保存为：

```text
assets/chen-ruishan-photo.jpg
```

页面会优先读取这个 JPG；如果文件不存在，会自动回退到仓库内的 SVG 占位图。

## 部署建议

可部署到 GitHub Pages、Netlify、Vercel 或任意静态网站托管服务。
