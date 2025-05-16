export interface PopUpProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
}
