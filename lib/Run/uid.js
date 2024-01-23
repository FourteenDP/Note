const fs = require("fs");
const glob = require("glob");
const matter = require("gray-matter");
const dayjs = require("dayjs");
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
  const stat = fs.statSync(file);
  frontMatter.uid = Number(
    dayjs(new Date(stat.birthtime).getTime()).format("YYYYMMDDHHmmssSSS")
  );
  const updatedContent = matter.stringify(parsedContent.content, frontMatter);
  fs.writeFileSync(file, updatedContent);
  const fileName = file.split("\\").pop();
  console.log(`uid: ${frontMatter.uid} is added to ${fileName}`);
});
