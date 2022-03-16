import Layout from '../../components/layout'
// import { getAllPostIds } from '../../lib/posts'

import { getAllPostIds, getPostData } from '../../lib/posts'

// get post data and return it as props
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}