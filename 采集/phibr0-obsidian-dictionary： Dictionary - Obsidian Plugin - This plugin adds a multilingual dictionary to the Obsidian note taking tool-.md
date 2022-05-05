---
title: phibr0-obsidian-dictionary： Dictionary - Obsidian Plugin - This plugin adds a multilingual dictionary to the Obsidian note taking tool-
date: 2022-05-06 00:51:46
tag: 
summary: Dictionary - Obsidian Plugin | This plugin adds a multilingual dictionary to the Obsidian note taking......
---
[![](https://camo.githubusercontent.com/33e796a1a00da691d45d57f89006184095e2d57d5bc7fc11e9163e379bf3094b/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3739363835333433343339373336303132382f3834373139383338303837383036393737312f53637265656e5f53686f745f323032312d30352d32365f61745f31322e34332e34335f504d2e706e673f77696474683d373336266865696768743d363736)](https://camo.githubusercontent.com/33e796a1a00da691d45d57f89006184095e2d57d5bc7fc11e9163e379bf3094b/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3739363835333433343339373336303132382f3834373139383338303837383036393737312f53637265656e5f53686f745f323032312d30352d32365f61745f31322e34332e34335f504d2e706e673f77696474683d373336266865696768743d363736)

# [](#obsidian-dictionary-plugin--)Obsidian Dictionary Plugin[

![](https://camo.githubusercontent.com/6ab3bf5d820b8b474339d089329712a3c4991d0d07e7870b9205ef1e9354d13d/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f762f7461672f7068696272302f6f6273696469616e2d64696374696f6e617279)

](https://github.com/phibr0/obsidian-dictionary/releases)[

![](https://camo.githubusercontent.com/5f519fc524ac9660dadadf02b54e35101d6cf0542c00d913633672d6b0e65af7/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f646f776e6c6f6164732f7068696272302f6f6273696469616e2d64696374696f6e6172792f746f74616c)

](https://camo.githubusercontent.com/5f519fc524ac9660dadadf02b54e35101d6cf0542c00d913633672d6b0e65af7/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f646f776e6c6f6164732f7068696272302f6f6273696469616e2d64696374696f6e6172792f746f74616c)

This Plugin adds a Dictionary to the [Obsidian](https://obsidian.md) Note-Taking tool.

## [](#usage)Usage

Open the _Command Palette_ (default: `ctrl` + `p`), search for _Open Dictionary View_ and run the command. You will see that a new View appears in the right Sidebar of Obsidian. You can set your default Language in Obsidian's Settings under _Plugin Options_ > _Obsidian Dictionary_ > _Default Language_.

## [](#supported-languages)Supported Languages

The following Languages are currently supported:

<table><thead><tr><th align="left">Language</th><th align="center">Synonym&nbsp;Popover</th><th align="center">Sidebar&nbsp;Lookup (Offline Support)</th><th align="center">UI Translated?</th></tr></thead><tbody><tr><td align="left">English (US)</td><td align="center">🗸</td><td align="center">🗸 (🗸)</td><td align="center">🗸</td></tr><tr><td align="left">English (UK)</td><td align="center"></td><td align="center">🗸 (🗸)</td><td align="center"></td></tr><tr><td align="left">Hindi</td><td align="center"></td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">Spanish</td><td align="center">🗸</td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">French</td><td align="center">🗸</td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">Japanese</td><td align="center"></td><td align="center">🗸</td><td align="center">🗸</td></tr><tr><td align="left">Russian</td><td align="center"></td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">German</td><td align="center">🗸</td><td align="center">🗸</td><td align="center">🗸</td></tr><tr><td align="left">Italian</td><td align="center">🗸</td><td align="center">🗸</td><td align="center">🗸</td></tr><tr><td align="left">Korean</td><td align="center"></td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">Brazilian Portuguese</td><td align="center"></td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">Arabic</td><td align="center"></td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">Turkish</td><td align="center"></td><td align="center">🗸</td><td align="center"></td></tr><tr><td align="left">Chinese</td><td align="center"></td><td align="center">🗸 (🗸)</td><td align="center">🗸</td></tr></tbody></table>

### [](#how-to-use-this-for-multiple-languages)How to use this for multiple Languages

To use a different language than your default language for the Dictionary and Synonym Popover you can add a `lang` or `language` key into your YAML Frontmatter. Use the following Values for the Language:

<table><thead><tr><th>Language</th><th align="center">Key</th></tr></thead><tbody><tr><td>English (US)</td><td align="center"><code>en-US</code></td></tr><tr><td>हिन्दी (Hindi)</td><td align="center"><code>hi</code></td></tr><tr><td>Español (Spanish)</td><td align="center"><code>es</code></td></tr><tr><td>Français (French)</td><td align="center"><code>fr</code></td></tr><tr><td>日本語 (Japanese)</td><td align="center"><code>ja</code></td></tr><tr><td>Русский (Russian)</td><td align="center"><code>ru</code></td></tr><tr><td>English (UK)</td><td align="center"><code>en_GB</code></td></tr><tr><td>Deutsch (German)</td><td align="center"><code>de</code></td></tr><tr><td>Italiano (Italian)</td><td align="center"><code>it</code></td></tr><tr><td>한국어 (Korean)</td><td align="center"><code>ko</code></td></tr><tr><td>Português do Brasil (Brazilian Portuguese)</td><td align="center"><code>pt-BR</code></td></tr><tr><td>اَلْعَرَبِيَّةُ‎ (Arabic)</td><td align="center"><code>ar</code></td></tr><tr><td>Türkçe (Turkish)</td><td align="center"><code>tr</code></td></tr><tr><td>中文 (Chinese)</td><td align="center"><code>zh</code></td></tr></tbody></table>

## [](#offline-dictionary)Offline Dictionary

As of Release 2.13.0 this Plugin has experimental offline Support for English and Chinese. The offline Dictionary is pretty big (about 35 megabytes), which is why it's not bundled with this Plugin by default. It will download the neccessary files **when you are using it for the first time**. That means your first look-up still requires an internet connection.

## [](#privacy)Privacy

This Plugin relies on third-party [API's](https://en.wikipedia.org/wiki/API) to find Definitions, Synonyms, etc. You can select from a Range of API’s and choose which one to trust, the Plugin will not make requests to API’s you didn’t allow it to. To find more Information about the different API’s click the “More Info“ Button in the Settings.

If you explicitly activate the **Advanced Synonym Search**, there will be one additional API Call to analyze the _whole_ Sentence the selected Word appears in. This will make the suggested Synonyms more accurate based on the context.

Even though this Plugin is fully Open-Source and thus can be looked over by anyone, the third-party API’s might not be.

## [](#how-to-make-this-plugin-better)How to make this Plugin better

### [](#translations)Translations

If you want to help and translate this Plugin to new languages, see [locales](https://github.com/phibr0/obsidian-dictionary/tree/master/src/l10n/locale).

### [](#new-apis)New API's

This Plugin is meant to be easily extensible! If you want to add a new API for a new (or already supported) Language see: [API Manager](/phibr0/obsidian-dictionary/blob/master/src/apiManager.ts).

You will need to create a new class for the new API, which implements [DefinitionProvider](/phibr0/obsidian-dictionary/blob/master/src/api/types.ts) or [SynonymProvider](/phibr0/obsidian-dictionary/blob/master/src/api/types.ts) (or both).

If the Language you are working with doesn't exist yet, add it to the `LANGUAGES` in [_constants.ts](/phibr0/obsidian-dictionary/blob/master/src/_constants.ts).

After that, add the API to the respective List in the [API Manager](/phibr0/obsidian-dictionary/blob/master/src/apiManager.ts) and finally open a Pull Request here on GitHub. This will automatically make it selectable in the Settings.

Special Thanks to [@mgmeyers](https://github.com/mgmeyers) for already making this Plugin a lot better!

## [](#variables)Variables

You can edit the Note Template for your local Dictionary in the Settings. Here is a List of Variables you can use:

*   `{{notice}}` → "Autogenerated by Obsidian Dictionary" (Localized)
*   `{{word}}` → The Word the File is created for
*   `{{pronunciationHeader}}` → "Pronunciations" (Localized)
*   `{{meaningHeader}}` → Same as above, but for "Meanings" (Localized)
*   `{{originHeader}}` → Same as above, but for "Origin" (Localized)
*   `{{phoneticList}}` → A List of all phonetics the Plugin found.
*   `{{meanings}}` → Same as above, but for meanings the Plugin found.
*   `{{origin}}` → Same as above, but for the word origin the Plugin found.

Localized means, that the Text changes based on Obsidians internal Language.

## [](#how-to-install)How to install

1.  Go to **Community Plugins** in your [Obsidian](https://www.obsidian.md) Settings and **disable** Safe Mode
2.  Click on **Browse** and search for “Obsidian Dictionary”
3.  Click install
4.  Toggle the Plugin on in the **Community Plugins** Tab

## [](#support-me)Support me

If you find this Plugin helpful, consider supporting me:

[![](https://camo.githubusercontent.com/0c794de0acf4f0d55848d91a29a1567acdbd3656a99e2db4c2bc358560fb98f5/68747470733a2f2f696d672e6275796d6561636f666665652e636f6d2f627574746f6e2d6170692f3f746578743d427579206d65206120636f6666656526656d6f6a693d26736c75673d70686962723026627574746f6e5f636f6c6f75723d35463746464626666f6e745f636f6c6f75723d66666666666626666f6e745f66616d696c793d496e746572266f75746c696e655f636f6c6f75723d30303030303026636f666665655f636f6c6f75723d464644443030)](https://www.buymeacoffee.com/phibr0)

This Plugin relies on the [Free Dictionary API](https://dictionaryapi.dev/) by [meetDeveloper](https://github.com/meetDeveloper). He is providing this API to the public for free and needs help from the community. [**More Information**](https://github.com/meetDeveloper/freeDictionaryAPI#important-note)