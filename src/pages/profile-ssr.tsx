import {Layout} from '@/features/layout/Layout'
import {withPageAuthRequired} from '@auth0/nextjs-auth0'
import {UserProfile} from '@auth0/nextjs-auth0/client'

interface Props {
  user: UserProfile
}

export default function ProfileSSRPage({user}: Props): React.ReactElement {
  return (
    <Layout>
      <h1 className="mb-8 text-2xl font-bold">Profile</h1>
      <h4>Profile (server-side rendered)</h4>
      <pre data-testid="profile">{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export const getServerSideProps = withPageAuthRequired()
