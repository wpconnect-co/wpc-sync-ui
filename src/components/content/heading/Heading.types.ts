
export interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
	semanticLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
	emoji?: string;
}
