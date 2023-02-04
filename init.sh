#!/bin/bash
git remote add subtree-- git@github.com:FourteenD/-.git
git remote add subtree-Vue3-Hello git@github.com:FourteenD/Vue3-Hello.git
git remote add subtree-Script git@github.com:FourteenD/Script.git
git remote add subtree-Code-Snippets git@github.com:FourteenD/Code-Snippets.git
git remote add subtree-CS-Hello git@github.com:FourteenD/CS-Hello.git

git subtree add --prefix 拾肆  subtree-- main
git subtree add --prefix 仓库/Vue3-Hello  subtree-Vue3-Hello main
git subtree add --prefix 仓库/Script  subtree-Script main
git subtree add --prefix 仓库/Code-Snippets  subtree-Code-Snippets main
git subtree add --prefix 仓库/CS-Hello  subtree-CS-Hello main
