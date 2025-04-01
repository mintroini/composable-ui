import { WishlistPage } from 'components/wishlist/wishlist-page'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { createServerApp } from 'server/isr/server-app'

export const getStaticProps: GetStaticProps = async (context) => {
  const { ssg } = await createServerApp({ context })
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 1,
  }
}

export default function Wishlist() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const wishlistId = session?.user?.email || ''
  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return null // Or a loading spinner
  }

  if (!session) {
    return null
  }

  return <WishlistPage editable={true} wishlistId={wishlistId} />
}
