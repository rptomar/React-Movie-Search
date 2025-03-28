import React from 'react';

const Footer = () => {
	return (
		<div className="mt-auto">
			<footer className="py-6 text-center bg-white/80 backdrop-blur-sm border-t border-indigo-50">
				<p className="text-slate-600">
					Made with <span className="text-red-500 inline-block animate-pulse text-xl">♥</span> by 
					<span className="text-indigo-700 font-medium ml-1">Rohit Pal</span>
				</p>
				<p className="text-slate-500 text-sm mt-2">
					All Rights Reserved. Copyright © 2025
				</p>
			</footer>
		</div>
	);
};

export default Footer;
