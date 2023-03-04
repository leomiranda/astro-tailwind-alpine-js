import { Alpine as AlpineType } from 'alpinejs';

export interface ExtendedAlpineType extends AlpineType {
	$persist?: XData;
	'@click'?: XData;
}

export interface HTMLAttributes {
	'@click'?: XData;
}

declare global {
	interface Window {
		Alpine: ExtendedAlpineType;
	}
}
