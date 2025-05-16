export interface TooltipProps {
    children: (id:string) => React.ReactNode;
	message: React.ReactNode;
	iconPosition?: 'left' | 'right';
	tooltipPosition?: 'top' | 'right';
}
