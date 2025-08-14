import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()
    const { data: role = null, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/role/${user?.email}`)
            return data.role || null
        },
    })
    return { role, isLoading }
}

export default useRole