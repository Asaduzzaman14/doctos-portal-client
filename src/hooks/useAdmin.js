import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setadminLoading] = useState(true)

    useEffect(() => {
        const email = user?.email;
        if (email) {

            fetch(`https://docotrs-portal-server.vercel.app/admin/${email}`, {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setadminLoading(false)
                })

        }


    }, [user])

    return [admin, adminLoading]
}
export default useAdmin
