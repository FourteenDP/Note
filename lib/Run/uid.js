const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const dirPath = "./"; // 指定目录路径
const mdFiles = glob.sync(path.join(dirPath, "*.md"));

mdFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  const parsedContent = matter(content);
  const frontMatter = parsedContent.data;

  if (!frontMatter.uid) {
    frontMatter.uid = Date.now();
    const updatedContent = matter.stringify(parsedContent.content, frontMatter);
    fs.writeFileSync(file, updatedContent);
  }
});
