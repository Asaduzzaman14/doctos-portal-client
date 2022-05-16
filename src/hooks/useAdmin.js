import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        const email = user?.email;
        if (email) {

            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)

                })

        }


    }, [user])

    return [admin, setAdmin]
}
export default useAdmin
