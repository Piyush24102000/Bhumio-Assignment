const { fetchAssignee } = require("./fetchAssignee");
const { fetchIssues } = require("./fetchIssues");
const { fetchUnassigned } = require("./fetchUnassigned");

const getData = async () => {

    let totalCount
    let countMap = {}

    let dataAssignee = await fetchAssignee()
    let dataUnassigned = await fetchUnassigned()

    /* Excluding Story Count only considering tasks count */
    dataAssignee.pop()

    /* Update Total Count */
    totalCount = dataAssignee.length + dataUnassigned.length

    /* Maintain a map of Assignee and Unassigned Count */
    for (let i of dataAssignee) {
        let name = i.fields.assignee.displayName
        countMap[name] = countMap[name] ? countMap[name] + 1 : 1
    }
    for (let i of dataUnassigned) {
        let name = i.fields.assignee
        name = 'unassigned'
        countMap[name] = countMap[name] ? countMap[name] + 1 : 1
    }

    return { countMap, totalCount }
}

const getIssues = async () => {
    let issuesList = []
    const result = await fetchIssues()

    /* Extract the key and summary from result */
    for (let i = 0; i < result.length; i++) {
        issuesList.push(
            {
                key: result[i].key,
                summary: result[i].fields.summary
            }
        )
    }
    return issuesList.reverse()
}
module.exports = { getData, getIssues }