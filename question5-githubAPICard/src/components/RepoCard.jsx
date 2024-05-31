
export function RepoCard({repo}) {
    return (
        <div className="repoCards">
            <a href={repo.html_url} className="repoCardTitle">{repo.name}</a>
            <p className="repoCardDesc">{repo.description}</p>
        </div>
    )
}