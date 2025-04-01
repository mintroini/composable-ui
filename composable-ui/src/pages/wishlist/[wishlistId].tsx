import { WishlistPage } from 'components/wishlist'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { createServerApp } from 'server/isr/server-app'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ssg } = await createServerApp({ context })
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    // restart the checkout if the user refreshes the page
    redirect: context.query.step ? { destination: '/checkout' } : undefined,
  }
}

const Page = () => {
  const router = useRouter()
  const { wishlistId } = router.query
  return <WishlistPage editable={false} wishlistId={wishlistId as string} />
}

export default Page
