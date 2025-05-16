import React from "react";

export interface BaseInputProps {
	label: React.ReactNode;
	instructions?: React.ReactNode;
	status? : 'idle' | 'valid' | 'invalid';
	errorMessage?: string;
	labelHidden?: boolean
}


