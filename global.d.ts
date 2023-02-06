import { Alpine as AlpineType } from 'alpinejs';

export interface ExtendedAlpineType extends AlpineType {
	$persist?: XData;
}

declare global {
	interface Window {
		Alpine: ExtendedAlpineType;
	}
}
