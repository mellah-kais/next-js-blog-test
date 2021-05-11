import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import Head from 'next/head';
import Date from '../../components/date';

export default function Post({ postData }) {
	return (
		<Layout>
			{postData.title}
			<br />
			<Date dateString={postData.date} />
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			<Head>
				<title>{postData.title}</title>
			</Head>
		</Layout>
	);
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
