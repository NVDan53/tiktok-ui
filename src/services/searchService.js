import * as requestAPI from '~/utils/request'

export const search = async (path, q, type = 'less') => {
    try {
        const response = await requestAPI.get(path, {
            params: {
                q,
                type
            }
        })

        return response;
    } catch (error) {
        console.log(error)
    }
}