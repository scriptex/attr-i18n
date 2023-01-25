const DEFAULT_NAME = 'attr-i18n';

const enum AttrI18nDebugLevel {
	DEBUG = 'log',
	INFO = 'info',
	WARN = 'warn',
	ERROR = 'error'
}

export type AttrI18nOptions = {
	attr: string;
	path: string;
	debug: boolean;
	togglerID: string;
	defaultLang: string;
};

export class AttrI18n {
	private attr: string;
	private path: string;
	private debug: boolean;
	private options: AttrI18nOptions;
	private languages: string[];
	private togglerID: string;
	private localStorageKey: string;

	constructor(languages: string[], opts: Partial<AttrI18nOptions>) {
		this.languages = languages;
		this.options = {
			attr: `data-${DEFAULT_NAME}`,
			path: `assets/${DEFAULT_NAME}`,
			debug: false,
			togglerID: `${DEFAULT_NAME}-toggler`,
			defaultLang: this.languages[0],
			...opts
		};

		this.path = this.sanitizePath(this.options.path);
		this.debug = this.options.debug;
		this.attr = this.options.attr;
		this.localStorageKey = this.generateKeyFromHost();
		this.togglerID = this.options.togglerID;

		if (!this.getLanguage() && this.options.defaultLang) {
			this.setSavedLanguage(this.options.defaultLang);
		}

		document.addEventListener('DOMContentLoaded', () => {
			this.attachOnChangeToi18nToggler(this.togglerID);
		});

		this.init();
	}

	public async init(): Promise<void> {
		const lang = this.getLanguage();

		if (lang && !this.languages.includes(lang)) {
			this.printMsg(`${lang} is not supported.`, AttrI18nDebugLevel.ERROR);

			return;
		}

		if (!lang) {
			this.printMsg('No language is set, default language will be used.', AttrI18nDebugLevel.WARN);

			return;
		} else {
			document.addEventListener('DOMContentLoaded', () => {
				this.setTogglerValue(lang, this.togglerID);
			});
		}

		const strings = await this.loadLangFile(lang);

		if (!strings) {
			this.printMsg(`Failed to load translation file for ${lang}.`, AttrI18nDebugLevel.ERROR);

			return;
		}

		const elements = this.getElementsForTranslation();

		if (!elements) {
			this.printMsg('No element found to translate.', AttrI18nDebugLevel.WARN);

			return;
		}

		this.translate(elements, strings);

		this.printMsg(`${elements.length} elements were translated to ${lang}.`, AttrI18nDebugLevel.DEBUG);
	}

	private onChange(language: string): void {
		if (!this.languages.includes(language)) {
			this.printMsg(`${language} is not supported.`, AttrI18nDebugLevel.ERROR);

			return;
		}

		const currentLanguage = this.getLanguage();

		if (language !== currentLanguage) {
			this.printMsg(`Switching to ${language} from ${currentLanguage}`, AttrI18nDebugLevel.INFO);
			this.setSavedLanguage(language);
			this.init();
		} else {
			this.printMsg(`Selected language is the same as current language`, AttrI18nDebugLevel.DEBUG);
		}
	}

	private attachOnChangeToi18nToggler(id: string): void {
		const langToggler = document.getElementById(id);

		if (langToggler) {
			langToggler.addEventListener('change', event => {
				this.onChange((event.target as HTMLSelectElement).value);
			});
		} else {
			this.printMsg(`No language selector with id "${id}" found.`, AttrI18nDebugLevel.WARN);
		}
	}

	private setTogglerValue(lang: string, id: string) {
		const element = document.getElementById(id) as HTMLSelectElement | null;

		if (element) {
			element.value = lang;
			element.dispatchEvent(new Event('change'));
		} else {
			this.printMsg(`No language selector with id "${id}" found.`, AttrI18nDebugLevel.WARN);
		}
	}

	private translate(elements: HTMLElement[], translation: Record<string, string>): void {
		for (const element of elements) {
			const keys = element.getAttribute(this.attr)?.split('.');

			if (!keys) {
				continue;
			}

			const text = keys.reduce(
				(obj: Record<string, string>, i: string) => obj[i] as unknown as Record<string, string>,
				translation
			) as unknown as string;

			if (!text) {
				continue;
			}

			if (['input', 'select', 'textarea'].includes(element.tagName.toLowerCase())) {
				element.setAttribute('placeholder', text);
			} else {
				element.innerHTML = text;
			}
		}
	}

	private getElementsForTranslation(): HTMLElement[] {
		return Array.from(document.querySelectorAll('[' + this.attr + ']'));
	}

	private async loadLangFile(lang: string): Promise<Record<string, string> | void> {
		if (!lang) {
			return;
		}

		const file = `/${this.path}/${lang}.json`;

		try {
			return (await fetch(file)).json();
		} catch (e: any) {
			this.printMsg(e.message, AttrI18nDebugLevel.DEBUG);

			return;
		}
	}

	private getLanguage(): string | null {
		const lang = this.getSavedLanguage();

		if (!lang) {
			this.printMsg('no saved language found, default language will load', AttrI18nDebugLevel.DEBUG);
		}

		return lang;
	}

	private getSavedLanguage(): string | null {
		return window.localStorage.getItem(this.localStorageKey);
	}

	private setSavedLanguage(lang: string): void {
		if (!lang) {
			return;
		}

		window.localStorage.setItem(this.localStorageKey, lang);
	}

	private generateKeyFromHost(): string {
		return `${window.location.host}-${DEFAULT_NAME}`;
	}

	private sanitizePath(path: string): string {
		path = path.trim();

		if (path[0] === '/') {
			path = path.slice(1, path.length);
		}

		if (path[path.length - 1] === '/') {
			path = path.slice(0, -1);
		}

		return path;
	}

	private printMsg(message: string, level: AttrI18nDebugLevel): void {
		if (!this.debug) {
			return;
		}

		console[level](`${DEFAULT_NAME} | ${message}`);
	}
}

export default AttrI18n;
