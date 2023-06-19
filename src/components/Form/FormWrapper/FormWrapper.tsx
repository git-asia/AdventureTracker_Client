import React, { ReactNode } from 'react';
import './FormWrapper.scss';


type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
	return (
		<div className="form-wrapp">
			<h2>
				{title}
			</h2>
			<div className="form-body">
				{children}
			</div>
		</div>
	);
}
