import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
    name: 'IgniteReactJs',
    description: 'Curso ignite trilha ReactJS',
    link: 'https://github.com/assi23/IgniteReactJs'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1> Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}