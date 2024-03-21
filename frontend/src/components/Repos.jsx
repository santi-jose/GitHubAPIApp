import Repo from "./Repo"

const Repos = ({ repos }) => {

  return (
    <div>
      <ol>
        {console.log(repos)}
        {repos.map((repo) => {
          {console.log(repo)}
            <Repo key={repo.id} repo={repo} />
        })}
        {repos.length === 0 && <p>No repos found</p>}
      </ol>
    </div>
  )
}

export default Repos
