
const fetchAssignee = async () => {
    try {
        /* -----------Make a Jira Query Language Command to search-------- */
        const jqlQuery = `assignee is not EMPTY`

        const config = {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${Buffer.from(
                    'office20001024@gmail.com:ATATT3xFfGF0C9SO97EsTIO5Ol5b5El_E7B-96XnWhASbrBL1jNoXHendQH8rLNqZUxvbqSusz9B_2LMF4sJ1Y8b8ySzuzpy0FkxO0h3jCrFtQCJmYvLPVTNE84sYFxU5t-KUBoI5rvFi48ja8ZRtC4jmmxHH0TIeXLnyYmU5sT368egz9sAMH0=8D55247A'
                ).toString('base64')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jql: jqlQuery,
                fields: ['assignee'],
                startAt: 0,
                maxResults: 100
            })
        }
        /* ----------Jira Search API (From Jira Cloud API Platform)------------ */

        const response = await fetch('https://piyushdemo.atlassian.net/rest/api/3/search', config)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data.issues

    } catch (error) {
        return error.message
    }
}
module.exports = { fetchAssignee }