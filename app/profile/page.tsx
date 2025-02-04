import { UserProfile } from "@/components/profile/userProfile"
import { verifySession } from "@/lib/dal";
import getCurrentUser from "../../hooks/getCurrentUser";


interface ProfileProp {
    searchParams: {
        cameFrom?: string
    }
}

export default async function Profile({ searchParams }: ProfileProp) {
    const session = await verifySession()
    const user = await getCurrentUser(session.userId)
    
    return (
        <div>
            <UserProfile
                user={user}/>
        </div>
    )
}


