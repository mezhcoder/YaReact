class Repository {
    constructor() {
        this.repositories = {
            "test": [ {
                number: 1368,
                commit: "hello friend",
                branch: "master",
                branch_hex: "9d900d",
                author: "zhcoder",
                unixCommit: 1200003,
                unixTimeSec: 1230
            },
                {
                    number: 1407,
                    commit: "how are you?",
                    branch: "master",
                    branch_hex: "19c00f",
                    author: "zhcoder",
                    unixCommit: 1200003,
                    unixTimeSec: 1230
                }
            ]
        }
    }
    exitsRepository(repository) {
        console.log(repository);
        return this.repositories.hasOwnProperty(repository);
    }
    getCards(repository) {
        return this.repositories[repository];
    }
    addCard(repository, number, commit, branch, branch_hex, author, unixCommit, unixTimeSec) {
        this.repositories[repository].push({
            number: number,
            commit: commit,
            branch: branch,
            branch_hex: branch_hex,
            author: author,
            unixCommit: unixCommit,
            unixTimeSec: unixTimeSec
        })
    }
}

export default Repository;
