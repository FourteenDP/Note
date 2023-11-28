const fs = require("fs");
const glob = require("glob");
const matter = require("gray-matter");

const isIgnoreNotFrontMatter = true; // 是否忽略没有 frontMatter 的文件

const mdFiles = glob.sync("../../**/*.md", {
  ignore: ["node_modules/**/*", ".git/**/*"],
});

mdFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  const parsedContent = matter(content);
  const frontMatter = parsedContent.data;
  if (Object.keys(frontMatter).length === 0 && isIgnoreNotFrontMatter) {
    return;
  }

  // if (!frontMatter.uid) {
  const stat = fs.statSync(file);
  frontMatter.uid = new Date(stat.birthtime).getTime();
  const updatedContent = matter.stringify(parsedContent.content, frontMatter);
  fs.writeFileSync(file, updatedContent);
  console.log(`uid: ${frontMatter.uid} is added to ${file.split("/").pop()}`);
  // }
});
