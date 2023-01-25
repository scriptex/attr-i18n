# attr-i18n (Internationalization through HTML attributes)

[![Github Build](https://github.com/scriptex/attr-i18n/workflows/Build/badge.svg)](https://github.com/scriptex/attr-i18n/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/attr-i18n/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/attr-i18n&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-attr-i18n-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/attr-i18n/badge)](https://www.codefactor.io/repository/github/scriptex/attr-i18n)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/attr-i18n/README.md?pixel)](https://github.com/scriptex/attr-i18n/)

> Translate your vanilla websites or web apps using HTML attributes and a pinch of Javascript

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/attr-i18n?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/attr-i18n?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/attr-i18n?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/attr-i18n)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/attr-i18n?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/attr-i18n?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/attr-i18n?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/attr-i18n?style=plastic)

## Install

```sh
npm i attr-i18n

# or

yarn add attr-i18n
```

## Usage

First import and initialize the module.

```typescript
import { AttrI18n } from 'attr-i18n';

const languages = ['English', 'हिन्दी', 'français'];

new AttrI18n(languages, {
	attr: 'data-translation',
	path: 'assets/translations',
	debug: true,
	togglerID: 'language-toggle',
	defaultLang: languages[0]
});
```

Then in your HTML file(s):

1. Add an HTML select element with the ID corresponding to the `togglerID` option above. This select element will toggle between languages
2. Add the translation files in the folder you specified in the `path` option above. Each of the language files should be named after the language name as it appears in the `languages` array above.
3. Use the `data-translation` attribute as set in the option `attr` above by adding it to each element you want translated. The `data-translation` attribute accepts a dot-delimited string which points to the translation you want to use.

## Options

| Name          | Type      | Required | Default             | Description                                                                 |
| ------------- | --------- | -------- | ------------------- | --------------------------------------------------------------------------- |
| `attr`        | `string`  | false    | `data-attr-i18n`    | HTML attribute which contains the translation key                           |
| `path`        | `string`  | false    | `assets/attr-i18n`  | Path to the folder which contains the translation JSON file(s)              |
| `debug`       | `boolean` | false    | `false`             | Turns debug mode on/off                                                     |
| `togglerID`   | `string`  | false    | `attr-i18n-toggler` | ID attribute for the language toggle HTML select element                    |
| `defaultLang` | `string`  | false    | `languages[0]`      | The default language. If not provided, the first one from the array is used |

## Example HTML

### Language selector HTML select element

```html
<select id="language-toggle">
	<option>English</option>
	<option>हिन्दी</option>
	<option>français</option>
</select>
```

### Page content

```html
<h1 data-translation="form.desc">Fill Your Details!</h1>

<div class="form-row">
	<label data-translation="form.name">Name:</label>

	<input type="text" name="UserName" size="35" maxlength="35" value="" data-translation="form.name" />
</div>

<div class="form-row">
	<label data-translation="form.age">Age:</label>

	<input type="number" name="Age" size="35" maxlength="35" value="" data-translation="form.age" />
</div>

<div class="form-row">
	<p data-translation="form.exe.desc">Do you exercise at home?</p>

	<ul>
		<li>
			<input type="radio" name="exe" value="1" />

			<label data-translation="form.exe.yes">Yes</label>
		</li>

		<li>
			<input type="radio" name="exe" value="2" />

			<label data-translation="form.exe.no">No</label>
		</li>
	</ul>
</div>
```

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
