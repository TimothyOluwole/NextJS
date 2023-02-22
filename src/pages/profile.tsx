import {Layout} from '@/features/layout/Layout'
import {UserProfile, withPageAuthRequired} from '@auth0/nextjs-auth0/client'

interface Props {
  isLoading: boolean
  user: UserProfile
}

export default withPageAuthRequired(function ProfilePage({
  isLoading,
  user,
}: Props) {
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <h1 className="mb-8 text-2xl font-bold">Profile</h1>
      <h4>Profile (client-side rendered)</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
})
