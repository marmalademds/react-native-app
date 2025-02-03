import axios from 'axios'

export const randomUserApi = async () => {
    const apiUrl = "https://randomuser.me/api/?results=10"

    try {
        const response = await axios.get(apiUrl,
            {
                dataType: 'json',
            }
        )
        return response.data
    } catch (e) {
        console.error('failed to get random users', e)
    }
}

// const res = randomUserApi()

// console.log(JSON.stringify(res.data),null,2)