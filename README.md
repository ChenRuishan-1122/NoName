# 个人译者作品网页

这是一个可直接部署的静态个人网页模板，用于展示译者简介、已出版译作、封面图片、作品简介和购买链接。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 如何替换为真实内容

1. 在 `index.html` 中替换页面标题、译者简介、邮箱和版权姓名。
2. 在 `script.js` 的 `books` 数组中替换每本书的：
   - `title`：译作标题
   - `author`：原作者
   - `year`：出版年份与分类
   - `image`：封面图片地址
   - `description`：译作简介
   - `buyLink`：购买链接
   - `detailLink`：详情链接
3. 在 `styles.css` 中调整主题色、字体、间距或卡片样式。

## 部署建议

可部署到 GitHub Pages、Netlify、Vercel 或任意静态网站托管服务。
