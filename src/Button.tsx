import React, { FC } from "react";
import "./Button.css";

export interface ButtonProps {
	children: string | JSX.Element;
}

export const Button: FC<ButtonProps> = ({ children }): JSX.Element => {
	return <button className="button">{children}</button>;
};
