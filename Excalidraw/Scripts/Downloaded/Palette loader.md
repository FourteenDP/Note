/*
Design your palette at http://paletton.com/
Once you are happy with your colors, click Tables/Export in the bottom right of the screen:
![|400](https://raw.githubusercontent.com/zsviczian/obsidian-excalidraw-plugin/master/images/scripts-sketch-palette-loader-1.jpg)
Then click "Color swatches/as Sketch Palette"
![|400](https://raw.githubusercontent.com/zsviczian/obsidian-excalidraw-plugin/master/images/scripts-sketch-palette-loader-2.jpg)
Copy the contents of the page to a markdown file in your vault. Place the file in the Excalidraw/Palettes folder (you can change this folder in settings).
![|400](https://raw.githubusercontent.com/zsviczian/obsidian-excalidraw-plugin/master/images/scripts-sketch-palette-loader-3.jpg)
![|400](https://raw.githubusercontent.com/zsviczian/obsidian-excalidraw-plugin/master/images/scripts-sketch-palette-loader-4.jpg)

```javascript
*/
//--------------------------
// Load settings
//--------------------------
if(!ea.verifyMinimumPluginVersion || !ea.verifyMinimumPluginVersion("1.7.19")) {
  new Notice("This script requires a newer version of Excalidraw. Please install the latest version.");
  return;
}

const api = ea.getExcalidrawAPI();
let settings = ea.getScriptSettings();
//set default values on first run
if(!settings["Palette folder"]) {
  settings = {
    "Palette folder" : {
      value: "Excalidraw/Palettes",
      description: "The path to the folder where you store the Excalidraw Palettes"
    },
    "Light-gray" : {
      value: "#505050",
      description: "Base light-gray used for mixing with the accent color to generate the palette light-gray"
    },
    "Dark-gray" : {
      value: "#e0e0e0",
      description: "Base dark-gray used for mixing with the accent color to generate the palette dark-gray"
    }
  };
  ea.setScriptSettings(settings);
}

const lightGray = settings["Light-gray"].value;
const darkGray = settings["Dark-gray"].value;

let paletteFolder = settings["Palette folder"].value.toLowerCase();
if(paletteFolder === "" || paletteFolder === "/") {
  new Notice("调色板文件夹不能是 Vault 的根文件夹");
  return;
}

if(!paletteFolder.endsWith("/")) paletteFolder += "/";


//--------------------------
// Select palette
//--------------------------
const palettes = app.vault.getFiles()
  .filter(f=>f.extension === "md" && f.path.toLowerCase() === paletteFolder + f.name.toLowerCase())
  .sort((a,b)=>a.basename.toLowerCase()<b.basename.toLowerCase()?-1:1);
const file = await utils.suggester(["Excalidraw Default"].concat(palettes.map(f=>f.name)),["Default"].concat(palettes), "选择一个调色板，按 ESC 键中止");
if(!file) return;

if(file === "Default") {
  api.updateScene({
    appState: {
	    colorPalette: {}
    }
  });
  return;
}

//--------------------------
// Load palette
//--------------------------
const sketchPalette = await app.vault.read(file);

const parseJSON = (data) => {
  try {
    return JSON.parse(data);
  } catch(e) {
	  return;
  }
}

const loadPaletteFromPlainText = (data) => {
  const colors = [];
  data.replaceAll("\r","").split("\n").forEach(c=>{
    c = c.trim();
    if(c==="") return;
    if(c.match(/[^hslrga-fA-F\(\d\.\,\%\s)#]/)) return;
    const cm = ea.getCM(c);
    if(cm) colors.push(cm.stringHEX({alpha: false}));
  })
  return colors;
}

const paletteJSON = parseJSON(sketchPalette);

const colors = paletteJSON
  ? paletteJSON.colors.map(c=>ea.getCM({r:c.red*255,g:c.green*255,b:c.blue*255,a:c.alpha}).stringHEX({alpha: false}))
  : loadPaletteFromPlainText(sketchPalette);
const baseColor = ea.getCM(colors[0]);

// Add black, white, transparent, gary
const palette = [[
  "transparent",
  "black",
  baseColor.mix({color: lightGray, ratio:0.95}).stringHEX({alpha: false}),
  baseColor.mix({color: darkGray, ratio:0.95}).stringHEX({alpha: false}),
  "white"
]];

// Create Excalidraw palette
for(i=0;i<Math.floor(colors.length/5);i++) {
  palette.push([
	  colors[i*5+1],
    colors[i*5+2],
    colors[i*5],
    colors[i*5+3],
    colors[i*5+4]
  ]);
}

const paletteSize = palette.flat().length;
const newPalette = {
  canvasBackground: palette.flat(),
  elementStroke: palette.flat(),
  elementBackground: palette.flat()
};


//--------------------------
// Check if palette has the same size as the current. Is re-paint possible?
//--------------------------
const oldPalette = api.getAppState().colorPalette;

//You can only switch and repaint equal size palettes
let canRepaint = Object.keys(oldPalette).length === 3 &&
  oldPalette.canvasBackground.length  === paletteSize &&
  oldPalette.elementBackground.length === paletteSize &&
  oldPalette.elementStroke.length     === paletteSize;

//Check that the palette for canvas background, element stroke and element background are the same
for(i=0;canRepaint && i<paletteSize;i++) {
  if(
    oldPalette.canvasBackground[i] !== oldPalette.elementBackground[i] ||
    oldPalette.canvasBackground[i] !== oldPalette.elementStroke[i]
  ) {
    canRepaint = false;
    break;
  }
}

const shouldRepaint = canRepaint && await utils.suggester(["尝试使用新调色板重新绘制绘图","只需加载新的调色板"], [true, false],"ESC 将加载调色板而不重新绘制");


//--------------------------
// Apply palette
//--------------------------
if(shouldRepaint) {
  const map = new Map();
  for(i=0;i<paletteSize;i++) {
    map.set(oldPalette.canvasBackground[i],newPalette.canvasBackground[i])
  }

  ea.copyViewElementsToEAforEditing(ea.getViewElements());
  ea.getElements().forEach(el=>{
    el.strokeColor = map.get(el.strokeColor)??el.strokeColor;
    el.backgroundColor = map.get(el.backgroundColor)??el.backgroundColor;
  })

  const canvasColor = api.getAppState().viewBackgroundColor;

  await api.updateScene({
    appState: {
      colorPalette: newPalette,
      viewBackgroundColor: map.get(canvasColor)??canvasColor
    }
  });

  ea.addElementsToView();
} else {
  api.updateScene({
    appState: {
	    colorPalette: newPalette
    }
  });
}
