---<%*
//If File is untitled prompt the User to set a Title (Source: https://github.com/SilentVoid13/Templater/discussions/259)
let title = tp.file.title
if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title") ?? "Untitled";
    await tp.file.rename(`${title}`);
} %>
date: "<% tp.file.creation_date("dddd Do MMMM YYYY HH:mm") %>"
topic: <% tp.file.cursor(1) %>
tags:
  - <% tp.file.folder() %>/<% tp.file.cursor(1) %>
aliases: []
<%*
//If this File is in my English Folder set the language correctly. I assume it will be German otherwise
//This is mostly for the Dictionary Plugin Integration
if(tp.file.folder() === "Englisch") {
	tR += "language: en-US";
} else {
	tR += "language: de";
} %>
---

# <% tp.file.title %>

<% tp.file.cursor(2) %>