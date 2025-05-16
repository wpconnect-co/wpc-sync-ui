export interface HelpLinkPreview {
	src: string;
	alt?: string;
}

export interface HelpLinkProps {
    text: string;
	href: string;
	preview?: HelpLinkPreview;
	direction?: 'vertical' | 'horizontal';
}
