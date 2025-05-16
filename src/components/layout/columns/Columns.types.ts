import React from "react";

export interface ColumnProps {
	size:  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	children: React.ReactNode
}
export interface ColumnsProps extends React.ComponentPropsWithoutRef<"div"> {
    columns: ColumnProps[];
}
