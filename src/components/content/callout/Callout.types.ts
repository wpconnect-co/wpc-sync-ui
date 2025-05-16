export interface CalloutProps {
    children: React.ReactNode;
	icon?: React.ReactNode;
	bgColor: string;
	iconColor?: string;
	fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl',
	iconAlignment?: 'start' | 'center',
}

export interface PrebuiltCalloutProps  {
	type: 'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading',
	children: React.ReactNode;
	icon?: React.ReactNode;
	iconColor?: string;
	fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl',
	iconAlignment?: 'start' | 'center',
}
