import Link from 'next/link';

function MainNav() {
	return (
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/blog/about">
					<a>About Us</a>
				</Link>
			</li>
			<li>
				<Link href="/blog/hello-world">
					<a>Blog Post</a>
				</Link>
			</li>
		</ul>
	);
}

export default MainNav;
